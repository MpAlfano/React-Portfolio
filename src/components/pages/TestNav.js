import React, { useState, useEffect, useRef } from "react";
import { Link, animateScroll } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Bio from "../images/favicon.png";

export default function TestNav() {
  const prevScrollY = useRef(0);
  const { innerWidth: width, innerHeight: height } = window;

  const [goingUp, setGoingUp] = useState(false);
  const [background, setBackground] = useState(
    "w-20 h-screen fixed bg-gradient-to-b from-neutral-500 via-green-400 to-neutral-500 top-0 z-50"
  );

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (prevScrollY.current < currentScrollY && goingUp) {
        setGoingUp(false);
      }
      if (prevScrollY.current > currentScrollY && !goingUp) {
        setGoingUp(true);
      }

      if (currentScrollY < height) {
        setBackground(
          "w-20 h-screen fixed bg-gradient-to-b from-neutral-500 via-green-400 to-neutral-500 top-0 z-50"
        );
      }
      if (currentScrollY >= height && currentScrollY < height * 2) {
        console.log(true);
        setBackground(
          "w-20 h-screen fixed bg-gradient-to-b from-neutral-500 via-blue-400 to-neutral-500 top-0 z-50"
        );
      }
      if (currentScrollY >= height * 2 && currentScrollY < height * 3) {
        setBackground(
          "w-20 h-screen fixed bg-gradient-to-b from-neutral-500 via-purple-400 to-neutral-500 top-0 z-50"
        );
      }
      if (currentScrollY >= height * 3 && currentScrollY < height * 4) {
        setBackground(
          "w-20 h-screen fixed bg-gradient-to-b from-neutral-500 via-red-400 to-neutral-500 top-0 z-50"
        );
      }
      if (currentScrollY >= height * 4 && currentScrollY < height * 5) {
        setBackground(
          "w-20 h-screen fixed bg-gradient-to-b from-neutral-500 via-orange-400 to-neutral-500 top-0 z-50"
        );
      }
      if (currentScrollY >= height * 5 && currentScrollY < height * 6) {
        setBackground(
          "w-20 h-screen fixed bg-gradient-to-b from-neutral-500 via-yellow-400 to-neutral-500 top-0 z-50"
        );
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [goingUp]);

  return (
    <nav className={background} id="nav">
      <Link
        className="hover:cursor-pointer"
        id="bg-home"
        activeClass="active"
        to="home"
        spy={true}
        smooth={true}
        offset={0}
        duration={2000}
      >
        <img src={Bio} alt="name" />
      </Link>
      <div className="navItem">
        <Link
          className="hover:cursor-pointer"
          id="bg-about"
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={0}
          duration={2000}
        >
          <FontAwesomeIcon icon={faHome} color="#afc0c4" />
        </Link>
        <Link
          className="hover:cursor-pointer"
          id="bg-proj1"
          activeClass="active"
          to="portfolio"
          spy={true}
          smooth={true}
          offset={0}
          duration={2000}
        >
          <FontAwesomeIcon icon={faHome} color="#afc0c4" />
        </Link>
        <Link
          className="hover:cursor-pointer"
          id="bg-proj2"
          activeClass="active"
          to="portfolio2"
          spy={true}
          smooth={true}
          offset={0}
          duration={2000}
        >
          <FontAwesomeIcon icon={faHome} color="#afc0c4" />
        </Link>
        <Link
          className="hover:cursor-pointer"
          id="bg-resume"
          activeClass="active"
          to="resume"
          spy={true}
          smooth={true}
          offset={0}
          duration={2000}
        >
          <FontAwesomeIcon icon={faEnvelope} color="#afc0c4" />
        </Link>
        <Link
          className="hover:cursor-pointer"
          id="bg-contact"
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={0}
          duration={2000}
        >
          <FontAwesomeIcon icon={faEnvelope} color="#afc0c4" />
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
