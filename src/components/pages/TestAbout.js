import React from "react";

export default function TestAbout() {
  return (
    <div className="w-100% h-screen divider2" id="about">
      <div className="h-full grid grid-cols-1">
        <p className="text-state md:text-lg lg:text-lg pt-24 pl-96 pr-24">
          Previously I owned and operated a landscaping business before deciding
          I wanted to pursue coding. Recently finished a full stack coding
          bootcamp and feel empowered by my newly acquired skills.
          <br></br>
          <br></br>
          <p className="pl-24">
            I am very goal orientated and enjoy the planning process almost as
            much as working on or completing a project. I have always been
            intrigued by programming, with interests in how everything is bulit
            and what other new apps could be made to improve our way of life. I
            enjoy coming up with new ways to complete tasks more efficiently.
          </p>
        </p>
        <div className="px-20 -mt-80">
          <h className="text-2xl">Skills</h>
          <div className="grid rounded-2xl text-xl mt-5">
            <ul className="grid grid-cols-7 text-center">
              <li>Critical Thinking</li>
              <li className="">Adaptability</li>
            </ul>
            <ul className="grid grid-cols-7 text-center">
              <li className="">Teamwork</li>
              <li className="">An Eye for Detail</li>
              <li className="">Problem Solving</li>
            </ul>
            <ul className="grid grid-cols-7 text-center">
              <li>Communication</li>
              <li>Listening</li>
              <li>Project Management</li>
              <li>Personal Development</li>
            </ul>
          </div>
          <ul className="grid grid-cols-2 bg-blue-100">
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
      </div>
    </div>
  );
}
