import Link from "next/link";
import BlurImage from "./BlurImage";
import VercelLogo from "/public/1618983297-powered-by-vercel.svg";
import HLogo from "/public/3h-logo.svg";

const Footer = () => (
  <section>
    <div className="py-10 bg-white">
      <div className="max-w-md mx-auto text-center">
        <a className="inline-block mx-auto leading-none" href="#">
          <BlurImage
            className="h-12"
            src={HLogo}
            alt="3H Logo"
            width="140"
            height="140"
          />
        </a>
        <p className="mb-6 text-sm font-semibold text-gray-400">
          © 2021. All rights reserved.
        </p>
        <div className="flex justify-center space-x-2 lg:space-x-4">
          <a
            className="inline-block px-1"
            href="https://www.facebook.com/3hhareketi/"
            rel="noreferrer"
            target="_blank"
          >
            <svg
              className="fill-primary-500"
              width="25"
              height="25"
              viewBox="0 0 25 25"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-3 7h-1.924c-.615 0-1.076.252-1.076.889v1.111h3l-.238 3h-2.762v8h-3v-8h-2v-3h2v-1.923c0-2.022 1.064-3.077 3.461-3.077h2.539v3z" />
            </svg>
          </a>
          <a
            className="inline-block px-1"
            href="https://www.instagram.com/3hhareketi/"
            rel="noreferrer"
            target="_blank"
          >
            <svg
              className="fill-primary-500"
              width="25"
              height="25"
              viewBox="0 0 25 25"
            >
              <path d="M15.233 5.488c-.843-.038-1.097-.046-3.233-.046s-2.389.008-3.232.046c-2.17.099-3.181 1.127-3.279 3.279-.039.844-.048 1.097-.048 3.233s.009 2.389.047 3.233c.099 2.148 1.106 3.18 3.279 3.279.843.038 1.097.047 3.233.047 2.137 0 2.39-.008 3.233-.046 2.17-.099 3.18-1.129 3.279-3.279.038-.844.046-1.097.046-3.233s-.008-2.389-.046-3.232c-.099-2.153-1.111-3.182-3.279-3.281zm-3.233 10.62c-2.269 0-4.108-1.839-4.108-4.108 0-2.269 1.84-4.108 4.108-4.108s4.108 1.839 4.108 4.108c0 2.269-1.839 4.108-4.108 4.108zm4.271-7.418c-.53 0-.96-.43-.96-.96s.43-.96.96-.96.96.43.96.96-.43.96-.96.96zm-1.604 3.31c0 1.473-1.194 2.667-2.667 2.667s-2.667-1.194-2.667-2.667c0-1.473 1.194-2.667 2.667-2.667s2.667 1.194 2.667 2.667zm4.333-12h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm.952 15.298c-.132 2.909-1.751 4.521-4.653 4.654-.854.039-1.126.048-3.299.048s-2.444-.009-3.298-.048c-2.908-.133-4.52-1.748-4.654-4.654-.039-.853-.048-1.125-.048-3.298 0-2.172.009-2.445.048-3.298.134-2.908 1.748-4.521 4.654-4.653.854-.04 1.125-.049 3.298-.049s2.445.009 3.299.048c2.908.133 4.523 1.751 4.653 4.653.039.854.048 1.127.048 3.299 0 2.173-.009 2.445-.048 3.298z" />
            </svg>
          </a>
          <a
            className="inline-block px-1"
            href="https://twitter.com/3hhareketi"
            rel="noreferrer"
            target="_blank"
          >
            <svg
              className="fill-primary-500"
              width="25"
              height="25"
              viewBox="0 0 25 25"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-.139 9.237c.209 4.617-3.234 9.765-9.33 9.765-1.854 0-3.579-.543-5.032-1.475 1.742.205 3.48-.278 4.86-1.359-1.437-.027-2.649-.976-3.066-2.28.515.098 1.021.069 1.482-.056-1.579-.317-2.668-1.739-2.633-3.26.442.246.949.394 1.486.411-1.461-.977-1.875-2.907-1.016-4.383 1.619 1.986 4.038 3.293 6.766 3.43-.479-2.053 1.08-4.03 3.199-4.03.943 0 1.797.398 2.395 1.037.748-.147 1.451-.42 2.086-.796-.246.767-.766 1.41-1.443 1.816.664-.08 1.297-.256 1.885-.517-.439.656-.996 1.234-1.639 1.697z" />
            </svg>
          </a>
          <a
            className="inline-block px-1"
            href="https://www.youtube.com/channel/UCpNJRC7fCGASPkltHxGJesQ"
            rel="noreferrer"
            target="_blank"
          >
            <svg
              className="fill-primary-500"
              width="25"
              height="25"
              viewBox="0 0 25 25"
            >
              <path d="M10 9.333l5.333 2.662-5.333 2.672v-5.334zm14-4.333v14c0 2.761-2.238 5-5 5h-14c-2.761 0-5-2.239-5-5v-14c0-2.761 2.239-5 5-5h14c2.762 0 5 2.239 5 5zm-4 7c-.02-4.123-.323-5.7-2.923-5.877-2.403-.164-7.754-.163-10.153 0-2.598.177-2.904 1.747-2.924 5.877.02 4.123.323 5.7 2.923 5.877 2.399.163 7.75.164 10.153 0 2.598-.177 2.904-1.747 2.924-5.877z" />
            </svg>
          </a>
          <a
            className="inline-block px-1 fill-primary-500"
            href="https://www.linkedin.com/company/the-3h-movement/"
            rel="noreferrer"
            target="_blank"
          >
            <svg width="25" height="25" viewBox="0 0 25 25">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
        </div>
        <div className="flex justify-center mt-8 space-x-2 lg:space-x-4">
          <Link
            href="https://vercel.com/?utm_source=[3h-hareketi]&utm_campaign=oss"
            passHref
          >
            <a>
              <BlurImage
                src={VercelLogo}
                alt="Powered by Vercel"
                width="212"
                height="44"
              />
            </a>
          </Link>
        </div>
      </div>
    </div>
  </section>
);
export default Footer;
