import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { Curriculum, getSdk, Node } from "../../interfaces";
import { client } from "../../utils";

const Curricula = ({ title, slug }: Curriculum) => <div></div>;

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
          slug: curriculum.slug,
        },
      };
    }),
    fallback: false,
  };
};

export default Curricula;
