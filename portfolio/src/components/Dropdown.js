import React from "react";
import { Link } from "react-router-dom";

const Dropdown = () => {
  return (
    <div className="grid grid-rows-4 text-center items-center bg-blue-400">
      <Link className="p-4" to="/">
        About Me
      </Link>
      <Link className="p-4" to="/Portfolio">
        About Me
      </Link>
      <Link className="p-4" to="/Contact">
        Contact
      </Link>
      <Link className="p-4" to="/Resume">
        Resume
      </Link>
    </div>
  );
};

export default Dropdown;
