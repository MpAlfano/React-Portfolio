import React from "react";
import profPicture from "../images/bio.jpg";

export default function TestHome() {
  return (
    <div
      className="h-screen flex bg-cover bg-[url('../src/components/images/nature2.jpg')]"
      id="home"
    >
      <div className="flex content-center justify-center align-middle mx-auto">
        <div className="flex">
          <div className="grid lg:flex items-center text-center justify-center pt-10 md:pt-0 md:pb-24">
            <div className="flex justify-center lg:flex-shrink-0 md:pl-16 lg:pl-32 -mb-20">
              <img
                className="w-60 md:w-72 lg:w-80 rounded-full p-1"
                src={profPicture}
                alt="Prof Pic"
              />
            </div>
            <div className="flex justify-center pl-12 md:pl-32 lg:pl-16 pr-12 md:text-xl lg:text-2xl font-semibold">
              <p className="bg-sky-200 rounded-lg opacity-90" id="bio">
                Hello my name is Mark, I'm an ambitious Full-Stack Developer.
                Passionate about learning new skills and developing new
                applications. I am always looking for new opportunities to grow
                and develop my skills.
              </p>
            </div>
            <br></br>
          </div>
        </div>
      </div>
    </div>
  );
}
