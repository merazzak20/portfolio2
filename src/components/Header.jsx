import React, { useState } from "react";
import logo from "../assets/logo2.png";
import MobileMenu from "./MobileMenu";

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
    <header className="fixed top-0 left-0 w-full flex items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0">
      {/* <div className="max-w-screen-2xl w-full mx-auto px-8">
        <a href="/" className="logo">
          <img width={120} src={logo} alt="Abdur Razzak" />
        </a>
      </div> */}
      <div className="navbar max-w-screen-2xl w-full mx-auto px-8">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
              className="menu menu-lg dropdown-content bg-zinc-900  rounded-box z-[1] mt-3 min-h-screen p-2 shadow w-60"
            >
              {links}
            </ul>
          </div>
          <a href="/" className=" text-xl">
            <img className="w-28" src={logo} alt="" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn btn-outline rounded-full text-[#afd138] hover:bg-[#afd138]">
            Download Resume
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
