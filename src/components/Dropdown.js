import React from "react";
import { Link } from "react-router-dom";

const Dropdown = ({ isOpen, toggle }) => {
  return (
    <div
      className={
        isOpen
          ? "grid grid-rows-4 text-center items-center bg-blue-400"
          : "hidden"
      }
      onClick={toggle}
    >
      <Link className="p-1" to="/">
        About Me
      </Link>
      <Link className="p-1" to="Portfolio">
        Portfolio
      </Link>
      <Link className="p-1" to="Contact">
        Contact
      </Link>
      <Link className="p-1" to="Resume">
        Resume
      </Link>
    </div>
  );
};

export default Dropdown;
