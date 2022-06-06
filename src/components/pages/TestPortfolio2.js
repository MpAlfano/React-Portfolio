import React from "react";

export default function TestPortfolio2() {
  return (
    <div
      className="grid content-center sm:h-fit md:h-screen bg-gradient-to-b from-orange-200 to-green-100"
      id="portfolio2"
    >
      <div className="container md:pl-20 mx-auto">
        <div className="grid md:gap-y-4 lg:gap-y-10 m-auto">
          <div className="flex-1 text-black text-center border border-indigo-600 px-2 lg:px-5 py-2 lg:py-5 m-2 rounded-lg">
            <div className="uppercase tracking-wide text-md text-2xl font-bold pb-2">
              Pick & Mix
            </div>
            <div className="lg:flex lg:items-center">
              <div className="mt-4 lg:mt-0 lg:ml-6">
                <div className="flex flex-1 h-32 lg:h-52 w-full pb-2 px-12">
                  <div className="bg-project3 w-full block mt-1 text-lg leading-tight font-semibold">
                    <a
                      href="https://pick-n-mix.herokuapp.com/"
                      target="_blank"
                      rel="noreferrer"
                      className="button left"
                    >
                      Project
                    </a>
                  </div>
                  <div className="bg-repo w-full block mt-1 text-lg leading-tight font-semibold">
                    <a
                      href="https://github.com/MpAlfano/pick-n-mix"
                      target="_blank"
                      rel="noreferrer"
                      className="button right"
                    >
                      Github
                    </a>
                  </div>
                </div>
                <p className="text-lg lg:text-2xl">
                  Full-stack project that uses a database to populate grocery
                  items for a user to browse through. A user can sign up and
                  begin adding items to their list. The user can also view that
                  list to update item quantity, remove an item or remove all the
                  items. Other features include the current date being displayed
                  and a search bar to filter items.
                </p>
              </div>
              <div className="lg:flex-shrink-0 px-8 lg:w-80">
                <h1 className="font-bold text-2xl pb-5">Technologies Used:</h1>
                <ul className="grid grid-cols-4 lg:grid-cols-2 lg:text-xl font-semibold text-center">
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
            </div>
          </div>
          <div className="flex-1 text-black text-center border border-indigo-600 px-2 lg:px-5 py-2 lg:py-5 m-2 rounded-lg">
            <div className="uppercase tracking-wide text-md text-2xl font-bold pb-2">
              Social Network API
            </div>
            <div className="lg:flex lg:items-center">
              <div className="mt-4 lg:mt-0 lg:ml-6">
                <div className="flex flex-1 h-32 lg:h-52 w-full pb-2 px-12">
                  <div className="bg-project4 w-full block mt-1 text-lg leading-tight font-semibold">
                    <a
                      href="https://drive.google.com/file/d/1DKWWVOzsYXXoT9VpF7elQkfQbeLTxfZC/view"
                      target="_blank"
                      rel="noreferrer"
                      className="button left"
                    >
                      Project
                    </a>
                  </div>
                  <div className="bg-repo w-full block mt-1 text-lg leading-tight font-semibold">
                    <a
                      href="https://github.com/MpAlfano/Social-Network-API"
                      target="_blank"
                      rel="noreferrer"
                      className="button right"
                    >
                      Github
                    </a>
                  </div>
                </div>
                <p className="text-lg lg:text-2xl">
                  Back-end application using mongoDB, mongoose and the express
                  server. Application allows a user to store users, their
                  friends, thoughts and reactions into a database. When a user
                  or their thought or a reaction is updated or deleted it is
                  updated in the database. Reactions can be added to thoughts
                  and users can also add friends.
                </p>
              </div>
              <div className="lg:flex-shrink-0 px-8 lg:w-80">
                <h1 className="font-bold text-2xl pb-5">Technologies Used:</h1>
                <ul className="grid grid-cols-3 lg:grid-cols-2 text-lg lg:text-xl font-semibold text-center">
                  <li>MongoDB</li>
                  <li>Mongoose</li>
                  <li>Node</li>
                  <li>Express</li>
                  <li>Javascript</li>
                  <li>dayjs</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
