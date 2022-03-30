import { GetStaticProps } from "next";
import { NextSeo } from "next-seo";
import CurriculaList from "../../components/CurriculaList";
import { Category, Curriculum, getSdk } from "../../interfaces/graphcms";
import { client } from "../../lib/graphCmsClient";

type Props = {
  curricula: Array<Curriculum>;
  categories: Array<Category>;
};

const Curricula = ({ curricula, categories }: Props) => (
  <>
    <NextSeo title="Eğitimlerimiz" />
    <CurriculaList curricula={curricula} categories={categories} />
  </>
);

export const getStaticProps: GetStaticProps = async () => {
  const sdk = getSdk(client);
  const { curricula } = await sdk.Curricula();
  const { categories } = await sdk.Categories();

  return {
    props: { curricula, categories },
  };
};

export default Curricula;
