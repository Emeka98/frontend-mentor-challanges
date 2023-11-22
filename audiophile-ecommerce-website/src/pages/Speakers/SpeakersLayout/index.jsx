import React from "react";
import Navbar from "../../../components/layouts/Navbar";
import Products from "../../../components/Products";
import Info from "../../../components/Info";
import Footer from "../../../components/layouts/Footer";
import { Outlet } from "react-router-dom";

function SpeakersLayout() {
  return (
    <>
      <Navbar variant="dark" />
      <Outlet />
      <Products />
      <Info />
      <Footer />
    </>
  );
}

export default SpeakersLayout;
