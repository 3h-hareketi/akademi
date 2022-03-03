import { GetStaticPaths, NextPage } from "next";
import { getSdk } from "../../interfaces";
import { client } from "../../utils";

const Curricula: NextPage = () => <div></div>;

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
