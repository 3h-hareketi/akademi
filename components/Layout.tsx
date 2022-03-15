import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => (
  <div className="flex flex-col justify-between h-screen subpixel-antialiased">
    <Navbar />
    <main className="mb-auto">{children}</main>
    <Footer />
  </div>
);
export default Layout;
