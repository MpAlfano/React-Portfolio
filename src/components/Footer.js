import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-sky-600 to-teal-700 flex items-center h-36 md:h-24 lg:h-24 bg-black text-white justify-between">
      <div className="container mx-auto">
        <div className="md:flex">
          <div className="flex-1 text-black text-center items-center">
            <a
              className="px-5"
              href="https://www.linkedin.com/in/markalfano"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-linkedin text-3xl md:text-5xl lg:text-6xl"></i>
            </a>
            <a
              className="px-5"
              href="https://github.com/MpAlfano"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-github text-3xl md:text-5xl lg:text-6xl"></i>
            </a>
            <a
              className="px-5"
              href="mailto: mpalfano4@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-regular fa-envelope text-3xl md:text-5xl lg:text-6xl"></i>
            </a>
            <i className="fa fa-phone text-lg lg:text-3xl" aria-hidden="true">
              <p className="text-base md:text-lg lg:text-xl">905 407 7178</p>
            </i>

            <p className="text-xl">Copyright © Mark Alfano 2022</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
