import React from "react";
import profPicture from "..//images/bio.jpg";

export default function Home() {
  return (
    <div className="profContainer container mt-5 md:flex margin: auto flex-direction: column justify-center">
      <div className="profDiv md:flex text-center margin: 0 auto">
        <img className="profPic" src={profPicture} alt="biography"></img>

        <h1>About Me:</h1>

        <p>
          Hello my name is Mark, I'm an ambitious Full-Stack Developer looking
          for new opportunites to grow and tackle new challenges. Previously I
          operated my owned landscaping business for over seven years before
          deciding I wanted to pursue coding. I am very goal orientated and
          enjoy the planning process almost as much as working on or completing
          a project. I have always been intrigued by programming. With interests
          in how everything is built and what other new apps could be made to
          improve our way of life. I really enjoy creating new things and
          thinking of new ways to complete tasks more efficiently. I look
          forward to my future and maybe one day I will be working with you.
        </p>
        {/* <div className="container mt-5 mx-auto px-2">
          <div className="md:flex">
            <div className="flex-1 text-black text-center bg-white px-5 py-5 m-2 rounded">
              <div className="lg:flex lg:items-center">
                <div className="lg:flex-shrink-0">
                  <h2>Skills</h2>
                </div>
                <div className="mt-4 lg:mt-0 lg:ml-6">
                  <div className="uppercase tracking-wide text-sm text-indigo-400 font-bold">
                    Pick & Mix
                  </div>
                </div>
                <div className="lg:flex-shrink-0">
                  <h2>Skills</h2>
                </div>
                <div className="mt-4 lg:mt-0 lg:ml-6">
                  <div className="uppercase tracking-wide text-sm text-indigo-400 font-bold">
                    Pick & Mix
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <div className="container mt-5 mx-auto px-2">
          <div className="md:flex">
            <div className="flex-1 text-black text-center bg-teal-600 hover:border-dashed border-2 border-indigo-600 px-5 py-5 m-2 rounded">
              <div className="lg:flex lg:items-center">
                <div className="lg:flex-shrink-0">
                  <h2>Skills</h2>
                </div>
                <div className="mt-4 lg:mt-0 lg:ml-6">
                  <div className="uppercase tracking-wide text-sm text-sky-700 font-bold">
                    Pick & Mix
                  </div>
                  Project
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
            <div className="flex-1 text-black text-center bg-teal-600 hover:border-dashed border-2 border-indigo-600 px-5 py-5 m-2 rounded">
              <div className="lg:flex lg:items-center">
                <div className="lg:flex-shrink-0">
                  <img
                    className="rounded-lg lg:w-64"
                    src=""
                    alt="Off The Couch"
                  />
                </div>
                <div className="mt-4 lg:mt-0 lg:ml-6">
                  <div className="uppercase tracking-wide text-sm text-sky-700 font-bold">
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
        </div>
      </div>
    </div>
  );
}
