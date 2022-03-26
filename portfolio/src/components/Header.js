import React from "react";
import { Link } from "react-router-dom";

const Header = ({ toggle }) => {
  return (
    <nav
      className="bg-gradient-to-r from-sky-500 to-indigo-500 flex justify-between items-center h-24 bg-black text-white relative shadow-sm"
      role="navigation"
    >
      <h1 className="pl-10 16px font-bold text-4xl">Mark Alfano</h1>

      <div className="px04 cursor-pointer md:hidden" onClick={toggle}>
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
        <Link
          className="bg-cyan-200 hover:bg-cyan-100 border-b-4 border-cyan-400 hover:border-cyan-200 text-black text-center py-2 px-4 rounded"
          to="/"
        >
          About Me
        </Link>
        <Link
          className="bg-cyan-200 hover:bg-cyan-100 border-b-4 border-cyan-400 hover:border-cyan-200 text-black text-center py-2 px-4 rounded"
          to="Portfolio"
        >
          Portfolio
        </Link>
        <Link
          className="bg-cyan-200 hover:bg-cyan-100 border-b-4 border-cyan-400 hover:border-cyan-200 text-black text-center py-2 px-4 rounded"
          to="Contact"
        >
          Contact
        </Link>
        <Link
          className="bg-cyan-200 hover:bg-cyan-100 border-b-4 border-cyan-400 hover:border-cyan-200 text-black text-center py-2 px-4 rounded"
          to="Resume"
        >
          Resume
        </Link>
      </div>
    </nav>
  );
};

export default Header;
