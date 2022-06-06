import React from "react";

export default function TestPortfolio() {
  return (
    <div
      className="grid content-center sm:h-fit sm:min-h-screen md:h-screen bg-gradient-to-b from-green-200 to-purple-100"
      id="portfolio"
    >
      <div className="container md:pl-20 mx-auto">
        <div className="grid md:gap-y-4 lg:gap-y-10 m-auto">
          <div className="flex-1 text-black text-center border border-indigo-600 px-2 lg:px-5 py-2 lg:py-5 m-2 rounded-lg">
            <div className="uppercase tracking-wide text-md text-2xl font-bold lg:pb-2">
              GitFit
            </div>
            <div className="relative lg:flex lg:items-center">
              <div className="mt-4 lg:mt-0 lg:ml-6">
                <div className="flex flex-1 h-32 lg:h-52 w-full pb-2 px-12">
                  <div className="bg-project1 w-full block mt-1 text-lg leading-tight font-semibold">
                    <a
                      href="https://gitfit-2.herokuapp.com/"
                      target="_blank"
                      rel="noreferrer"
                      className="button left"
                    >
                      Project
                    </a>
                  </div>
                  <div className="bg-repo w-full block mt-1 text-lg leading-tight font-semibold">
                    <a
                      href="https://github.com/nkrilis/GitFit-2.0"
                      target="_blank"
                      rel="noreferrer"
                      className="button right"
                    >
                      Github
                    </a>
                  </div>
                </div>
                <p className="text-lg lg:text-2xl">
                  MERN stack application utilizing GraphQL and apollo-client to
                  access a complex database. Database structure includes users,
                  exercises, workout plans with weekly and daily exercises.
                  Users can sign up and check out workout plans, add them to
                  their own profile. Users can also view exercises with
                  descriptions and an embedded how to video.
                </p>
              </div>
              <div className="lg:flex-shrink-0 px-8 lg:w-80">
                <h1 className="font-bold text-2xl pb-5">Technologies Used:</h1>
                <ul className="grid grid-cols-4 lg:grid-cols-2 lg:text-xl font-semibold text-center">
                  <li>MERN Stack</li>
                  <li>GraphQL</li>
                  <li>Apollo</li>
                  <li>React</li>
                  <li>JavaScript</li>
                  <li>TailwindCSS</li>
                  <li>Express</li>
                  <li>Node</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex-1 text-black text-center border border-indigo-600 px-2 lg:px-5 py-2 lg:py-5 m-2 rounded-lg">
            <div className="uppercase tracking-wide text-md text-2xl font-bold pb-2">
              Off The Couch
            </div>
            <div className="lg:flex lg:items-center">
              <div className="mt-4 lg:mt-0 lg:ml-6">
                <div className="flex flex-1 h-32 lg:h-52 w-full pb-2 px-12">
                  <div className="bg-project2 w-full block mt-1 text-lg leading-tight font-semibold">
                    <a
                      href="https://mpalfano.github.io/Off-the-couch-personal/"
                      target="_blank"
                      rel="noreferrer"
                      className="button left"
                    >
                      Project
                    </a>
                  </div>
                  <div className="bg-repo w-full block mt-1 text-lg leading-tight font-semibold">
                    <a
                      href="https://github.com/MpAlfano/Off-The-Couch"
                      target="_blank"
                      rel="noreferrer"
                      className="button right"
                    >
                      Github
                    </a>
                  </div>
                </div>
                <p className="text-lg lg:text-2xl">
                  Project that helps a user with limited free time find
                  something to do nearby. They can choose an activity from a
                  list or have one randomly generated. A hungry user can choose
                  to have a random restaurant generated, an option for those who
                  can't decide what to eat. Application uses API's to get
                  location, search google and generate a random actvity.
                </p>
              </div>
              <div className="lg:flex-shrink-0 px-8 lg:w-80">
                <h1 className="font-bold text-2xl pb-5">Technologies Used:</h1>
                <ul className="grid grid-cols-3 lg:grid-cols-2 text-lg lg:text-xl font-semibold text-center">
                  <li>MapQuest API</li>
                  <li>Bored API</li>
                  <li>SerpStack API</li>
                  <li>Bootstrap</li>
                  <li>JavaScript</li>
                  <li>JQuery</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="flex justify-center pb-6 px-2 md:px-40 md:pr-24 font-semibold w-full text-center pt-6 z-5">
        <p className="px-6 bg-gradient-to-r from-neutral-500 via-purple-400 to-neutral-500 md:text-xl lg:text-3xl rounded-full">
          Pain unlocks a secret doorway in the mind, one that leads to both peak
          performance, and beautiful silence. - David Goggins
        </p>
      </footer>
    </div>
  );
}
