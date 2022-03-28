import React from "react";
import resume from "../images/resume.png";

export default function Resume() {
  return (
    <div className="container mt-5 mx-auto px-2">
      <div className="md:flex">
        <div className="flex-1 text-black text-center px-5 py-5">
          <img className="object-fit: fill" src={resume} alt="biography"></img>
          <a href="../documents/resume.pdf" download>
            <img src="download_icon.jpg" alt="resume download button" />
          </a>
        </div>
      </div>
    </div>
  );
}
