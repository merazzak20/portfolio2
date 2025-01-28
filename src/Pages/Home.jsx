import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import MobileMenu from "../components/MobileMenu";
import Technologies from "../components/Technologies";
import Portfolio from "../components/Portfolio";

const Home = () => {
  return (
    <div className="">
      <div className="">
        <Hero></Hero>
      </div>
      <About></About>
      <Technologies></Technologies>
      <Portfolio></Portfolio>
    </div>
  );
};

export default Home;
