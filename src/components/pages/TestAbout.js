import React from "react";

export default function TestAbout() {
  return (
    <div className="h-screen bg-green-700" id="about">
      <main class="wrapper">
        <section className="h-1/2 text-gray-200">
          <p className="text-state md:text-lg lg:text-xl pt-24 pl-96 pr-24 bg-black">
            Previously I owned and operated a landscaping business before
            deciding I wanted to pursue coding. Recently finished a full stack
            coding bootcamp and feel empowered by my newly acquired skills.
            <br></br>
            <br></br>
            <p className="pl-24">
              I am very goal orientated and enjoy the planning process almost as
              much as working on or completing a project. I have always been
              intrigued by programming, with interests in how everything is
              bulit and what other new apps could be made to improve our way of
              life. I enjoy coming up with new ways to complete tasks more
              efficiently.
            </p>
          </p>
        </section>
        <section className="h-3/4">
          <div className="pl-40 mt-32 ">
            <h1 className="text-3xl font-bold">Skills</h1>
            <br></br>
            <div className="grid rounded-2xl text-2xl font-semibold mt-5">
              <ul className="grid grid-cols-7 text-center pb-2">
                <li>Project Management </li>
                <li className="">Adaptability</li>
              </ul>
              <ul className="grid grid-cols-7 text-center pb-2">
                <li className="">Critical Thinking</li>
                <li className="">An Eye for Detail</li>
                <li className="">Problem Solving</li>
              </ul>
              <ul className="grid grid-cols-7 text-center pb-4">
                <li>Communication</li>
                <li>Listening</li>
                <li>Teamwork</li>
                <li>Personal Development</li>
              </ul>
            </div>
            <div className="grid text-xl pt-10">
              <h1 className="text-3xl font-bold">
                Languages, Tools & Frameworks
              </h1>
              <br></br>
              <div className="grid rounded-2xl text-2xl font-semibold mt-5">
                <ul className="grid grid-cols-7 text-center pb-2">
                  <li>
                    <span className="px-0.5 bg-black text-white">
                      JavaScript
                    </span>
                  </li>
                  <li>
                    <span className="px-0.5 bg-black text-white">React</span>
                  </li>
                  <li>
                    <span className="px-0.5 bg-black text-white">HTML</span>
                  </li>
                  <li>
                    <span className="px-0.5 bg-black text-white">CSS</span>
                  </li>
                  <li>
                    <span className="px-0.5 bg-black text-white">Node</span>
                  </li>
                </ul>
                <ul className="grid grid-cols-7 text-center pb-2">
                  <li>
                    <span className="px-0.5 bg-black text-white">Express</span>
                  </li>
                  <li>
                    <span className="px-0.5 bg-black text-white">MySql</span>
                  </li>
                  <li>
                    <span className="px-0.5 bg-black text-white">MongoDB</span>
                  </li>
                  <li>
                    <span className="px-0.5 bg-black text-white">GraphQL</span>
                  </li>
                  <li>
                    <span className="px-0.5 bg-black text-white">
                      MVC & OOP
                    </span>
                  </li>
                </ul>
                <ul className="grid grid-cols-7 text-center">
                  <li>
                    <span className="px-0.5 bg-black text-white">
                      TDD using Jest
                    </span>
                  </li>
                  <li>
                    <span className="px-0.5 bg-black text-white">Git</span>
                  </li>
                  <li>
                    <span className="px-0.5 bg-black text-white">Github</span>
                  </li>
                  <li>
                    <span className="px-0.5 bg-black text-white">
                      TaliwindCSS
                    </span>
                  </li>
                  <li>
                    <span className="px-0.5 bg-black text-white">
                      BootStrap
                    </span>
                  </li>
                  <li>
                    <span className="px-0.5 bg-black text-white">
                      Handlebars
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
