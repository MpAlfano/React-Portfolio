import React from "react";
import resume from "../images/resume.png";
// import resumeContd from "../images/resumeContd.png"; - Left in for resume when it exceeds one page add new image
import resumeDL from "../documents/resume.pdf";

export default function Resume() {
  return (
    <div className="mt-5 md:flex justify-center mx-auto px-2">
      <div className="md:flex">
        <div className="flex-1 text-black text-center px-5 py-5">
          <div className="relative">
            <img
              className="object-fit: fill"
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
            {/* <img
              className="object-fit: fill"
              src={resumeContd}
              alt="biography"
            ></img> */}
          </div>
        </div>
      </div>
    </div>
  );
}
