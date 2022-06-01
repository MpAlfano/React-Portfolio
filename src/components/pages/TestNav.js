import React from "react";
import { Link, animateScroll } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Bio from "../images/favicon.png";

export default function TestNav() {
  return (
    <nav className="w-24 h-screen fixed top-0 text-blue-500 z-50">
      <div className="navItem">
        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          <img src={Bio} alt="name" />
          {/* About */}
        </Link>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
          {/* Portfolio */}
        </Link>
        <Link
          activeClass="active"
          to="portfolio"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
          {/* Portfolio */}
        </Link>
        <Link
          activeClass="active"
          to="portfolio2"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
          {/* Portfolio */}
        </Link>
        <Link
          activeClass="active"
          to="resume"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
          {/* Contact */}
        </Link>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
          {/* Contact */}
        </Link>
      </div>

      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/markalfano"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} color="4d4d4e" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/MpAlfano"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} color="4d4d4e" />
          </a>
        </li>
        <a href="mailto: mpalfano4@gmail.com" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faEnvelope} color="4d4d4e" />
        </a>

        <li>
          <FontAwesomeIcon icon={faPhone} color="4d4d4e" />
        </li>
      </ul>
    </nav>
  );
}
