import React from "react";

const NavTabs = ({ currentPage, handlePageChange }) => {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#home"
          onClick={() => handlePageChange("Home")}
          className={currentPage === "Home" ? "nav-link active" : "nav-link"}
        >
          Home
        </a>
      </li>

      <li className="nav-item">
        <a
          href="#projects"
          onClick={() => handlePageChange("Project")}
          className={currentPage === "Project" ? "nav-link active" : "nav-link"}
        >
          Project
        </a>
      </li>

      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => handlePageChange("Contact")}
          className={currentPage === "Contact" ? "nav-link active" : "nav-link"}
        >
          Contact
        </a>
      </li>
    </ul>
  );
};

export default NavTabs;
