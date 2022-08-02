import React from "react";
import resume from "../images/resume.png";
// import resumeContd from "../images/resumeContd.png"; - Left in for resume when it exceeds one page add new image
import resumeDL from "../documents/resume.pdf";

export default function TestResume() {
  return (
    <main
      className="grid content-center sm:h-fit sm:min-h-screen md:h-screen"
      id="resume"
    >
      <div className="md:flex justify-center">
        <div className="md:flex">
          <div className="flex-1 text-black text-center md:pl-20 pt-4">
            <div className="relative">
              <img
                className="object-scale-down w-full"
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
    </main>
  );
}
