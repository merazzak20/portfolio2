import React, { useState } from "react";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openNav = () => {
    setIsOpen(true);
  };

  const closeNav = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative z-50">
      <span
        id="open-menu"
        onClick={openNav}
        className="text-3xl cursor-pointer z-50"
      >
        &#9776;
      </span>

      <div
        id="myNav"
        className={`fixed top-0 left-0 w-0 h-full bg-zinc-800 bg-opacity-90 transition-all duration-500 ease-in-out ${
          isOpen ? "w-72" : ""
        }`}
      >
        <a
          className="absolute top-4 right-4 text-white text-3xl cursor-pointer z-50"
          onClick={closeNav}
          href="javascript:void(0)"
        >
          &times;
        </a>
        <div
          className={`flex flex-col items-center justify-center h-full space-y-6 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <a
            onClick={closeNav}
            className="text-white text-xl hover:text-gray-300 transition-colors"
            href="#header"
          >
            HOME
          </a>
          <a
            onClick={closeNav}
            className="text-white text-xl hover:text-gray-300 transition-colors"
            href="#services"
          >
            SERVICES
          </a>
          <a
            onClick={closeNav}
            className="text-white text-xl hover:text-gray-300 transition-colors"
            href="#team"
          >
            TEAM
          </a>
          <a
            onClick={closeNav}
            className="text-white text-xl hover:text-gray-300 transition-colors"
            href="#portfolio"
          >
            PORTFOLIO
          </a>
          <a
            onClick={closeNav}
            className="text-white text-xl hover:text-gray-300 transition-colors"
            href="#testimonial"
          >
            TESTIMONIAL
          </a>
          <a
            onClick={closeNav}
            className="text-white text-xl hover:text-gray-300 transition-colors"
            href="#contact"
          >
            CONTACT
          </a>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
