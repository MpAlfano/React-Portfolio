import React from "react";
import profPicture from "..//images/bio.jpg";

export default function Home() {
  return (
    <div>
      <h1 className="text-center font-bold text-xl lg:text-4xl text-black">
        About Me
      </h1>
      <div className="container mt-2 mx-auto">
        <div className="md:flex">
          <div className="flex-1 text-black text-center rounded">
            <div className="lg:flex lg:items-center">
              <div className="lg:flex-shrink-0">
                <img
                  className="rounded-lg lg:w-64"
                  src={profPicture}
                  alt="GitFit"
                />
              </div>
              <div className="mt-4 px-2">
                <p>
                  Hello my name is Mark, I'm an ambitious Full-Stack Developer
                  looking for new opportunities to grow and enjoy tackling new
                  challenges. Previously I operated my owned landscaping
                  business for over seven years before deciding I wanted to
                  pursue coding. I am very goal orientated and enjoy the
                  planning process almost as much as working on or completing a
                  project. I have always been intrigued by programming. With
                  interests in how everything is bulit and what other new apps
                  could be made to improve our way of life. I really enjoy
                  creating new things and thinking of new ways to complete tasks
                  more efficiently. I look forward to my future and maybe one
                  day I will be working with you.
                </p>
              </div>
            </div>
            <div className="">
              <h1 className="text-2xl">My Skills:</h1>
              <div className="grid sm:grid-cols-auto md:grid-cols-2 lg:-grid-cols-2">
                <div className="bg-green-300">
                  <h1 className="text-lg font-bold">Languages & Tools</h1>
                  <ul>
                    <li>JavaScript</li>
                    <li>MySQL & NoSQL</li>
                    <li>Git</li>
                    <li>Test Driven Development</li>
                  </ul>
                </div>

                <div className="bg-green-300">
                  <h1 className="text-lg font-bold">Frameworks</h1>
                  <ul>
                    <li>React</li>
                    <li>TaliwindCSS</li>
                    <li>BootStrap</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
