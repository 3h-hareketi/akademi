import { GetStaticPaths, GetStaticProps } from "next";
import { Curriculum, getSdk } from "../../../../interfaces";
import { client } from "../../../../utils";
import Image from "next/image";
import Link from "next/link";

const Curriculum = ({
  title,
  slug,
  category,
  description,
  image,
  articles,
}: Curriculum) => (
  <section>
    <div className="py-20 bg-gray-50 radius-for-skewed">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap items-center -mx-4">
          <div className="w-full px-4 mb-12 lg:mb-0 lg:w-1/2">
            <div className="max-w-md">
              <span className="font-bold text-primary">{category?.title}</span>
              <h2 className="mb-3 text-4xl font-bold lg:text-5xl font-heading">
                {title}
              </h2>
              <p className="max-w-sm mb-6 leading-loose text-gray-400">
                {description}
              </p>
              <ul className="font-bold text-gray-500">
                {articles.map((article) => (
                  <li key={article.id} className="flex items-center mb-2">
                    <svg
                      className="w-5 h-5 mr-2 text-primary"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>{article.title}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <Image
              className="rounded-xl"
              src={image?.url || "/placeholder.jpeg"}
              alt=""
              width={"540px"}
              height={"240px"}
            />
          </div>
        </div>
        <Link href={`/curricula/${category?.slug}/${slug}/exam`} passHref>
          <a className="inline-block px-6 py-2 ml-auto font-bold leading-loose transition duration-200 bg-primary-500 rounded-l-xl rounded-t-xl hover:bg-primary-700 text-gray-50">
            Sınava katıl
          </a>
        </Link>
      </div>
    </div>
  </section>
);

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const sdk = getSdk(client);
  const { curriculum } = await sdk.CurriculumBySlug({
    slug: params!.slug as string,
  });

  return {
    props: { ...curriculum },
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

export default Curriculum;
