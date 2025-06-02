import React, { useContext, useState } from "react";
import logo from "../assets/my logo.png";
import { FaDownload } from "react-icons/fa6";
import Container from "./Shared/Container";
import { motion } from "framer-motion";
import { Sling as Hamburger } from "hamburger-react";
import { X } from "lucide-react";
import { AuthContext } from "../provider/AuthProvider";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const { user } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const links = (
    <>
      <li>
        <NavLink
          className="nav-link"
          style={({ isActive, isTransitioning }) => {
            return {
              background: isActive ? "transparent" : "",
              fontWeight: isActive ? "bold" : "",
              color: isActive ? "#afd138" : "white",
              viewTransitionName: isTransitioning ? "slide" : "",
            };
          }}
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className="nav-link"
          style={({ isActive, isTransitioning }) => {
            return {
              background: isActive ? "transparent" : "",
              fontWeight: isActive ? "bold" : "",
              color: isActive ? "#afd138" : "white",
              viewTransitionName: isTransitioning ? "slide" : "",
            };
          }}
          to="/about"
        >
          About
        </NavLink>
      </li>

      {user && (
        <li>
          <a className="nav-link" href="/dashboard">
            Dashboard
          </a>
        </li>
      )}
    </>
  );

  const mobileLinks = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            `hover:text-lime-400 ${isActive ? "text-lime-400" : "text-white"}`
          }
          onClick={() => setIsOpen(false)}
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            `hover:text-lime-400 ${isActive ? "text-lime-400" : "text-white"}`
          }
          onClick={() => setIsOpen(false)}
          to="/about"
        >
          About
        </NavLink>
      </li>

      {user && (
        <li>
          <a href="/dashboard">Dashboard</a>
        </li>
      )}
      <li>
        <a
          href="https://drive.google.com/file/d/1PFXraJNWyzpTFun3tzu1ZarCrqr9hY8j/view?usp=sharing"
          target="_blank"
          className="btn btn-outline rounded-none text-[#afd138] hover:bg-[#afd138]"
        >
          Download Resume <FaDownload />
        </a>
      </li>
    </>
  );

  return (
    <header className="fixed top-0 left-0 w-full z-40 bg-gradient-to-b from-zinc-950 to-zinc-900/0 ">
      <Container>
        <div className="navbar flex items-center">
          {/* Logo and Navigation for Larger Devices */}
          <div className="navbar-start lg:flex">
            <a href="/" className="text-xl">
              <img className="w-28" src={logo} alt="Logo" />
            </a>
          </div>

          {/* Horizontal Links */}
          <div className="navbar-center hidden md:flex">
            <ul className="menu menu-horizontal px-1">{links}</ul>
          </div>

          {/* Download Resume Button */}
          <div className="navbar-end flex flex-row">
            <div className="hidden md:inline-block">
              {/* <div className="">
                <ul className="menu menu-horizontal px-1">{links}</ul>
              </div> */}

              <a
                href="https://drive.google.com/file/d/1PFXraJNWyzpTFun3tzu1ZarCrqr9hY8j/view?usp=sharing"
                target="_blank"
                className="btn btn-outline rounded-none text-[#afd138] hover:bg-[#afd138]"
              >
                Download Resume <FaDownload />
              </a>
            </div>

            <div className="md:hidden">
              <Hamburger toggled={isOpen} toggle={setIsOpen} color="#B9FF00" />
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <motion.div
              initial={{ x: "100%" }} // Start off-screen (right side)
              animate={{ x: "40%" }} // Slide into view (left)
              exit={{ x: "100%" }} // Slide out to the right when closing
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed inset-0 bg-zinc-900 bg-opacity-50 backdrop-blur-lg flex flex-col items-center text-white text-xl z-50"
            >
              {/* Close Button */}
              <button className="absolute top-5 left-5 text-white hover:text-[#B9FF00]">
                <X
                  onClick={() => {
                    console.log("hit");
                    setIsOpen(false);
                  }}
                  size={40}
                />
              </button>

              <ul className=" absolute left-5 space-y-4 text-left pt-32">
                {mobileLinks}
              </ul>
            </motion.div>
          )}
        </div>
      </Container>
    </header>
  );
};

export default Header;
