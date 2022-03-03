import React from "react";

const Hero = () => (
  <section>
    <div className="py-20 md:px-20 bg-gray-50 radius-for-skewed">
      <div className="container px-4 mx-auto">
        <div className="max-w-md mx-auto mb-16 text-center">
          <span className="font-bold text-primary">
            Hürriyet, Hukuk, Hoşgörü
          </span>
          <h2 className="text-4xl font-bold lg:text-5xl font-heading">
            3H Akademi&apos;ye hoşgeldiniz!
          </h2>
        </div>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4 mb-8 lg:mb-0 lg:w-1/3">
            <div className="px-6 py-12 text-center bg-white rounded shadow">
              <span className="inline-block p-2 mb-6 bg-gray-100 rounded-lg">
                <svg
                  className="w-10 h-10 text-primary"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  ></path>
                </svg>
              </span>
              <h3 className="px-8 mb-4 text-2xl font-bold font-heading">
                Kurslara katılın
              </h3>
              <p className="text-gray-500">
                Fusce quam tellus, placerat eu metus ut, viverra aliquet purus.
              </p>
            </div>
          </div>
          <div className="w-full px-4 mb-8 lg:mb-0 lg:w-1/3">
            <div className="px-6 py-12 text-center bg-white rounded shadow">
              <span className="inline-block p-2 mb-6 bg-gray-100 rounded-lg">
                <svg
                  className="w-10 h-10 text-primary"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
                </svg>
              </span>
              <h3 className="px-8 mb-4 text-2xl font-bold font-heading">
                Sınavlara girin
              </h3>
              <p className="text-gray-500">
                Ut tempus tellus ac nisi vestibulum tempus. Nunc tincidunt
                lectus libero.
              </p>
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/3">
            <div className="px-6 py-12 text-center bg-white rounded shadow">
              <span className="inline-block p-2 mb-6 bg-gray-100 rounded">
                <svg
                  className="w-10 h-10 text-primary"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  ></path>
                </svg>
              </span>
              <h3 className="px-8 mb-4 text-2xl font-bold font-heading">
                Sertifikanızı alın
              </h3>
              <p className="text-gray-500">
                Donec ut ligula nunc. Mauris blandit vel est et facilisis.
                Integer sapien felis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
