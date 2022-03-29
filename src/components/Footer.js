import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-sky-600 to-teal-700 flex items-center py-5 h-24 bg-black text-white justify-between">
      <div className="container mx-auto">
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
            <p className="text-xl">Copyright © Mark Alfano 2022</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
