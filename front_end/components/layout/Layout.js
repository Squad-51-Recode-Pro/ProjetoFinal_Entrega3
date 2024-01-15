import React from "react";
import Navbar from "./NavBar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="main_container">{children}</main>
      <Footer />
    </>
  );
}
