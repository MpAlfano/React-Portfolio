import React from "react";
import proj1 from "../images/proj1.png";
import proj2 from "../images/proj2.png";
import proj3 from "../images/proj3.png";
import proj4 from "../images/proj4.png";
import proj5 from "../images/proj5.png";
import proj6 from "../images/proj6.png";

export default function Portfolio() {
  return (
    <div>
      <h1 className="text-center font-bold text-black">Portfolio Page</h1>
      <div className="container mt-5 mx-auto px-2">
        <div className="md:flex">
          <div className="flex-1 text-black text-center bg-white px-5 py-5 m-2 rounded">
            <div className="lg:flex lg:items-center">
              <div className="lg:flex-shrink-0">
                <img
                  className="rounded-lg lg:w-64"
                  src={[proj1]}
                  alt="Pick & Mix"
                />
              </div>
              <div className="mt-4 lg:mt-0 lg:ml-6">
                <div className="uppercase tracking-wide text-sm text-indigo-400 font-bold">
                  Pick & Mix
                </div>
                <a
                  href="https://pick-n-mix.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="block mt-1 text-lg leading-tight font-semibold text-gray-700"
                >
                  Project
                </a>
                <a
                  href="https://github.com/MpAlfano/pick-n-mix"
                  target="_blank"
                  rel="noreferrer"
                  className="block mt-1 text-lg leading-tight font-semibold text-gray-700"
                >
                  Github Repo
                </a>
              </div>
            </div>
          </div>
          <div className="flex-1 text-black text-center bg-white px-5 py-5 m-2 rounded">
            <div className="lg:flex lg:items-center">
              <div className="lg:flex-shrink-0">
                <img
                  className="rounded-lg lg:w-64"
                  src={[proj2]}
                  alt="Off The Couch"
                />
              </div>
              <div className="mt-4 lg:mt-0 lg:ml-6">
                <div className="uppercase tracking-wide text-sm text-indigo-400 font-bold">
                  Off The Couch
                </div>
                <a
                  href="https://mpalfano.github.io/Off-the-couch-personal/"
                  target="_blank"
                  rel="noreferrer"
                  className="block mt-1 text-lg leading-tight font-semibold text-gray-700"
                >
                  Project
                </a>
                <a
                  href="https://github.com/MpAlfano/Off-the-couch-personal"
                  target="_blank"
                  rel="noreferrer"
                  className="block mt-1 text-lg leading-tight font-semibold text-gray-700"
                >
                  Github Repo
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="md:flex">
          <div className="flex-1 text-black text-center bg-white px-5 py-5 m-2 rounded">
            <div className="lg:flex lg:items-center">
              <div className="lg:flex-shrink-0">
                <img
                  className="rounded-lg lg:w-64"
                  src={[proj3]}
                  alt="Team Profile Generator"
                />
              </div>
              <div className="mt-4 lg:mt-0 lg:ml-6">
                <div className="uppercase tracking-wide text-sm text-indigo-400 font-bold">
                  Team Page Generator
                </div>
                <a
                  href="https://drive.google.com/file/d/1SEgfOOYlcsP_NGAnhDHhQlTAogMmE3SJ/view"
                  target="_blank"
                  rel="noreferrer"
                  className="block mt-1 text-lg leading-tight font-semibold text-gray-700"
                >
                  Deployed Project
                </a>
                <a
                  href="https://github.com/MpAlfano/Team-Profile-Generator"
                  target="_blank"
                  rel="noreferrer"
                  className="block mt-1 text-lg leading-tight font-semibold text-gray-700"
                >
                  Github Repo
                </a>
              </div>
            </div>
          </div>
          <div className="flex-1 text-black text-center bg-white px-5 py-5 m-2 rounded">
            <div className="lg:flex lg:items-center">
              <div className="lg:flex-shrink-0">
                <img
                  className="rounded-lg lg:w-64"
                  src={[proj4]}
                  alt="Employee Tracker Back-end"
                />
              </div>
              <div className="mt-4 lg:mt-0 lg:ml-6">
                <div className="uppercase tracking-wide text-sm text-indigo-400 font-bold">
                  Employee Tracker
                </div>
                <a
                  href="https://drive.google.com/file/d/14MFCAClaN5ZHQJUiS2FZ12bAQRH9YpNB/view"
                  target="_blank"
                  rel="noreferrer"
                  className="block mt-1 text-lg leading-tight font-semibold text-gray-700"
                >
                  Project
                </a>
                <a
                  href="https://github.com/MpAlfano/Social-Network-API"
                  target="_blank"
                  rel="noreferrer"
                  className="block mt-1 text-lg leading-tight font-semibold text-gray-700"
                >
                  Github Repo
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="md:flex">
          <div className="flex-1 text-black text-center bg-white px-5 py-5 m-2 rounded">
            <div className="lg:flex lg:items-center">
              <div className="lg:flex-shrink-0">
                <img
                  className="rounded-lg lg:w-64"
                  src={[proj5]}
                  alt="Social-Network-API"
                />
              </div>
              <div className="mt-4 lg:mt-0 lg:ml-6">
                <div className="uppercase tracking-wide text-sm text-indigo-400 font-bold">
                  Social Network API
                </div>
                <a
                  href="https://drive.google.com/file/d/1DKWWVOzsYXXoT9VpF7elQkfQbeLTxfZC/view"
                  target="_blank"
                  rel="noreferrer"
                  className="block mt-1 text-lg leading-tight font-semibold text-gray-700"
                >
                  Project
                </a>
                <a
                  href="https://github.com/MpAlfano/Social-Network-API"
                  target="_blank"
                  rel="noreferrer"
                  className="block mt-1 text-lg leading-tight font-semibold text-gray-700"
                >
                  Github Repo
                </a>
              </div>
            </div>
          </div>
          <div className="flex-1 text-black text-center bg-white px-5 py-5 m-2 rounded">
            <div className="lg:flex lg:items-center">
              <div className="lg:flex-shrink-0">
                <img
                  className="rounded-lg lg:w-64"
                  src={[proj6]}
                  alt="J.A.T.E"
                />
              </div>
              <div className="mt-4 lg:mt-0 lg:ml-6">
                <div className="uppercase tracking-wide text-sm text-indigo-400 font-bold">
                  Just A Text Editor
                </div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  <a
                    href="https://text-edit-or.herokuapp.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="block mt-1 text-lg leading-tight font-semibold text-gray-700"
                  >
                    Project
                  </a>
                </button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  <a
                    href="https://github.com/MpAlfano/Text-Editor"
                    target="_blank"
                    rel="noreferrer"
                    className="block mt-1 text-lg leading-tight font-semibold text-gray-700"
                  >
                    Github Repo
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
