import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import { NextSeo } from "next-seo";
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
  article: Article[];
};

const Validation = ({ submission }: Props) => {
  return <NextSeo title="Eğitim Değerlendirme" noindex={true} />;
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
