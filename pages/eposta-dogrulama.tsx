import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import { NextSeo } from "next-seo";

const EmaılCallback = () => (
  <>
    <NextSeo noindex={true} />
    <div className="py-10 text-center md:px-10 radius-for-skewed bg-gray-50">
      <div className="flex flex-wrap justify-center mx-auto">
        <div className="py-20 basis-1/2">
          <p className="py-3 text-l">
            Giriş yapmak için e-posta adresinize gelen linki kullanabilirsiniz.
          </p>
        </div>
      </div>
    </div>
  </>
);

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { req, res } = context;
  const session = await getSession({ req });

  if (session && res) {
    return {
      redirect: {
        permanent: false,
        destination: "/hesabim",
      },
    };
  }

  return { props: {} };
};

export default EmaılCallback;
