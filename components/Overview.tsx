import Image from "next/image";
import { Key, ReactChild, ReactFragment, ReactPortal } from "react";
import { CurriculaQuery } from "../interfaces";
type Props = {
  curricula: CurriculaQuery["curricula"];
};
const Overview = (props: Props) => {
  return (
    <section>
      <div className="py-20 bg-gray-50 radius-for-skewed">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap items-center justify-center mb-16 md:justify-between">
            <div className="text-center lg:text-left">
              <span className="font-bold text-primary">Buradan başlayın!</span>
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
            {props.curricula.map(
              (curriculum: {
                id: Key | null | undefined;
                title:
                  | boolean
                  | ReactChild
                  | ReactFragment
                  | ReactPortal
                  | null
                  | undefined;
              }) => (
                <div
                  key={curriculum.id}
                  className="w-full px-4 mb-8 md:w-1/2 lg:w-1/3"
                >
                  <div className="bg-white rounded">
                    <div className="relative h-64">
                      {" "}
                      <Image
                        className="rounded-t"
                        src="/homepage.jpeg"
                        alt=""
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>

                    <div className="p-6">
                      <span className="text-gray-400">2021</span>
                      <h3 className="mb-4 text-2xl font-bold font-heading">
                        {curriculum.title}
                      </h3>
                      <a
                        className="flex font-bold text-primary hover:text-primaryShade"
                        href="#"
                      >
                        <svg
                          className="w-6 h-6 mr-3"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <span>Kurs detayları</span>
                      </a>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>

          <div className="text-center">
            <a
              className="inline-block px-6 py-2 font-bold leading-loose transition duration-200 bg-green-600 md:hidden rounded-l-xl rounded-t-xl hover:bg-green-700 text-gray-50"
              href="#"
            >
              Daha Fazla Kurs Gör
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Overview;
