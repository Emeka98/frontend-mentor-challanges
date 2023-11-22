import React from "react";
import Navbar from "../../components/layouts/Navbar";
import Hero from "../../components/Hero";
import Products from "../../components/Products";
import ProductsCard from "../../components/ProductsCard";
import Info from "../../components/Info";
import Footer from "../../components/layouts/Footer";

function Home() {
  return (
    <>
      <Navbar variant="gray" />
      <Hero />
      <Products />
      <ProductsCard />
      <Info />
      <Footer />
    </>
  );
}

export default Home;
