import React from "react";
import Container from "./Shared/Container";
import logo from "../assets/my logo.png";

const Footer = () => {
  return (
    <div className="bg-zinc-900 mt-10">
      <Container>
        <footer className="footer footer-center bg-zinc-900 text-zinc-50 p-10">
          <aside>
            <img className="w-52" src={logo} alt="" />
            <p className="font-bold -mt-4">
              <span className="text-base">Full stack developer</span>
              <br />
            </p>
            <p>
              Copyright © {new Date().getFullYear()} - All right reserved{" "}
              <span className="text-[#afd138] font-semibold">Abdur Razzak</span>
            </p>
          </aside>
        </footer>
      </Container>
    </div>
  );
};

export default Footer;
