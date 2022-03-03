import Head from "next/head";
import Link from "next/link";
import CurriculumCard from "../components/CurriculumCard";
import Hero from "../components/Hero";
import { Curriculum, getSdk } from "../interfaces";
import { client } from "../utils";

type Props = {
  curricula: Array<Curriculum>;
};

const Home = ({ curricula }: Props) => {
  return (
    <div className="py-10 mx-auto bg-gray-50">
      <Head>
        <title>3H Akademi</title>
        <meta name="description" content="3H Akademi" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container mx-auto bg-white px4">
        <Hero />
        <section>
          <div className="py-20 md:px-20 bg-gray-50 radius-for-skewed">
            <div className="container px-4 mx-auto">
              <div className="flex flex-wrap items-center justify-center mb-16 md:justify-between">
                <div className="text-center lg:text-left">
                  <span className="font-bold text-primary">
                    Buradan başlayın!
                  </span>
                  <h2 className="text-4xl font-bold lg:text-5xl font-heading">
                    Öne Çıkan Kurslar
                  </h2>
                </div>
                <a
                  className="hidden px-6 py-2 font-bold leading-loose transition duration-200 bg-primary md:inline-block rounded-l-xl rounded-t-xl hover:bg-primaryShade text-gray-50"
                  href="#"
                >
                  Daha Fazla Kurs Gör
                </a>
              </div>
              <div className="flex flex-wrap mb-4 -mx-4">
                {curricula.map((curriculum: Curriculum) => (
                  <CurriculumCard key={curriculum.id} curriculum={curriculum} />
                ))}
              </div>

              <div className="text-center">
                <Link href="/curricula">
                  <a
                    className="inline-block px-6 py-2 font-bold leading-loose transition duration-200 bg-green-600 md:hidden rounded-l-xl rounded-t-xl hover:bg-green-700 text-gray-50"
                    href="#"
                  >
                    Daha Fazla Kurs Gör
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </section>{" "}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const sdk = getSdk(client);
  const { curricula } = await sdk.Curricula();
  return {
    props: {
      curricula,
    },
  };
}

export default Home;
