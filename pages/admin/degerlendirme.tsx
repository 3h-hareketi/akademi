import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import { getSdk, Submission } from "../../interfaces/fauna";
import { client } from "../../lib/faunaGraphQlClient";

type Props = {
  submission: Submission;
};

const Validation = ({ submission }: Props) => {};

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

  return {
    props: { submission: submission },
  };
};

export default Validation;
