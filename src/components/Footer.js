import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-sky-600 to-teal-700 flex items-center h-24 bg-black text-white relative">
      <div className="container mb-auto mx-auto">
        <div className="md:flex">
          <div className="flex-1 text-black text-center items-center">
            <a
              className="px-5"
              href="https://www.linkedin.com/in/markalfano"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-linkedin fa-4x"></i>
            </a>
            <a
              className="px-5"
              href="https://github.com/MpAlfano"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-github fa-4x"></i>
            </a>
            <a
              className="px-5"
              href="mailto: mpalfano4@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-regular fa-envelope fa-4x"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
