import React from "react";
import { Link, animateScroll } from "react-scroll";

export default function TestNav() {
  return (
    <div className="fixed top-0 w-full inline">
      <ul className="flex justify-end p-2 pr-10 ">
        <li className="px-2 navbar">
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            About
          </Link>
        </li>
        <li className="px-2 navbar">
          <Link
            activeClass="active"
            to="portfolio"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            Portfolio
          </Link>
        </li>
        <li className="px-2 navbar">
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}
