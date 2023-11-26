import React from "react";
import Navbar from "../../../components/layouts/Navbar";
import Products from "../../../components/Products";
import Footer from "../../../components/layouts/Footer";
import Info from "../../../components/Info";
import { Outlet } from "react-router-dom";
import Banner from "../../../components/Banner";

function HeadphonesLayout() {
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

export default HeadphonesLayout;
