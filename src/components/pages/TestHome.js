import React from "react";
import profPicture from "../images/bio.jpg";

export default function TestHome() {
  return (
    <div
      className="h-screen bg-cover bg-[url('../src/components/images/nature2.jpg')]"
      id="home"
    >
      <div className="container mx-auto">
        <div className="md:flex">
          <div className="flex-1 text-center pt-24">
            <div className="lg:flex lg:items-center dividerHome">
              <div className="flex justify-center lg:flex-shrink-0">
                <img
                  className="w-72 lg:w-80 rounded-full p-2"
                  src={profPicture}
                  alt="GitFit"
                />
              </div>
              <div className="mt-12 px-16 text-state md:text-lg lg:text-lg font-semibold">
                <p className="mb-20 ml-4 bg-sky-200 rounded-lg opacity-80">
                  Hello my name is Mark, I'm an ambitious Full-Stack Developer
                  looking for new opportunities to grow and enjoy tackling new
                  challenges. Previously I owned and operated a landscaping
                  business before deciding I wanted to pursue coding. Recently
                  finished a full stack coding bootcamp and feel empowered by my
                  new knowledge. I am very goal orientated and enjoy the
                  planning process almost as much as working on or completing a
                  project. I have always been intrigued by programming. With
                  interests in how everything is bulit and what other new apps
                  could be made to improve our way of life. I enjoy creating
                  applications and coming up with new ways to complete tasks
                  more efficiently.
                </p>
              </div>
              <br></br>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
