import React from "react";
import { NavLink } from "react-router-dom";

const MenuItem = ({ label, address, icon: Icon }) => {
  return (
    <NavLink
      to={address}
      end
      className={({ isActive }) =>
        `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  text-zinc-300 hover:bg-[#B9FF00]  hover:text-gray-700 ${
          isActive ? "bg-[#B9FF00]  text-zinc-700" : "text-zinc-300"
        }`
      }
    >
      <Icon className="w-5 h-5" />

      <span className="mx-4 font-medium">{label}</span>
    </NavLink>
  );
};

export default MenuItem;
