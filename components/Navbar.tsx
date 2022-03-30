import { Transition } from "@headlessui/react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { Dispatch, Fragment, SetStateAction } from "react";
import BlurImage from "./BlurImage";
import UserDropdown from "./UserDropdown";
import HLogo from "/public/3h-logo.svg";

type Props = {
  navbarOpen: boolean;
  setNavbarOpen: Dispatch<SetStateAction<boolean>>;
};

const Navbar = (props: Props) => {
  const { data: session } = useSession();

  return (
    <section>
      <nav className="relative px-6 py-6 bg-white">
        <div className="flex items-center">
          <div className="mr-auto lg:hidden">
            <button
              className="flex items-center p-3 text-primary-500 navbar-burger"
              onClick={() => props.setNavbarOpen(true)}
            >
              <svg
                className="block w-4 h-4 fill-current"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Mobile menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
              </svg>
            </button>
          </div>
          <ul className="hidden lg:flex lg:items-center lg:w-auto lg:space-x-5">
            <li>
              <Link href="/">
                <a
                  className="text-sm text-gray-400 hover:text-gray-500"
                  href="#"
                >
                  Anasayfa
                </a>
              </Link>
            </li>
            <li className="text-gray-300">
              <svg
                className="w-4 h-4 current-fill"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                ></path>
              </svg>
            </li>
            <li>
              <a
                className="text-sm font-bold text-primary-500"
                href="https://3hhareketi.org"
                target="_blank"
                rel="noreferrer"
              >
                Kurumsal Site
              </a>
            </li>
            <li className="text-gray-300">
              <svg
                className="w-4 h-4 current-fill"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                ></path>
              </svg>
            </li>
            <li>
              <Link href="/curricula" passHref>
                <a className="text-sm text-gray-400 hover:text-gray-500">
                  Kurslar
                </a>
              </Link>
            </li>
          </ul>
          <div className="lg:absolute lg:top-1/2 lg:left-1/2 lg:transform lg:-translate-y-1/2 lg:-translate-x-1/2">
            <Link href="/" passHref>
              <a className="text-3xl font-bold leading-none">
                <BlurImage
                  className="h-12"
                  src={HLogo}
                  alt="3H Logo"
                  width="130"
                  height="140"
                />
              </a>
            </Link>
          </div>

          {session ? (
            <div className="ml-auto">
              <UserDropdown user={session.user} />
            </div>
          ) : (
            <Link href="/giris" passHref>
              <a className="hidden px-6 py-2 text-sm font-bold text-white transition duration-800 lg:inline-block lg:ml-auto lg:mr-3 bg-primary-500 hover:bg-primary-700 rounded-l-xl rounded-t-xl">
                Giriş &amp; Kayıt
              </a>
            </Link>
          )}
        </div>
      </nav>
      <Transition
        show={true}
        as={Fragment}
        enter="transition-all duration-500"
        enterFrom={props.navbarOpen ? "-left-80" : "left-0"}
        enterTo={"left-0"}
      >
        <div
          className={`fixed top-0 bottom-0 left-0 z-50 w-5/6 max-w-sm navbar-menu ${
            !props.navbarOpen && "hidden"
          }`}
        >
          <div
            className="fixed inset-0 bg-gray-800 opacity-25 navbar-backdrop"
            onClick={() => props.setNavbarOpen(false)}
          ></div>
          <nav className="relative flex flex-col w-full h-full px-6 py-6 overflow-y-auto bg-white border-r">
            <div className="flex items-center mb-8">
              <a
                className="mr-auto text-3xl font-bold leading-none"
                href="#"
                onClick={() => props.setNavbarOpen(false)}
              >
                <BlurImage
                  className="h-10"
                  src={HLogo}
                  alt=""
                  width="100"
                  height="100"
                />
              </a>
              <button
                className="navbar-close"
                onClick={() => props.setNavbarOpen(false)}
              >
                <svg
                  className="w-6 h-6 text-gray-400 cursor-pointer hover:text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
            <div>
              <ul>
                <li className="mb-1">
                  <Link href="/" passHref>
                    <a
                      className="block p-4 text-sm font-semibold text-gray-400 rounded hover:bg-gray-50 hover:text-primary-500"
                      onClick={() => props.setNavbarOpen(false)}
                    >
                      Anasayfa
                    </a>
                  </Link>
                </li>
                <li className="mb-1">
                  <a
                    className="block p-4 text-sm font-semibold text-gray-400 rounded hover:bg-gray-50 hover:text-primary-500"
                    onClick={() => props.setNavbarOpen(false)}
                    href="https://3hhareketi.org"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Kurumsal Site
                  </a>
                </li>
                <li className="mb-1">
                  <Link href="/curricula" passHref>
                    <a
                      className="block p-4 text-sm font-semibold text-gray-400 rounded hover:bg-gray-50 hover:text-primary-500"
                      onClick={() => props.setNavbarOpen(false)}
                    >
                      Kurslar
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mt-auto">
              <div className="pt-6">
                {session ? (
                  <>
                    <div className="text-center">{session.user?.email}</div>
                    <Link href="/api/auth/signout" passHref>
                      <a className="block px-4 py-3 mb-3 text-xs font-semibold leading-none text-center hover:leading-loose bg-gray-50 hover:bg-gray-100 rounded-l-xl rounded-t-xl">
                        Çıkış
                      </a>
                    </Link>
                  </>
                ) : (
                  <Link href="/giris" passHref>
                    <a className="block px-4 py-3 mb-3 text-xs font-semibold leading-none text-center text-white bg-primary-500 hover:bg-primary-700 rounded-l-xl rounded-t-xl">
                      Giriş &amp; Kayıt
                    </a>
                  </Link>
                )}
              </div>
              <p className="my-4 text-xs text-center text-gray-400">
                {/* <span>© 2022</span> */}
              </p>
              <div className="text-center">
                {/*/ Facebook */}
                <a
                  className="inline-block px-1"
                  href="https://www.facebook.com/3hhareketi/"
                >
                  <svg
                    className="fill-primary-500"
                    width="35"
                    height="35"
                    viewBox="0 0 25 25"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-3 7h-1.924c-.615 0-1.076.252-1.076.889v1.111h3l-.238 3h-2.762v8h-3v-8h-2v-3h2v-1.923c0-2.022 1.064-3.077 3.461-3.077h2.539v3z" />
                  </svg>
                </a>
                {/*/ Instagram */}
                <a
                  className="inline-block px-1"
                  href="https://www.instagram.com/3hhareketi/"
                >
                  <svg
                    className="fill-primary-500"
                    width="35"
                    height="35"
                    viewBox="0 0 25 25"
                  >
                    <path d="M15.233 5.488c-.843-.038-1.097-.046-3.233-.046s-2.389.008-3.232.046c-2.17.099-3.181 1.127-3.279 3.279-.039.844-.048 1.097-.048 3.233s.009 2.389.047 3.233c.099 2.148 1.106 3.18 3.279 3.279.843.038 1.097.047 3.233.047 2.137 0 2.39-.008 3.233-.046 2.17-.099 3.18-1.129 3.279-3.279.038-.844.046-1.097.046-3.233s-.008-2.389-.046-3.232c-.099-2.153-1.111-3.182-3.279-3.281zm-3.233 10.62c-2.269 0-4.108-1.839-4.108-4.108 0-2.269 1.84-4.108 4.108-4.108s4.108 1.839 4.108 4.108c0 2.269-1.839 4.108-4.108 4.108zm4.271-7.418c-.53 0-.96-.43-.96-.96s.43-.96.96-.96.96.43.96.96-.43.96-.96.96zm-1.604 3.31c0 1.473-1.194 2.667-2.667 2.667s-2.667-1.194-2.667-2.667c0-1.473 1.194-2.667 2.667-2.667s2.667 1.194 2.667 2.667zm4.333-12h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm.952 15.298c-.132 2.909-1.751 4.521-4.653 4.654-.854.039-1.126.048-3.299.048s-2.444-.009-3.298-.048c-2.908-.133-4.52-1.748-4.654-4.654-.039-.853-.048-1.125-.048-3.298 0-2.172.009-2.445.048-3.298.134-2.908 1.748-4.521 4.654-4.653.854-.04 1.125-.049 3.298-.049s2.445.009 3.299.048c2.908.133 4.523 1.751 4.653 4.653.039.854.048 1.127.048 3.299 0 2.173-.009 2.445-.048 3.298z" />
                  </svg>
                </a>
                {/*/ Twitter */}
                <a
                  className="inline-block px-1"
                  href="https://twitter.com/3hhareketi"
                >
                  <svg
                    className="fill-primary-500"
                    width="35"
                    height="35"
                    viewBox="0 0 25 25"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-.139 9.237c.209 4.617-3.234 9.765-9.33 9.765-1.854 0-3.579-.543-5.032-1.475 1.742.205 3.48-.278 4.86-1.359-1.437-.027-2.649-.976-3.066-2.28.515.098 1.021.069 1.482-.056-1.579-.317-2.668-1.739-2.633-3.26.442.246.949.394 1.486.411-1.461-.977-1.875-2.907-1.016-4.383 1.619 1.986 4.038 3.293 6.766 3.43-.479-2.053 1.08-4.03 3.199-4.03.943 0 1.797.398 2.395 1.037.748-.147 1.451-.42 2.086-.796-.246.767-.766 1.41-1.443 1.816.664-.08 1.297-.256 1.885-.517-.439.656-.996 1.234-1.639 1.697z" />
                  </svg>
                </a>
                {/*/ Youtube */}
                <a
                  className="inline-block px-1"
                  href="https://www.youtube.com/channel/UCpNJRC7fCGASPkltHxGJesQ"
                >
                  <svg
                    className="fill-primary-500"
                    width="35"
                    height="35"
                    viewBox="0 0 25 25"
                  >
                    <path d="M10 9.333l5.333 2.662-5.333 2.672v-5.334zm14-4.333v14c0 2.761-2.238 5-5 5h-14c-2.761 0-5-2.239-5-5v-14c0-2.761 2.239-5 5-5h14c2.762 0 5 2.239 5 5zm-4 7c-.02-4.123-.323-5.7-2.923-5.877-2.403-.164-7.754-.163-10.153 0-2.598.177-2.904 1.747-2.924 5.877.02 4.123.323 5.7 2.923 5.877 2.399.163 7.75.164 10.153 0 2.598-.177 2.904-1.747 2.924-5.877z" />
                  </svg>
                </a>
                {/*/ Linkedin */}
                <a
                  className="inline-block px-1"
                  href="https://www.linkedin.com/company/the-3h-movement/"
                >
                  <svg
                    className="fill-primary-500"
                    width="35"
                    height="35"
                    viewBox="0 0 25 25"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>
          </nav>
        </div>
      </Transition>
    </section>
  );
};

export default Navbar;
