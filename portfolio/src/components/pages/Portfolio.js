import React from "react";

export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio Page</h1>
      <div className="container mt-5">
        <div className="md:flex">
          <div className="flex-1 text-black text-center bg-white px-5 py-5 m-2 rounded">
            <div className="lg:flex lg:items-center">
              <div className="lg:flex-shrink-0">
                <img className="rounded-lg lg:w-64" src="" alt="" />
              </div>
              <div className="mt-4 lg:mt-0 lg:ml-6">
                <div className="uppercase tracking-wide text-sm text-indigo-400 font-bold">
                  Project 1
                </div>
                <a
                  href="/"
                  className="block mt-1 text-lg leading-tight font-semibold text-gray-700 hover:underline"
                >
                  See Project here
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
