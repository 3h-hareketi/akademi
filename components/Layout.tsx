import React, { useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { DefaultSeo, LogoJsonLd, OrganizationJsonLd } from "next-seo";
import { useRouter } from "next/router";
import { useSwipeable } from "react-swipeable";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  const router = useRouter();
  const [navbarOpen, setNavbarOpen] = useState(false);
  const slideHandler = useSwipeable({
    onSwipedRight: () => setNavbarOpen(true),
    onSwipedLeft: () => setNavbarOpen(false),
  });

  return (
    <div
      className="flex flex-col justify-between h-screen subpixel-antialiased"
      {...slideHandler}
    >
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
        logo={`${process.env.NEXTAUTH_URL}/3h-logo.png`}
        url={process.env.NEXTAUTH_URL!}
      />
      <OrganizationJsonLd
        type="NGO"
        id="https://www.3hhareketi.org/"
        logo={`${process.env.NEXTAUTH_URL}/3h-logo.png`}
        legalName="Hürriyet Hukuk Hoşgörü Hareketi Derneği"
        name="3H Hareketi"
        address={{
          streetAddress: "Emirgan Sokak",
          addressLocality: "Sarıyer",
          addressRegion: "İstanbul",
          postalCode: "34467",
          addressCountry: "TR",
        }}
        sameAs={[
          "https://www.facebook.com/3hhareketi/",
          "https://www.instagram.com/3hhareketi/",
          "https://twitter.com/3hhareketi",
          "https://www.youtube.com/channel/UCpNJRC7fCGASPkltHxGJesQ",
          "https://www.linkedin.com/company/the-3h-movement/about/",
        ]}
        url="https://www.3hhareketi.org/"
        email="info@3hhareketi.org"
        memberOf={[{ "@type": "NGO", name: "IFLRY" }]}
        funder={[
          { "@type": "NGO", name: "Friedrich Naumann Foundation" },
          { "@type": "NGO", name: "Atlas Network" },
        ]}
      />
      <Navbar navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
      <main className="mb-auto">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
