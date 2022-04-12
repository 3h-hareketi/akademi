import { Disclosure, Transition } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";
import { Interweave, ALLOWED_TAG_LIST } from "interweave";
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import { NextSeo } from "next-seo";
import { Fragment, useState } from "react";
import Choices from "../../components/Choices";
import { getSdk, Submission } from "../../interfaces/fauna";
import {
  Article,
  ArticleByIdQuery,
  getSdk as getGraphCmsSdk,
} from "../../interfaces/graphcms";
import { client } from "../../lib/faunaGraphQlClient";
import { client as graphCmsClient } from "../../lib/graphCmsClient";

type Props = {
  submission: Submission;
  articles: Article[];
};

const Validation = ({ submission, articles }: Props) => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const submitEvaluation = () => {
    setIsSubmitting(true);
  };

  return (
    <>
      <NextSeo
        title={submission.curriculumName}
        description={
          submission.user.name + submission.curriculumName + " Submission " ||
          ""
        }
        noindex={true}
      />
      <div className="py-10 mx-auto bg-gray-50">
        <div className="max-w-screen-xl px-4 py-10 mx-auto sm:px-6 lg:py-12 lg:px-8">
          <h2 className="mb-10 text-4xl font-bold lg:text-5xl font-heading">
            {submission.curriculumName} - {submission.user.name} (
            {submission.user.email})
          </h2>
          <form action="/api/evaluate" method="POST">
            {articles.map((article) => (
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
                        <div className="p-5">
                          {" "}
                          <Interweave
                            content={article.content.html}
                            allowList={new Array(...ALLOWED_TAG_LIST, "iframe")}
                          />
                          {article.choices && (
                            <div></div>
                            // <Choices
                            //   choices={article.choices}
                            //   correctAnswerCount={correctAnswerCount}
                            //   setCorrectAnswerCount={setCorrectAnswerCount}
                            // />
                          )}
                          {article.textAnswer && (
                            <>
                              <div className="mx-auto md:w-1/2">
                                <label
                                  htmlFor={article.id}
                                  className="block text-sm font-medium text-gray-700"
                                >
                                  {" "}
                                  {submission.user.name +
                                    " adlı kullanıcının cevabı:"}
                                </label>
                                <div className="mt-1">
                                  <textarea
                                    disabled
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
          </form>
          <div className="flex mt-12">
            {" "}
            <button
              className={`${
                isSubmitting
                  ? "bg-gray-600"
                  : "bg-primary-500 hover:bg-primary-700"
              } px-6 py-2 ml-auto font-bold leading-loose transition duration-200 md:inline-block rounded-l-xl rounded-t-xl text-gray-50`}
              onClick={submitEvaluation}
              disabled={isSubmitting}
            >
              Değerlendirmeyi tamamla
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { req } = context;
  const session = await getSession({ req });

  if (!session) {
    return {
      redirect: {
        permanent: false,
        destination: "/giris",
      },
    };
  }

  // Accept only in-house emails
  // if (!session.user.email?.includes("@3hhareketi.org")) {
  //   return {
  //     redirect: {
  //       permanent: false,
  //       destination: "/giris",
  //     },
  //   };
  // }

  if (!context?.params?.id || !(context.params.id instanceof String)) {
    return {
      notFound: true,
    };
  }

  const sdk = getSdk(client);
  const { findSubmissionByID: submission } = await sdk.SubmissionsById({
    id: context.params.id as string,
  });

  const graphCmsSdk = getGraphCmsSdk(graphCmsClient);
  const articles: ArticleByIdQuery[] = [];

  for (const article of submission?.answers?.data!) {
    articles.push(await graphCmsSdk.ArticleById({ id: article?.articleId! }));
  }

  return {
    props: { submission: submission, articles: articles },
  };
};

export default Validation;
