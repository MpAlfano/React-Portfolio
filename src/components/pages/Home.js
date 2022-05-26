import React from "react";
import profPicture from "..//images/bio.jpg";

export default function Home() {
  return (
    <div className="">
      <h1 className="text-center font-bold text-xl lg:text-4xl text-black">
        About Me
      </h1>
      <div className="container mt-2 mx-auto">
        <div className="md:flex">
          <div className="flex-1 text-black text-center">
            <div className="lg:flex lg:items-center">
              <div className="flex justify-center lg:flex-shrink-0">
                <img
                  className="w-72 lg:w-80 rounded-full p-2"
                  src={profPicture}
                  alt="Prof Pic"
                />
              </div>
              <div className="mt-4 px-2 text-state md:text-lg lg:text-lg">
                <p>
                  Hello my name is Mark, I'm an ambitious Full-Stack Developer
                  looking for new opportunities to grow and enjoy tackling new
                  challenges. Previously I owned and operated a landscaping
                  business before deciding I wanted to pursue coding. I am very
                  goal orientated and enjoy the planning process almost as much
                  as working on or completing a project. I have always been
                  intrigued by programming. With interests in how everything is
                  bulit and what other new apps could be made to improve our way
                  of life. I really enjoy creating applications and coming up
                  with new ways to complete tasks more efficiently. I look
                  forward to my future and maybe one day I will be working with
                  you.
                </p>
              </div>
              <br></br>
            </div>
            <div className="px-2">
              <h1 className="text-3xl">My Skills:</h1>
              <br></br>
              <div className="bg-teal-400 rounded-2xl">
                <ul className="text-lg grid sm:grid-cols-auto md:grid-cols-3 lg:-grid-cols-3">
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
              </div>
              <br></br>
              <div className="grid sm:grid-cols-auto md:grid-cols-2 lg:-grid-cols-2 gap-6">
                <div className="bg-teal-400 rounded-2xl">
                  <h1 className="text-lg font-bold">Languages & Tools:</h1>
                  <ul className="text-lg">
                    <li>JavaScript</li>
                    <li>MySQL & NoSQL</li>
                    <li>GraphQL & REST</li>
                    <li>Git & Github</li>
                    <li>TDD using Jest</li>
                    <li>OOP & ORM</li>
                  </ul>
                </div>

                <div className="bg-teal-400 rounded-2xl">
                  <h1 className="text-lg font-bold">Frameworks:</h1>
                  <ul className="text-lg">
                    <li>React</li>
                    <li>Node</li>
                    <li>Express</li>
                    <li>TaliwindCSS</li>
                    <li>BootStrap</li>
                    <li>Handlebars</li>
                  </ul>
                </div>
              </div>
              <br></br>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
