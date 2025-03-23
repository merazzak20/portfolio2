import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import MobileMenu from "../components/MobileMenu";
import Technologies from "../components/Technologies";
import Portfolio from "../components/Portfolio";
import Feedback from "../components/Feedback";
import Contact from "../components/Contact";
import { useNavigation } from "react-router-dom";
import Loader from "../components/Shared/Loader";

const Home = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  if (isLoading) {
    return <Loader></Loader>;
  }
  return (
    <div className="">
      <div className="">
        <Hero></Hero>
      </div>
      <About></About>
      <Technologies></Technologies>
      <Portfolio></Portfolio>
      <Feedback></Feedback>
      <Contact></Contact>
    </div>
  );
};

export default Home;
