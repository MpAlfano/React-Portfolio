import React from "react";
import profPicture from "../images/bio.jpg";

export default function TestAbout() {
  return (
    <div className="h-screen bg-cover bg-red-200" id="about">
      <h1 className="text-center font-bold text-xl lg:text-4xl text-black">
        About Me
      </h1>
      <div className="container mt-2 mx-auto">
        <div className="md:flex">
          <div className="flex-1 text-center">
            <div className="lg:flex lg:items-center">
              <div className="flex justify-center lg:flex-shrink-0">
                <img
                  className="w-72 lg:w-80 rounded-full p-2"
                  src={profPicture}
                  alt="GitFit"
                />
              </div>
              <div className="mt-4 px-2 text-state md:text-lg lg:text-lg font-semibold">
                <p>
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
            <div className="px-24">
              <h1 className="text-3xl">My Skills:</h1>
              <h1 className="text-lg font-bold">
                Languages, Frameworks & Tools:
              </h1>
              <br></br>
              <container className="grid-flow-row">
                <div className="flex flex-row bg-teal-400 rounded-2xl">
                  <ul className="bg-teal-200 testDiv">
                    <li>Critical Thinking</li>
                    <li>Adaptability</li>
                    <li>Teamwork</li>
                    <li>An Eye for Detail</li>
                    <li>Problem Solving</li>
                    <li>Communication</li>
                    <li>Listening</li>
                    <li>Project Management</li>
                    <li>Personal Development</li>
                  </ul>

                  <ul className="grid grid-cols-2">
                    <li>JavaScript</li>
                    <li>MySQL & NoSQL</li>
                    <li>GraphQL & REST</li>
                    <li>Git & Github</li>
                    <li>TDD using Jest</li>
                    <li>OOP & ORM</li>

                    <li>React</li>
                    <li>Node</li>
                    <li>Express</li>
                    <li>TaliwindCSS</li>
                    <li>BootStrap</li>
                    <li>Handlebars</li>
                  </ul>
                </div>
              </container>
              <br></br>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
