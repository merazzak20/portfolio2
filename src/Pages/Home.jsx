import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import MobileMenu from "../components/MobileMenu";
import Technologies from "../components/Technologies";
import Portfolio from "../components/Portfolio";
import Feedback from "../components/Feedback";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <div className="">
      <div className="">
        <Hero></Hero>
      </div>
      <About></About>
      <Technologies></Technologies>
      <Portfolio></Portfolio>
      <Contact></Contact>
      <Feedback></Feedback>
    </div>
  );
};

export default Home;
