import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { DefaultSeo } from "next-seo";
import { useRouter } from "next/router";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  const router = useRouter();

  return (
    <div className="flex flex-col justify-between h-screen subpixel-antialiased">
      <DefaultSeo
        openGraph={{
          type: "website",
          url: router.pathname,
          locale: "tr_TR",
          site_name: "3H Akademi",
        }}
        twitter={{
          handle: "@3hhareketi",
          site: "@3hhareketi",
          cardType: "summary_large_image",
        }}
      />
      <Navbar />
      <main className="mb-auto">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
