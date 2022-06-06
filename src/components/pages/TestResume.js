import React from "react";
import resume from "../images/resume.png";
// import resumeContd from "../images/resumeContd.png"; - Left in for resume when it exceeds one page add new image
import resumeDL from "../documents/resume.pdf";

export default function TestResume() {
  return (
    <main className="h-fit sm:min-h-screen md:h-screen" id="resume">
      <div className="mt-1 md:flex justify-center mx-auto px-2">
        <div className="md:flex">
          <div className="flex-1 text-black text-center md:pl-20 py-5">
            <div className="relative">
              <img
                className="object-fill w-full"
                src={resume}
                alt="biography"
              ></img>
              <a href={resumeDL} download>
                <i className="absolute top-0 left-0 fa-solid fa-file-arrow-down fa-2x"></i>
              </a>
              <a
                href="https://docs.google.com/document/d/1OBvrRbjsU4XBIBU20Y7tHCKF7pcfPNET1sDf4flLhfE/edit?usp=sharing"
                target="blank_"
              >
                <i
                  className="absolute top-0 right-0 fa fa-external-link fa-2x"
                  aria-hidden="true"
                ></i>
              </a>
              <br></br>
            </div>
          </div>
        </div>
      </div>
      <footer className="flex justify-center px-2 md:px-40 md:pr-24 pb-6 font-semibold w-full text-center z-5">
        <p className="px-6 bg-gradient-to-r from-neutral-500 via-orange-400 to-neutral-500 md:text-xl lg:text-3xl rounded-full">
          Pain unlocks a secret doorway in the mind, one that leads to both peak
          performance, and beautiful silence. - David Goggins
        </p>
      </footer>
    </main>
  );
}
