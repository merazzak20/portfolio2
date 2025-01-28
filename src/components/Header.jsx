import React from "react";
import logo from "../assets/my logo.png";
import { FaDownload } from "react-icons/fa6";
import Container from "./Shared/Container";

const Header = () => {
  const links = (
    <>
      <li>
        <a href="/">Item 1</a>
      </li>
      <li>
        <a href="/">Item 3</a>
      </li>
    </>
  );

  return (
    <header className="fixed top-0 left-0 w-full z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0">
      <Container>
        <div className="navbar flex items-center">
          {/* Mobile Menu and Logo */}
          <div className="navbar-start lg:hidden flex w-full justify-between">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-lg dropdown-content bg-zinc-900 rounded-box z-[1] mt-3 min-h-screen p-2 shadow w-60"
              >
                {links}
              </ul>
            </div>
            {/* Centered Logo */}
            <a
              href="/"
              className="absolute left-1/2 transform -translate-x-1/2"
            >
              <img className="w-28" src={logo} alt="Logo" />
            </a>
          </div>

          {/* Logo and Navigation for Larger Devices */}
          <div className="navbar-start hidden lg:flex">
            <a href="/" className="text-xl">
              <img className="w-28" src={logo} alt="Logo" />
            </a>
          </div>

          {/* Horizontal Links */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{links}</ul>
          </div>

          {/* Download Resume Button */}
          <div className="navbar-end">
            <a
              href="https://drive.google.com/file/d/17rehO2G9AXlp3cMFs1UCXEcq0Fvzv-Gn/view"
              target="_blank"
              className="btn btn-outline rounded-none text-[#afd138] hover:bg-[#afd138]"
            >
              Resume <FaDownload />
            </a>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
