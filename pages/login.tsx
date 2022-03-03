import Image from "next/image";

const Login = () => (
  <section className="flex h-screen py-10 bg-primary lg:py-20">
    <div className="container px-4 mx-auto my-auto">
      <div className="max-w-xl mx-auto">
        <div className="flex mb-10">
          <a
            className="mx-auto text-3xl font-bold leading-none text-white bg-white rounded-full"
            href="#"
          >
            <Image src="/3h-logo.png" alt="" width={180} height={170} />
          </a>
        </div>
        <div className="p-6 mb-6 bg-white rounded shadow-md lg:mb-10 lg:p-12">
          <div className="mb-6">
            <span className="text-gray-500">Tekrar hoşgeldiniz</span>
            <h3 className="text-2xl font-bold">Giriş</h3>
          </div>
          <form action="" data-bitwarden-watching="1">
            <div className="flex p-4 mb-3 rounded bg-gray-50">
              <input
                className="w-full text-xs outline-none bg-gray-50"
                type="email"
                placeholder="E-posta"
              ></input>
              <svg
                className="w-6 h-6 my-auto ml-4 text-gray-300"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                ></path>
              </svg>
            </div>
            <div className="flex p-4 mb-6 rounded bg-gray-50">
              <input
                className="w-full text-xs outline-none bg-gray-50"
                type="password"
                placeholder="Şifre"
              ></input>
              <button>
                <svg
                  className="w-6 h-6 my-auto ml-4 text-gray-300"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="text-center">
              <button className="w-full py-4 mb-2 text-sm font-bold transition duration-200 rounded bg-primary hover:bg-primaryShade text-gray-50">
                Giriş yap
              </button>
              <span className="text-xs text-gray-400">
                <span>Hesabınız yok mu?</span>
                <a className="text-primary hover:underline" href="#">
                  Üye olun
                </a>
              </span>
            </div>
          </form>
        </div>
        <p className="text-xs text-center text-gray-50">
          <a className="underline hover:text-gray-300" href="#">
            Gizlilik Politikası
          </a>{" "}
          ve{" "}
          <a className="underline hover:text-gray-300" href="#">
            Kullanım Şartları
          </a>
        </p>
      </div>
    </div>
  </section>
);

export default Login;
