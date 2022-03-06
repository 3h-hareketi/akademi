import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";
import { Curriculum, getSdk } from "../interfaces";
import { client } from "../utils";

type Props = {
  curriculum: Curriculum;
};

const Exam = (props: Props) => {
  return (
    <div className="py-10 mx-auto bg-gray-50">
      <div className="max-w-screen-xl px-4 py-10 mx-auto sm:px-6 lg:py-12 lg:px-8">
        <h2 className="mb-5 text-4xl font-bold lg:text-5xl font-heading">
          {props.curriculum.title}
        </h2>
        {props.curriculum.articles.map((article) => (
          <Disclosure key={article.id}>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-purple-900 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-primaryShade focus-visible:ring-opacity-75">
                  <span>{article.title}</span>
                  <ChevronUpIcon
                    className={`${
                      open ? "transform rotate-180" : ""
                    } w-5 h-5 text-purple-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                  {article.content.html}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        ))}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const sdk = getSdk(client);
  const { curriculum } = await sdk.getArticlesByCurriculum({
    id: "cl05eco1vm5do0dyvzybx6j3e", // curriculum #1
  });
  return {
    props: {
      curriculum,
    },
  };
}

export default Exam;
