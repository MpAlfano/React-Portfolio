import React from "react";
import { Link } from "react-router-dom";

const Dropdown = ({ isOpen, toggle }) => {
  return (
    <div
      className={
        isOpen
          ? "grid grid-rows-4 text-center items-center text-white bg-gradient-to-r from-sky-600 to-teal-700"
          : "hidden"
      }
      onClick={toggle}
    >
      <Link className="p-1 border-t-2 border-x-2" to="/React-Portfolio">
        About Me
      </Link>
      <Link className="p-1 border-2" to="Portfolio">
        Portfolio
      </Link>
      <Link className="p-1 border-x-2" to="Contact">
        Contact
      </Link>
      <Link className="p-1 border-2" to="Resume">
        Resume
      </Link>
    </div>
  );
};

export default Dropdown;
