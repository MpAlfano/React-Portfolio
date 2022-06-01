import React from "react";
import proj1 from "../images/proj1.png";
import proj5 from "../images/proj5.png";

export default function TestPortfolio2() {
  return (
    <div className="h-screen bg-green-700" id="portfolio2">
      <div className="container mx-auto px-1">
        <div className="md:flex">
          <div className="flex-1 text-black text-center bg-teal-400 hover:border-dashed border-2 border-indigo-600 px-2 lg:px-5 py-2 lg:py-5 m-2 rounded-lg">
            <div className="lg:flex lg:items-center">
              <div className="lg:flex-shrink-0">
                <img
                  className="rounded-lg lg:w-64 lg:h-48"
                  src={proj1}
                  alt="Pick & Mix"
                />
                <h1 className="font-bold">Technologies Used:</h1>
                <ul className="grid grid-cols-2">
                  <li>MySql</li>
                  <li>Node</li>
                  <li>Express</li>
                  <li>REST</li>
                  <li>Sequelize</li>
                  <li>Handlebars</li>
                  <li>JavaScript</li>
                  <li>Bootstrap</li>
                </ul>
              </div>
              <div className="mt-4 lg:mt-0 lg:ml-6">
                <div className="uppercase tracking-wide text-md font-bold">
                  Pick & Mix
                </div>
                <p>
                  Full-stack project that uses a database to populate grocery
                  items for a user to browse through. A user can sign up and
                  begin adding items to their list. The user can also view that
                  list to update item quantity, remove an item or remove all the
                  items. Other features include the current date being displayed
                  and a search bar to filter items.
                </p>
                <div className="grid grid-cols-2">
                  <a
                    href="https://pick-n-mix.herokuapp.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="block mt-1 text-lg leading-tight font-semibold hover:text-sky-500"
                  >
                    Project
                  </a>
                  <a
                    href="https://github.com/MpAlfano/pick-n-mix"
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
                  className="rounded-lg lg:w-64"
                  src={proj5}
                  alt="Social-Network-API"
                />
                <h1 className="font-bold">Technologies Used:</h1>
                <ul className="grid grid-cols-2">
                  <li>MongoDB</li>
                  <li>Mongoose</li>
                  <li>Node</li>
                  <li>Express</li>
                  <li>Javascript</li>
                  <li>dayjs</li>
                </ul>
              </div>
              <div className="mt-4 lg:mt-0 lg:ml-6">
                <div className="uppercase tracking-wide text-md font-bold">
                  Social Network API
                </div>
                <p>
                  Back-end application using mongoDB, mongoose and the express
                  server. Application allows a user to store users, their
                  friends, thoughts and reactions into a database. When a user
                  or their thought or a reaction is updated or deleted it is
                  updated in the database. Reactions can be added to thoughts
                  and users can also add friends.
                </p>
                <div className="grid grid-cols-2">
                  <a
                    href="https://drive.google.com/file/d/1DKWWVOzsYXXoT9VpF7elQkfQbeLTxfZC/view"
                    target="_blank"
                    rel="noreferrer"
                    className="block mt-1 text-lg leading-tight font-semibold hover:text-sky-500"
                  >
                    Project
                  </a>
                  <a
                    href="https://github.com/MpAlfano/Social-Network-API"
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
