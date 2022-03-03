import { GetStaticPaths, GetStaticProps } from "next";
import { Curriculum, getSdk } from "../../interfaces";
import { client } from "../../utils";

const Curricula = ({ title, slug }: Curriculum) => (
  <section>
    <div className="skew skew-top mr-for-radius">
      <svg
        className="w-full h-8 md:h-12 lg:h-20 text-gray-50"
        viewBox="0 0 10 10"
        preserveAspectRatio="none"
      >
        <polygon fill="currentColor" points="0 0 10 10 0 10"></polygon>
      </svg>
    </div>
    <div className="skew skew-top ml-for-radius">
      <svg
        className="w-full h-8 md:h-12 lg:h-20 text-gray-50"
        viewBox="0 0 10 10"
        preserveAspectRatio="none"
      >
        <polygon fill="currentColor" points="0 10 10 0 10 10"></polygon>
      </svg>
    </div>
    <div className="py-20 bg-gray-50 radius-for-skewed">
      <div className="container px-4 mx-auto Konular">
        <div className="flex flex-wrap items-center mb-16">
          <div className="w-full lg:w-1/2">
            <span className="font-bold text-green-600">3H Akademi</span>
            <h2 className="text-4xl font-bold lg:text-5xl font-heading">
              Kurslar
            </h2>
          </div>
          <div className="hidden w-1/2 text-right lg:block">
            <a
              className="inline-block px-6 py-2 font-bold leading-loose transition duration-200 bg-green-600 rounded-l-xl rounded-t-xl hover:bg-green-700 text-gray-50"
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
                    className="block px-3 py-2 mb-4 font-bold text-green-600 rounded bg-gray-50"
                    href="#"
                  >
                    Tümü
                  </a>
                </li>
                <li>
                  <a
                    className="block px-3 py-2 mb-4 rounded hover:text-green-600 hover:bg-gray-50"
                    href="#"
                  >
                    Klasik Liberalizm
                  </a>
                </li>
                <li>
                  <a
                    className="block px-3 py-2 mb-4 rounded hover:text-green-600 hover:bg-gray-50"
                    href="#"
                  >
                    Tarih
                  </a>
                </li>
                <li>
                  <a
                    className="block px-3 py-2 mb-4 rounded hover:text-green-600 hover:bg-gray-50"
                    href="#"
                  >
                    Ekonomi
                  </a>
                </li>
                <li>
                  <a
                    className="block px-3 py-2 mb-4 rounded hover:text-green-600 hover:bg-gray-50"
                    href="#"
                  >
                    Fizik
                  </a>
                </li>
                <li>
                  <a
                    className="block px-3 py-2 mb-4 rounded hover:text-green-600 hover:bg-gray-50"
                    href="#"
                  >
                    Eğitim
                  </a>
                </li>
                <li>
                  <a
                    className="block px-3 py-2 mb-4 rounded hover:text-green-600 hover:bg-gray-50"
                    href="#"
                  >
                    Sosyal Medya
                  </a>
                </li>
                <li>
                  <a
                    className="block px-3 py-2 mb-4 rounded hover:text-green-600 hover:bg-gray-50"
                    href="#"
                  >
                    Sertifikasız
                  </a>
                </li>
                <li>
                  <a
                    className="block px-3 py-2 mb-4 rounded hover:text-green-600 hover:bg-gray-50"
                    href="#"
                  >
                    Finans
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full px-3 lg:w-3/4">
            <div className="flex flex-wrap mb-8 -mx-3 lg:mb-6">
              <div className="w-full px-3 mb-4 lg:mb-0 lg:w-1/4">
                {/* <img
                  className="object-cover w-full h-full rounded"
                  src="https://images.unsplash.com/photo-1552338804-c42590cb7b88?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=1189&amp;q=80"
                  alt=""
                /> */}
              </div>
              <div className="w-full px-3 lg:w-3/4">
                <a className="hover:underline" href="#">
                  <h3 className="mb-1 text-2xl font-bold font-heading">
                    Morbi scelerisque nulla et lectus dignissim eleifend nulla
                    eu nulla a metus
                  </h3>
                </a>
                <div className="flex items-center mb-2 text-sm">
                  <a
                    className="text-green-600 hover:underline hover:text-green-700"
                    href="#"
                  >
                    Finans
                  </a>
                  <span className="mx-2 text-gray-400">•</span>
                  <span className="text-gray-400">8 konu</span>
                </div>
                <p className="text-gray-500">
                  Quisque id sagittis turpis. Nulla sollicitudin rutrum eros eu
                  dictum...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="skew skew-bottom mr-for-radius">
      <svg
        className="w-full h-8 md:h-12 lg:h-20 text-gray-50"
        viewBox="0 0 10 10"
        preserveAspectRatio="none"
      >
        <polygon fill="currentColor" points="0 0 10 0 0 10"></polygon>
      </svg>
    </div>
    <div className="skew skew-bottom ml-for-radius">
      <svg
        className="w-full h-8 md:h-12 lg:h-20 text-gray-50"
        viewBox="0 0 10 10"
        preserveAspectRatio="none"
      >
        <polygon fill="currentColor" points="0 0 10 0 10 10"></polygon>
      </svg>
    </div>
  </section>
);

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const sdk = getSdk(client);
  const { curriculum } = await sdk.CurriculumBySlug({
    slug: params!.slug as string,
  });

  return {
    props: { ...curriculum },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const sdk = getSdk(client);
  const { curricula } = await sdk.Curricula();

  return {
    paths: curricula.map((curriculum) => {
      return {
        params: {
          slug: curriculum.slug,
        },
      };
    }),
    fallback: false,
  };
};

export default Curricula;
