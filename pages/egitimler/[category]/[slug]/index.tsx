import { GetServerSideProps } from "next";
import { getCsrfToken, getSession } from "next-auth/react";
import { NextSeo, CourseJsonLd } from "next-seo";
import Link from "next/link";
import { Curriculum, getSdk, Stage } from "../../../../interfaces/graphcms";
import { getSdk as getFaunaSdk } from "../../../../interfaces/fauna";
import { client } from "../../../../lib/graphCmsClient";
import { client as faunaClient } from "../../../../lib/faunaGraphQlClient";
import BlurImage from "../../../../components/BlurImage";
import Layout from "../../../../components/Layout";

type Props = {
  curriculum: Curriculum;
  resultId: boolean;
  csrfToken: string;
};

const CurriculumDetail = ({ curriculum, resultId, csrfToken }: Props) => (
  <Layout>
    <NextSeo
      title={curriculum.title}
      description={curriculum.description || ""}
    />
    <CourseJsonLd
      courseName={curriculum.title}
      description={curriculum.description || ""}
      provider={{ name: "3H Akademi", url: "https://www.3hhareketi.org/" }}
    />
    <section>
      <div className="py-20 bg-gray-50 radius-for-skewed">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap items-center -mx-4">
            <div className="w-full px-4 mb-12 lg:mb-0 lg:w-1/2">
              <div className="max-w-md">
                <span className="font-bold text-primary">
                  {curriculum.category?.title}
                </span>
                <h2 className="mb-3 text-4xl font-bold lg:text-5xl font-heading">
                  {curriculum.title}
                </h2>
                <p className="max-w-sm mb-6 leading-loose text-gray-400">
                  {curriculum.description}
                </p>
                <ul className="font-bold text-gray-500">
                  {curriculum.articles.map((article) => (
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
              <BlurImage
                className="rounded-xl"
                src={curriculum.image?.url || "/placeholder.jpeg"}
                alt=""
                width={"540px"}
                height={"240px"}
              />
            </div>
          </div>
          {resultId ? (
            <Link href={`/api/certificate?id=${resultId}`} passHref>
              <a className="inline-block px-6 py-2 ml-auto font-bold leading-loose transition duration-200 bg-primary-500 rounded-l-xl rounded-t-xl hover:bg-primary-700 text-gray-50">
                Sertifikanı Görüntüle
              </a>
            </Link>
          ) : (
            <Link
              href={`/egitimler/${curriculum.category?.slug}/${curriculum.slug}/exam`}
              passHref
            >
              <a className="inline-block px-6 py-2 ml-auto font-bold leading-loose transition duration-200 bg-primary-500 rounded-l-xl rounded-t-xl hover:bg-primary-700 text-gray-50">
                Sınava katıl
              </a>
            </Link>
          )}
        </div>
      </div>
    </section>
  </Layout>
);

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { req, params, preview = false } = context;
  const session = await getSession({ req });

  const sdk = getSdk(client);
  const { curriculum } = await sdk.CurriculumBySlug({
    slug: params?.slug as string,
    stage: preview
      ? ("DRAFT" as Stage.Draft)
      : ("PUBLISHED" as Stage.Published),
  });

  let resultId: string = "";

  if (session) {
    const faunaSdk = getFaunaSdk(faunaClient);
    const { findUserByID: user } = await faunaSdk.ResultsByUserID({
      id: session.user.id,
    });

    user?.results.data.find((result) => {
      if (result?.curriculumName === curriculum?.title) {
        resultId = result?._id!;
      }
    });
  }

  return {
    props: {
      csrfToken: await getCsrfToken(context),
      resultId: resultId,
      curriculum: curriculum,
    },
  };
};

export default CurriculumDetail;
