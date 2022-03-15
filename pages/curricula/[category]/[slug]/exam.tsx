import { GetStaticPaths, GetStaticProps } from "next";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";
import { Interweave } from "interweave";
import { useSession } from "next-auth/react";
import Choices from "../../../../components/Choices";
import { Curriculum, getSdk } from "../../../../interfaces";
import { client } from "../../../../utils";

type Props = {
  curriculum: Curriculum;
};

const Exam = (props: Props) => {
  const { status } = useSession({ required: true });

  return (
    <div className="py-10 mx-auto bg-gray-50">
      <div className="max-w-screen-xl px-4 py-10 mx-auto sm:px-6 lg:py-12 lg:px-8">
        <h2 className="mb-5 text-4xl font-bold lg:text-5xl font-heading">
          {props.curriculum.title}
        </h2>
        {props.curriculum.articles.map((article) => (
          <Disclosure key={article.id} as="div" className="mt-2">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left rounded-lg text-primary-900 bg-primary-100 hover:bg-primary-200 focus:outline-none focus-visible:ring focus-visible:ring-primaryShade focus-visible:ring-opacity-75">
                  <span>{article.title}</span>
                  <ChevronUpIcon
                    className={`${
                      open ? "transform rotate-180" : ""
                    } w-5 h-5 text-primary-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                  <div className="p-5">
                    {" "}
                    <Interweave content={article.content.html} />
                    {article.choices && <Choices choices={article.choices} />}
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        ))}
        <div className="flex">
          {" "}
          <a
            className="px-6 py-2 ml-auto font-bold leading-loose transition duration-200 bg-primary-500 md:inline-block rounded-l-xl rounded-t-xl hover:bg-primary-700 text-gray-50"
            href="#"
          >
            Tamamla
          </a>
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