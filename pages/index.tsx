import { NextSeo } from "next-seo";
import Link from "next/link";
import CurriculumCard from "../components/CurriculumCard";
import Hero from "../components/Hero";
import { Curriculum, getSdk } from "../interfaces/graphcms";
import { client } from "../lib/graphCmsClient";

type Props = {
  curricula: Array<Curriculum>;
};

const Home = ({ curricula }: Props) => {
  return (
    <div className="py-10 mx-auto bg-gray-50">
      <NextSeo description="3H Akademi ile bir çok konu üzerinde eğitimlere katılın, sertifika alın" />
      <div className="container mx-auto bg-white px4">
        <Hero />
        <section>
          <div className="py-20 md:px-20 bg-gray-50 radius-for-skewed">
            <div className="container px-4 mx-auto">
              <div className="flex flex-wrap items-center justify-center mb-16 md:justify-between">
                <div className="text-center lg:text-left">
                  <span className="font-bold text-primary-500">
                    Buradan başlayın!
                  </span>
                  <h2 className="mt-2 text-4xl font-bold lg:text-5xl font-heading">
                    Öne Çıkan Eğitimler
                  </h2>
                </div>
                <Link href="/egitimler" passHref>
                  <a className="hidden px-6 py-2 font-bold leading-loose transition duration-200 bg-primary-500 md:inline-block rounded-l-xl rounded-t-xl hover:bg-primary-700 text-gray-50">
                    Daha Fazla Eğitim Gör
                  </a>
                </Link>
              </div>
              <div className="flex flex-wrap mb-4 -mx-4">
                {curricula.map((curriculum: Curriculum) => (
                  <CurriculumCard key={curriculum.id} curriculum={curriculum} />
                ))}
              </div>

              <div className="text-center">
                <Link href="/egitimler">
                  <a
                    className="inline-block px-6 py-2 font-bold leading-loose transition duration-200 bg-primary-500 md:hidden rounded-l-xl rounded-t-xl hover:bg-primary-700 text-gray-50"
                    href="#"
                  >
                    Daha Fazla Eğitim Gör
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
  const { curricula } = await sdk.FeaturedCurricula();

  return {
    props: {
      curricula,
    },
  };
}

export default Home;
