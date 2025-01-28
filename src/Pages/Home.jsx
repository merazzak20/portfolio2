import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import MobileMenu from "../components/MobileMenu";
import Technologies from "../components/Technologies";

const Home = () => {
  return (
    <div className="pt-6">
      <div className="">
        <Hero></Hero>
      </div>
      <About></About>
      <Technologies></Technologies>
    </div>
  );
};

export default Home;
