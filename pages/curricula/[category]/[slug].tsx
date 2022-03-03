import { GetStaticPaths, GetStaticProps } from "next";
import { Curriculum, getSdk } from "../../../interfaces";
import { client } from "../../../utils";

const Curriculum = ({ title, slug }: Curriculum) => <div></div>;

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
