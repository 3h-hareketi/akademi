import { GetStaticPaths, GetStaticProps } from "next";
import { NextSeo } from "next-seo";
import CurriculaList from "../../../components/CurriculaList";
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
};

const Category = ({ curricula, categories, activeCategory }: Props) => (
  <>
    <NextSeo title={`${activeCategory.title} Eğitimlerimiz`} />
    <CurriculaList curricula={curricula} categories={categories} />
  </>
);

export const getStaticProps: GetStaticProps = async ({
  params,
  preview = false,
}) => {
  const sdk = getSdk(client);
  const { category } = await sdk.CurriculaByCategorySlug({
    categorySlug: params?.category as string,
    stage: preview
      ? ("DRAFT" as Stage.Draft)
      : ("PUBLISHED" as Stage.Published),
  });
  const curricula = category?.curricula;
  const { categories } = await sdk.Categories();
  const activeCategory = categories.find(
    (category) => category.slug === (params?.category as string)
  );

  return {
    props: { curricula, categories, activeCategory },
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
