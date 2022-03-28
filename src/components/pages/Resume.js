import React from "react";
import resume from "../images/resume.png";
import resumeDL from "../documents/resume.pdf";

export default function Resume() {
  return (
    <div className="container mt-5 mx-auto px-2">
      <div className="md:flex">
        <div className="flex-1 text-black text-center px-5 py-5">
          <img className="object-fit: fill" src={resume} alt="biography"></img>
          <a href={resumeDL} download>
            <img src="image in here" alt="resume download button" />
          </a>
        </div>
      </div>
    </div>
  );
}
