import { GetStaticProps } from "next";
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

  return <CurriculaList curricula={curricula} categories={categories} />;
};

export const getStaticProps: GetStaticProps = async () => {
  const sdk = getSdk(client);
  const { curricula } = await sdk.Curricula();
  const { categories } = await sdk.Categories();

  return {
    props: { curricula, categories },
  };
};

export default Category;
