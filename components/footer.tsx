import Image from "next/image";

const Footer = () => {
  return (
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
        <div className="max-w-md mx-auto text-center">
          <a
            className="inline-block mx-auto mb-6 text-3xl font-bold leading-none"
            href="#"
          >
            <Image
              className="h-12"
              src="/atis-mono-black.svg"
              alt=""
              width="100"
              height="100"
            />
          </a>
          <p className="mb-6 text-sm font-semibold text-gray-400">
            © 2021. All rights reserved.
          </p>
          <div className="flex justify-center space-x-2 lg:space-x-4">
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
};

export default Footer;
