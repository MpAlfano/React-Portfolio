import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav
      className="flex justify-between items-center h-24 bg-white text-black relative shadow-sm"
      role="navigation"
    >
      <h1 className="pl-10 16px font-bold text-6xl">Mark Alfano</h1>

      <div className="px04 cursor-pointer md:hidden">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
      <div className="pr-8 md:block hidden">
        <Link className="p-4" to="/">
          About Me
        </Link>
        <Link className="p-4" to="Portfolio">
          Portfolio
        </Link>
        <Link className="p-4" to="Contact">
          Contact
        </Link>
        <Link className="p-4" to="Resume">
          Resume
        </Link>
      </div>
    </nav>
  );
};

export default Header;