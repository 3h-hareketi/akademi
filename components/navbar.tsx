import Image from "next/image";

const Navbar = () => {
  return (
    <section>
      <nav className="relative px-6 py-6 bg-white">
        <div className="flex items-center">
          <ul className="hidden lg:flex lg:items-center lg:w-auto lg:space-x-5">
            <li>
              <a className="text-sm text-gray-400 hover:text-gray-500" href="#">
                Start
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
              <a className="text-sm font-bold text-green-600" href="#">
                About Us
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
              <a className="text-sm text-gray-400 hover:text-gray-500" href="#">
                Services
              </a>
            </li>
          </ul>
          <div className="lg:absolute lg:top-1/2 lg:left-1/2 lg:transform lg:-translate-y-1/2 lg:-translate-x-1/2">
            <a className="text-3xl font-bold leading-none" href="#">
              <Image
                className="h-12"
                src="/atis-mono-black.svg"
                alt=""
                width="110"
                height="80"
              />
            </a>
          </div>
          <a
            className="hidden px-6 py-2 text-sm font-bold text-gray-900 transition duration-200 lg:inline-block lg:ml-auto lg:mr-3 bg-gray-50 hover:bg-gray-100 rounded-l-xl rounded-t-xl"
            href="#"
          >
            Sign In
          </a>
          <a
            className="hidden px-6 py-2 text-sm font-bold text-white transition duration-200 bg-green-500 lg:inline-block hover:bg-green-600 rounded-l-xl rounded-t-xl"
            href="#"
          >
            Sign up
          </a>
          <div className="ml-auto lg:hidden">
            <button className="flex items-center p-3 text-green-600 navbar-burger">
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
        </div>
      </nav>
      <div className="fixed top-0 bottom-0 left-0 z-50 hidden w-5/6 max-w-sm navbar-menu">
        <div className="fixed inset-0 bg-gray-800 opacity-25 navbar-backdrop"></div>
        <nav className="relative flex flex-col w-full h-full px-6 py-6 overflow-y-auto bg-white border-r">
          <div className="flex items-center mb-8">
            <a className="mr-auto text-3xl font-bold leading-none" href="#">
              <Image
                className="h-10"
                src="/atis-assets/logo/atis/atis-mono-black.svg"
                alt=""
                width="90"
                height="60"
              />
            </a>
            <button className="navbar-close">
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
                <a
                  className="block p-4 text-sm font-semibold text-gray-400 rounded hover:bg-green-50 hover:text-green-600"
                  href="#"
                >
                  Start
                </a>
              </li>
              <li className="mb-1">
                <a
                  className="block p-4 text-sm font-semibold text-gray-400 rounded hover:bg-green-50 hover:text-green-600"
                  href="#"
                >
                  About Us
                </a>
              </li>
              <li className="mb-1">
                <a
                  className="block p-4 text-sm font-semibold text-gray-400 rounded hover:bg-green-50 hover:text-green-600"
                  href="#"
                >
                  Services
                </a>
              </li>
            </ul>
          </div>
          <div className="mt-auto">
            <div className="pt-6">
              <a
                className="block px-4 py-3 mb-3 text-xs font-semibold leading-loose text-center bg-gray-50 hover:bg-gray-100 rounded-l-xl rounded-t-xl"
                href="#"
              >
                Sign in
              </a>
              <a
                className="block px-4 py-3 mb-2 text-xs font-semibold leading-loose text-center text-white bg-green-600 hover:bg-green-700 rounded-l-xl rounded-t-xl"
                href="#"
              >
                Sign Up
              </a>
            </div>
            <p className="my-4 text-xs text-center text-gray-400">
              <span>© 2020 All rights reserved.</span>
            </p>
            <div className="text-center">
              <a className="inline-block px-1" href="#">
                <Image
                  src="/icon/social/facebook.svg"
                  alt=""
                  width="20"
                  height="20"
                />
              </a>
              <a className="inline-block px-1" href="#">
                <Image
                  src="/icon/social/twitter.svg"
                  alt=""
                  width="20"
                  height="20"
                />
              </a>
              <a className="inline-block px-1" href="#">
                <Image
                  src="/icon/social/instagram.svg"
                  alt=""
                  width="20"
                  height="20"
                />
              </a>
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
