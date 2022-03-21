import { GetStaticProps } from "next";
import CurriculaList from "../../components/CurriculaList";
import { Category, Curriculum, getSdk } from "../../interfaces/graphcms";
import { client } from "../../utils";

type Props = {
  curricula: Array<Curriculum>;
  categories: Array<Category>;
};

const Curricula = ({ curricula, categories }: Props) => (
  <CurriculaList curricula={curricula} categories={categories} />
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
