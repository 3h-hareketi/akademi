import { GetStaticProps } from "next";
import { NextSeo } from "next-seo";
import CurriculaList from "../../components/CurriculaList";
import Layout from "../../components/Layout";
import { Category, Curriculum, getSdk, Stage } from "../../interfaces/graphcms";
import { client } from "../../lib/graphCmsClient";

type Props = {
  curricula: Array<Curriculum>;
  categories: Array<Category>;
};

const Curricula = ({ curricula, categories }: Props) => (
  <Layout>
    <NextSeo title="Eğitimlerimiz" />
    <CurriculaList curricula={curricula} categories={categories} />
  </Layout>
);

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const sdk = getSdk(client);
  const { curricula } = await sdk.Curricula({
    stage: preview
      ? ("DRAFT" as Stage.Draft)
      : ("PUBLISHED" as Stage.Published),
  });
  const { categories } = await sdk.Categories({
    stage: preview
      ? ("DRAFT" as Stage.Draft)
      : ("PUBLISHED" as Stage.Published),
  });

  return {
    props: { curricula, categories },
  };
};

export default Curricula;
