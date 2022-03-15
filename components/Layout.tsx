import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { DefaultSeo, LogoJsonLd, OrganizationJsonLd } from "next-seo";
import { useRouter } from "next/router";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  const router = useRouter();

  return (
    <div className="flex flex-col justify-between h-screen subpixel-antialiased">
      <DefaultSeo
        titleTemplate="%s | 3H Akademi"
        defaultTitle="3H Akademi"
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
      <LogoJsonLd
        logo={`${process.env.NEXTAUTH_URL}/3h-logo.pngg`}
        url={process.env.NEXTAUTH_URL!}
      />
      <OrganizationJsonLd
        type="NGO"
        id="https://www.purpule-fox.io/#corporation"
        logo={`${process.env.NEXTAUTH_URL}/3h-logo.pngg`}
        legalName="Hürriyet Hukuk Hoşgörü Hareketi Derneği"
        name="3H Hareketi"
        address={{
          streetAddress: "Emirgan Sokak",
          addressLocality: "Sarıyer",
          addressRegion: "İstanbul",
          postalCode: "34467",
          addressCountry: "TR",
        }}
        sameAs={["https://www.orange-fox.com"]}
        url="https://www.purpule-fox.io/"
      />
      <Navbar />
      <main className="mb-auto">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
