import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import CurriculaList from "../../../components/CurriculaList";
import { Curriculum, Category, getSdk } from "../../../interfaces";
import { client } from "../../../utils";

type Props = {
  curricula: Array<Curriculum>;
  categories: Array<Category>;
};

const Category = ({ curricula, categories }: Props) => {
  const router = useRouter();
  const { pid } = router.query;

  const filteredCurricula = curricula.filter(
    (curriculum) => curriculum.category?.slug === pid
  );

  return (
    <CurriculaList curricula={filteredCurricula} categories={categories} />
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const sdk = getSdk(client);
  const { curricula } = await sdk.CurriculaByCategorySlug({
    categorySlug: params?.category as string,
  });
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
