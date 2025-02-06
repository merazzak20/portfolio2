import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Main = () => {
  return (
    <div className="interFont">
      <Header></Header>
      <div className="mx-auto min-h-[calc(100vh-288px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
