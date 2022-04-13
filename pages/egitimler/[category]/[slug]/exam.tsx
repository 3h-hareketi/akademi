import { Fragment, useState } from "react";
import { GetServerSideProps } from "next";
import { NextSeo } from "next-seo";
import { Disclosure, Transition } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";
import { ALLOWED_TAG_LIST, Interweave } from "interweave";
import { getCsrfToken, getSession } from "next-auth/react";
import { handle, redirect } from "next-runtime";
import Choices from "../../../../components/Choices";
import {
  Curriculum,
  getSdk as getGraphCmsSdk,
  Stage,
} from "../../../../interfaces/graphcms";
import { getSdk as getFaunaSdk } from "../../../../interfaces/fauna";
import { client as graphCmsClient } from "../../../../lib/graphCmsClient";
import { client as faunaClient } from "../../../../lib/faunaGraphQlClient";
import checkIfUserHasResultOrSubmit from "../../../../lib/checkIfUserHasResultOrSubmit";
import Layout from "../../../../components/Layout";

type Props = {
  curriculum: Curriculum;
  preview?: boolean;
};

const Exam = ({ curriculum, preview }: Props) => {
  const [correctAnswerCount, setCorrectAnswerCount] = useState<number>(0);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  return (
    <Layout preview={preview}>
      <NextSeo
        title={curriculum.title}
        description={curriculum.description || ""}
        noindex={true}
      />
      <form method="POST">
        <div className="py-10 mx-auto bg-gray-50">
          <div className="max-w-screen-xl px-4 py-10 mx-auto sm:px-6 lg:py-12 lg:px-8">
            <h2 className="mb-10 text-4xl font-bold lg:text-5xl font-heading">
              {curriculum.title}
            </h2>
            <input
              type="hidden"
              name="correctAnswerCount"
              value={correctAnswerCount}
            />
            {curriculum.articles.map((article) => (
              <Disclosure key={article.id} as="div" className="mt-6">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left rounded-lg text-primary-900 bg-primary-100 hover:bg-primary-200 focus:outline-none focus-visible:ring focus-visible:ring-primaryShade focus-visible:ring-opacity-75 h-14">
                      <span className="my-auto">{article.title}</span>
                      <ChevronUpIcon
                        className={`${
                          !open ? "transform rotate-180" : ""
                        } w-5 h-5 text-primary-500`}
                      />
                    </Disclosure.Button>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                        <div className="p-5 aspect-video">
                          {" "}
                          <Interweave
                            className="interweave-content"
                            content={article.content.html}
                            allowList={new Array(...ALLOWED_TAG_LIST, "iframe")}
                          />
                          {article.choices && (
                            <Choices
                              choices={article.choices}
                              correctAnswerCount={correctAnswerCount}
                              setCorrectAnswerCount={setCorrectAnswerCount}
                            />
                          )}
                          {article.textAnswer && (
                            <>
                              <div className="mx-auto md:w-1/2">
                                <label
                                  htmlFor={article.id}
                                  className="block text-sm font-medium text-gray-700"
                                >
                                  {" "}
                                  Cevabınız
                                </label>
                                <div className="mt-1">
                                  <textarea
                                    id={article.id}
                                    name={article.id}
                                    rows={3}
                                    className="block w-full mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                                  ></textarea>
                                </div>
                              </div>
                            </>
                          )}
                        </div>
                      </Disclosure.Panel>
                    </Transition>
                  </>
                )}
              </Disclosure>
            ))}
            <div className="flex mt-12">
              {" "}
              <button
                className={`${
                  isSubmitting
                    ? "bg-gray-600"
                    : "bg-primary-500 hover:bg-primary-700"
                } px-6 py-2 ml-auto font-bold leading-loose transition duration-200 md:inline-block rounded-l-xl rounded-t-xl text-gray-50`}
                type="submit"
                disabled={isSubmitting}
                onClick={(e) => {
                  setIsSubmitting(true);
                }}
              >
                Tamamla
              </button>
            </div>
          </div>
        </div>
      </form>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = handle({
  async get(context) {
    const { req, params } = context;
    const session = await getSession({ req });

    if (!session) {
      return redirect("/giris", 302);
    }

    const graphCmsSdk = getGraphCmsSdk(graphCmsClient);
    const faunaSdk = getFaunaSdk(faunaClient);
    const { curriculum } = await graphCmsSdk.CurriculumBySlug({
      slug: params?.slug as string,
    });

    // Check if user has already passed the exam
    await checkIfUserHasResultOrSubmit({
      userId: session.user.id,
      curriculum: curriculum,
    });

    return {
      props: {
        curriculum,
      },
    };
  },
  async post(context) {
    const { req, params } = context;
    const csrfToken = await getCsrfToken({ req });
    const session = await getSession({ req });

    if (!session) {
      return redirect("/giris", 302);
    }

    const graphCmsSdk = getGraphCmsSdk(graphCmsClient);
    const faunaSdk = getFaunaSdk(faunaClient);
    const { curriculum } = await graphCmsSdk.CurriculumBySlug({
      slug: params?.slug as string,
    });

    // Check user if already passed
    await checkIfUserHasResultOrSubmit({
      userId: session.user.id,
      curriculum: curriculum,
    });

    const score = parseInt(req.body.correctAnswerCount as string);
    const requiredCorrectAnswerCount =
      (curriculum?.articles?.length! * curriculum?.threshold!) / 100;

    if (curriculum?.manualApproval) {
      const submission = await faunaSdk.Submission({
        curriculumName: curriculum!.title,
        user: { connect: session!.user.id },
        score: score,
        date: new Date(),
      });

      for (const article of curriculum.articles) {
        if (article.textAnswer) {
          await faunaSdk.Answer({
            submission: { connect: submission.createSubmission._id },
            articleId: article.id,
            answer: req.body[article.id] as string,
          });
        }
      }

      return redirect(
        `/egitimler/${curriculum.category?.slug}/${curriculum.slug}/dogrulama-bekliyor`,
        302
      );
    } else {
      if (score < requiredCorrectAnswerCount) {
        return redirect(
          `/egitimler/${curriculum?.category?.slug}/${curriculum?.slug}/basarisiz`,
          302
        );
      }

      const { createResult: result } = await faunaSdk.Result({
        curriculumName: curriculum!.title,
        user: { connect: session!.user.id },
        score: score,
        date: new Date(),
      });

      return redirect(`/api/certificate?id=${result._id}`, 302);
    }
  },
});

export default Exam;
