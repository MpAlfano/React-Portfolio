import React from "react";
import { Link, animateScroll } from "react-scroll";
import Bio from "../images/favicon.png";

export default function TestNav() {
  return (
    <div className="text-blue-500 z-50 navbar">
      <div className="navItem">
        <Link
          classname=""
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          <img src={Bio} alt="name" />
          About
        </Link>
        <Link
          classname=""
          activeClass="active"
          to="portfolio"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          <img src={Bio} alt="name" />
          Portfolio
        </Link>
        <Link
          classname=""
          activeClass="active"
          to="portfolio2"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          <img src={Bio} alt="name" />
          Portfolio
        </Link>
        <Link
          classname=""
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          <img src={Bio} alt="name" />
          Contact
        </Link>
      </div>
    </div>
  );
}
