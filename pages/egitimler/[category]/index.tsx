import { GetStaticPaths, GetStaticProps } from "next";
import { NextSeo } from "next-seo";
import CurriculaList from "../../../components/CurriculaList";
import Layout from "../../../components/Layout";
import {
  Curriculum,
  Category,
  getSdk,
  Stage,
} from "../../../interfaces/graphcms";
import { client } from "../../../lib/graphCmsClient";

type Props = {
  curricula: Array<Curriculum>;
  categories: Array<Category>;
  activeCategory: Category;
  preview: boolean;
};

const Category = ({
  curricula,
  categories,
  activeCategory,
  preview,
}: Props) => (
  <Layout preview={preview}>
    <NextSeo title={`${activeCategory.title} Eğitimlerimiz`} />
    <CurriculaList curricula={curricula} categories={categories} />
  </Layout>
);

export const getStaticProps: GetStaticProps = async ({
  params,
  preview = false,
}) => {
  const sdk = getSdk(client);
  const { category } = await sdk.CurriculaByCategorySlug({
    categorySlug: params?.category as string,
    stage: preview ? Stage.Draft : Stage.Published,
  });
  const curricula = category?.curricula;
  const { categories } = await sdk.Categories();
  const activeCategory = categories.find(
    (category) => category.slug === (params?.category as string)
  );

  return {
    props: { curricula, categories, activeCategory, preview },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const sdk = getSdk(client);
  const { categories } = await sdk.Categories();

  return {
    paths: categories.map((category) => ({
      params: {
        category: category.slug,
      },
    })),
    fallback: false,
  };
};

export default Category;
