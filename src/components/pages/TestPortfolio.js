import React from "react";
import proj1 from "../images/proj1.png";
import proj2 from "../images/proj2.png";
import proj5 from "../images/proj5.png";
import gitfit from "../images/gitfit.png";

export default function TestPortfolio() {
  return (
    <div className="sm:h-fit md:h-screen bg-green-700" id="portfolio">
      <div className="container md:pl-20 mx-auto">
        <div className="grid pt-2 md:pt-10 m-auto">
          <div className="flex-1 text-black text-center bg-teal-400 hover:border-dashed border-2 border-indigo-600 px-2 lg:px-5 py-2 lg:py-5 m-2 rounded-lg">
            <div className="lg:flex lg:items-center">
              <div className="lg:flex-shrink-0">
                <img
                  className="rounded-lg w-32 lg:w-64"
                  src={gitfit}
                  alt="GitFit"
                />
                <h1 className="font-bold">Technologies Used:</h1>
                <ul className="grid grid-cols-3 md:grid-cols-2">
                  <li>MERN Stack</li>
                  <li>GraphQL</li>
                  <li>Apollo</li>
                  <li>React</li>
                  <li>JavaScript</li>
                  <li>TailwindCSS</li>
                </ul>
              </div>
              <div className="mt-4 lg:mt-0 lg:ml-6">
                <div className="uppercase tracking-wide text-md font-bold">
                  GitFit
                </div>
                <p>
                  MERN stack application utilizing GraphQL and apollo-client to
                  access a complex database. Database structure includes users,
                  exercises, workout plans with weekly and daily exercises.
                  Users can sign up and check out workout plans, add them to
                  their own profile. Users can also view exercises with
                  descriptions and an embedded how to video.
                </p>
                <div className="grid grid-cols-2">
                  <a
                    href="https://gitfit-2.herokuapp.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="block mt-1 text-lg leading-tight font-semibold hover:text-sky-500"
                  >
                    Project
                  </a>
                  <a
                    href="https://github.com/nkrilis/GitFit-2.0"
                    target="_blank"
                    rel="noreferrer"
                    className="block mt-1 text-lg leading-tight font-semibold hover:text-sky-500"
                  >
                    Github Repo
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 text-black text-center bg-teal-400 hover:border-dashed border-2 border-indigo-600 px-2 lg:px-5 py-2 lg:py-5 m-2 rounded-lg">
            <div className="lg:flex lg:items-center">
              <div className="lg:flex-shrink-0">
                <img
                  className="rounded-lg w-32 lg:w-64"
                  src={proj2}
                  alt="Off The Couch"
                />
                <h1 className="font-bold">Technologies Used:</h1>
                <ul className="grid grid-cols-3 md:grid-cols-2">
                  <li>MapQuest API</li>
                  <li>Bored API</li>
                  <li>SerpStack API</li>
                  <li>Bootstrap</li>
                  <li>JavaScript</li>
                  <li>JQuery</li>
                </ul>
              </div>
              <div className="mt-4 lg:mt-0 lg:ml-6">
                <div className="uppercase tracking-wide text-md font-bold">
                  Off The Couch
                </div>
                <p>
                  Project that helps a user with limited free time find
                  something to do nearby. They can choose an activity from a
                  list or have one randomly generated. A hungry user can choose
                  to have a random restaurant generated, an option for those who
                  can't decide what to eat. Application uses API's to get
                  location, search google and generate a random actvity.
                </p>
                <div className="grid grid-cols-2">
                  <a
                    href="https://mpalfano.github.io/Off-the-couch-personal/"
                    target="_blank"
                    rel="noreferrer"
                    className="block mt-1 text-lg leading-tight font-semibold hover:text-sky-500"
                  >
                    Project
                  </a>
                  <a
                    href="https://github.com/MpAlfano/Off-the-couch-personal"
                    target="_blank"
                    rel="noreferrer"
                    className="block mt-1 text-lg leading-tight font-semibold hover:text-sky-500"
                  >
                    Github Repo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
