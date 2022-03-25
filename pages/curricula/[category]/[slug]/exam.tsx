import { GetStaticPaths, GetStaticProps } from "next";
import { Disclosure, Transition } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";
import { Interweave } from "interweave";
import { useSession } from "next-auth/react";
import Choices from "../../../../components/Choices";
import { Curriculum, getSdk } from "../../../../interfaces/graphcms";
import { client } from "../../../../lib/graphCmsClient";
import { Fragment, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

type Props = {
  curriculum: Curriculum;
};

const Exam = ({ curriculum }: Props) => {
  const { status } = useSession({ required: true });
  const router = useRouter();
  const [correctAnswerCount, setCorrectAnswerCount] = useState<number>(0);

  const submitResult = () => {
    axios
      .post("/api/result", {
        slug: curriculum.slug,
        score: correctAnswerCount,
      })
      .then((res) => {
        router.push(`/api/certificate/?id=${res.data.result}`);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="py-10 mx-auto bg-gray-50">
      <div className="max-w-screen-xl px-4 py-10 mx-auto sm:px-6 lg:py-12 lg:px-8">
        <h2 className="mb-10 text-4xl font-bold lg:text-5xl font-heading">
          {curriculum.title}
        </h2>
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
                    <div className="p-5">
                      {" "}
                      <Interweave content={article.content.html} />
                      {article.choices && (
                        <Choices
                          choices={article.choices}
                          correctAnswerCount={correctAnswerCount}
                          setCorrectAnswerCount={setCorrectAnswerCount}
                        />
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
            className="px-6 py-2 ml-auto font-bold leading-loose transition duration-200 bg-primary-500 md:inline-block rounded-l-xl rounded-t-xl hover:bg-primary-700 text-gray-50"
            onClick={submitResult}
          >
            Tamamla
          </button>
        </div>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const sdk = getSdk(client);
  const { curriculum } = await sdk.CurriculumBySlug({
    slug: context.params?.slug as string,
  });

  return {
    props: {
      curriculum,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const sdk = getSdk(client);
  const { curricula } = await sdk.Curricula();

  return {
    paths: curricula.map((curriculum) => {
      return {
        params: {
          category: curriculum.category?.slug,
          slug: curriculum.slug,
        },
      };
    }),
    fallback: false,
  };
};

export default Exam;
