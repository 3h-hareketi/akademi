import { signIn, getSession, getCsrfToken } from "next-auth/react";
import { GetServerSideProps } from "next";
import { useState } from "react";

type Props = {
  csrfToken: string | undefined;
};

const Login = ({ csrfToken }: Props) => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  return (
    <section className="flex h-screen py-10 bg-primary-500 lg:py-20">
      <div className="container px-4 mx-auto my-auto">
        <div className="max-w-xl mx-auto">
          <div className="p-6 mb-6 bg-white rounded shadow-md lg:mb-10 lg:p-12">
            <div className="mb-6">
              <span className="text-gray-500">Tekrar hoşgeldiniz</span>
              <h3 className="text-2xl font-bold ">Giriş</h3>
            </div>
            <form
              method="POST"
              action="/api/auth/signin/email"
              data-bitwarden-watching="1"
            >
              <input type="hidden" name="_csrf" defaultValue={csrfToken} />
              <div className="flex p-4 mb-3 rounded bg-gray-50">
                <input
                  className="w-full text-xs outline-none bg-gray-50"
                  type="email"
                  name="email"
                  value={email}
                  placeholder="E-posta"
                  onChange={(e) => setEmail(e.target.value)}
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
                  />
                </svg>
              </div>
              <div className="text-center">
                <button
                  className="w-full py-4 mb-10 text-sm font-bold transition duration-200 rounded bg-primary-500 hover:bg-primary-700 text-gray-50"
                  disabled={isSubmitting}
                  onClick={(e) => {
                    e.preventDefault();
                    setIsSubmitting(true);
                    signIn("email", {
                      email,
                      callbackUrl: "/eposta-dogrulama",
                    });
                  }}
                >
                  E-posta ile giriş yap
                </button>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setIsSubmitting(true);
                    signIn("google", { callbackUrl: "/" });
                  }}
                  className="w-full py-4 mb-2 text-sm font-bold transition duration-200 bg-blue-500 rounded hover:bg-primary-700 text-gray-50"
                  disabled={isSubmitting}
                >
                  Google ile giriş yap
                </button>
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
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { req, res } = context;
  const session = await getSession({ req });

  if (session && res) {
    return {
      redirect: {
        permanent: false,
        destination: "/",
      },
    };
  }

  return {
    props: {
      csrfToken: await getCsrfToken(context),
    },
  };
};

export default Login;
