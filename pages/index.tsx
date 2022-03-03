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
        <meta name="description" content="Generated by create next app" />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
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
