import React from "react";
import { Link, animateScroll } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faEnvelope } from "@fortawesome/free-solid-svg-icons";

import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Bio from "../images/favicon.png";

export default function TestNav() {
  return (
    <nav className="w-20 h-screen fixed top-0 bg-gray-300 z-50">
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
      <div className="navItem">
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
      <ul className="contacts">
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
        <li>
          <a
            href="mailto: mpalfano4@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faEnvelope} color="4d4d4e" />
          </a>
        </li>
      </ul>
    </nav>
  );
}
