import { GetStaticPaths, GetStaticProps } from "next";
import CurriculaList from "../../../components/CurriculaList";
import { Curriculum, Category, getSdk } from "../../../interfaces/graphcms";
import { client } from "../../../utils";

type Props = {
  curricula: Array<Curriculum>;
  categories: Array<Category>;
};

const Category = ({ curricula, categories }: Props) => (
  <CurriculaList curricula={curricula} categories={categories} />
);

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const sdk = getSdk(client);
  const { category } = await sdk.CurriculaByCategorySlug({
    categorySlug: params?.category as string,
  });
  const curricula = category?.curricula;
  const { categories } = await sdk.Categories();

  return {
    props: { curricula, categories },
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
