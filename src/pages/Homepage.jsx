import React from "react";
import Showcase from "../components/Showcase";
import Products from "../components/Products";
import Ourblog from "../components/Ourblog";
import Services from "../components/Services";
import Brands from "../components/Brands";
import Banner from "../components/Banner";

const Homepage = () => {
  return (
    <div>
      <main>
        <Showcase />
        <Products />
        <Ourblog/>
        <Services/>
        <Banner/>
        <Brands/>
      </main>
    </div>
  );
};

export default Homepage;
