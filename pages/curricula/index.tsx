import { GetStaticProps } from "next";
import CurriculumListItem from "../../components/CurriculumListItem";
import { Curriculum, getSdk } from "../../interfaces";
import { client } from "../../utils";

type Props = {
  curricula: Array<Curriculum>;
};

const Curricula = ({ curricula }: Props) => (
  <section>
    <div className="py-20 bg-gray-50 radius-for-skewed">
      <div className="container px-4 mx-auto Konular">
        <div className="flex flex-wrap items-center mb-16">
          <div className="w-full lg:w-1/2">
            <span className="font-bold text-primary">3H Akademi</span>
            <h2 className="text-4xl font-bold lg:text-5xl font-heading">
              Kurslar
            </h2>
          </div>
          <div className="hidden w-1/2 text-right lg:block">
            <a
              className="inline-block px-6 py-2 font-bold leading-loose transition duration-200 bg-primary rounded-l-xl rounded-t-xl hover:bg-primaryShade text-gray-50"
              href="#"
              data-removed="true"
            >
              Bizimle İletişime Geçin
            </a>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3">
          <div className="w-full px-3 mb-8 lg:mb-0 lg:w-1/4">
            <div className="px-6 py-4 bg-white rounded shadow">
              <h4 className="mb-4 font-bold text-gray-500 uppercase">
                KONULAR
              </h4>
              <ul>
                <li>
                  <a
                    className="block px-3 py-2 mb-4 font-bold rounded text-primary bg-gray-50"
                    href="#"
                  >
                    Tümü
                  </a>
                </li>
                <li>
                  <a
                    className="block px-3 py-2 mb-4 rounded hover:text-primaryShade hover:bg-gray-50"
                    href="#"
                  >
                    Klasik Liberalizm
                  </a>
                </li>
                <li>
                  <a
                    className="block px-3 py-2 mb-4 rounded hover:text-primaryShade hover:bg-gray-50"
                    href="#"
                  >
                    Tarih
                  </a>
                </li>
                <li>
                  <a
                    className="block px-3 py-2 mb-4 rounded hover:text-primaryShade hover:bg-gray-50"
                    href="#"
                  >
                    Ekonomi
                  </a>
                </li>
                <li>
                  <a
                    className="block px-3 py-2 mb-4 rounded hover:text-primaryShade hover:bg-gray-50"
                    href="#"
                  >
                    Fizik
                  </a>
                </li>
                <li>
                  <a
                    className="block px-3 py-2 mb-4 rounded hover:text-primaryShade hover:bg-gray-50"
                    href="#"
                  >
                    Eğitim
                  </a>
                </li>
                <li>
                  <a
                    className="block px-3 py-2 mb-4 rounded hover:text-primaryShade hover:bg-gray-50"
                    href="#"
                  >
                    Sosyal Medya
                  </a>
                </li>
                <li>
                  <a
                    className="block px-3 py-2 mb-4 rounded hover:text-primaryShade hover:bg-gray-50"
                    href="#"
                  >
                    Sertifikasız
                  </a>
                </li>
                <li>
                  <a
                    className="block px-3 py-2 mb-4 rounded hover:text-primaryShade hover:bg-gray-50"
                    href="#"
                  >
                    Finans
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full px-3 lg:w-3/4">
            {curricula.map((curriculum) => (
              <CurriculumListItem curriculum={curriculum} key={curriculum.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export const getStaticProps: GetStaticProps = async () => {
  const sdk = getSdk(client);
  const { curricula } = await sdk.Curricula();

  return {
    props: { curricula },
  };
};

export default Curricula;
