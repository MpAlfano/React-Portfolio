import React, { useState, useEffect } from "react";

export default function TestPortfolio2() {
  const { innerHeight: height } = window;

  const [quote, setQuote] =
    useState(`"Give me a lever long enough and a fulcrum on which to place it, and I
    shall move the world." -Archimedes`);

  const [flash, setFlash] = useState("");

  var x = 0;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const quote1 = `"I think it's very important to have a feedback loop, where you're constantly thinking about what you've done and how you could be doing it better." -Elon Musk`;
      const quote2 = `"Other people's opinion of you does not have to become your reality." -Les Brown`;

      if (currentScrollY > height * 3.45 && x !== 1) {
        x = 2;
        setQuote(quote1);
        setFlash("flash");
      }
      if (currentScrollY <= height * 3.2 && x === 2) {
        x = 1;
        setQuote(quote2);
        setFlash("pulse");
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
  }, []);

  return (
    <div
      className="grid content-center sm:h-fit sm:min-h-screen md:h-screen bg-gradient-to-b from-orange-200 to-green-100"
      id="portfolio2"
    >
      <div className="container port md:pl-20 mx-auto">
        <div className="grid m-auto">
          <div className="flex-1 text-black text-center border border-indigo-600 px-2 py-2 m-2 rounded-lg">
            <div className="uppercase tracking-wide text-md text-2xl font-bold pb-2">
              Pick & Mix
            </div>
            <div className="lg:flex lg:items-center">
              <div className="mt-4 lg:mt-0 lg:ml-6">
                <div className="flex flex-1 h-32 lg:h-40 xl:h-52 w-full pb-2 px-2 md:px-12">
                  <div className="bg-project3 w-full block mt-1 md:text-lg leading-tight font-semibold">
                    <a
                      href="https://pick-n-mix.herokuapp.com/"
                      target="_blank"
                      rel="noreferrer"
                      className="button left"
                    >
                      Project
                    </a>
                  </div>
                  <div className="bg-repo w-full block mt-1 md:text-lg leading-tight font-semibold">
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
              <div className="lg:flex-shrink-0 px-2 md:px-8 lg:w-80">
                <h1 className="font-bold text-2xl pb-2 md:pb-5">
                  Technologies Used:
                </h1>
                <ul className="grid grid-cols-4 lg:grid-cols-2 lg:text-xl font-semibold text-center">
                  <li>JavaScript</li>
                  <li>MySql</li>
                  <li>Sequelize</li>
                  <li>REST</li>
                  <li>Handlebars</li>
                  <li>Node</li>
                  <li>Bootstrap</li>
                  <li>Express</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex-1 text-black text-center border border-indigo-600 px-2 lg:px-5 py-2 m-2 rounded-lg">
            <div className="uppercase tracking-wide text-md text-2xl font-bold pb-2">
              Social Network API
            </div>
            <div className="lg:flex lg:items-center">
              <div className="mt-4 lg:mt-0 lg:ml-6">
                <div className="flex flex-1 h-32 lg:h-40 xl:h-52 w-full pb-2 px-2 md:px-12">
                  <div className="bg-project4 w-full block mt-1 md:text-lg leading-tight font-semibold">
                    <a
                      href="https://drive.google.com/file/d/1DKWWVOzsYXXoT9VpF7elQkfQbeLTxfZC/view"
                      target="_blank"
                      rel="noreferrer"
                      className="button left"
                    >
                      Project
                    </a>
                  </div>
                  <div className="bg-repo w-full block mt-1 md:text-lg leading-tight font-semibold">
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
              <div className="lg:flex-shrink-0 px-2 md:px-8 lg:w-80">
                <h1 className="font-bold text-2xl pb-2 md:pb-5">
                  Technologies Used:
                </h1>
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
      <footer
        className="flex justify-center pb-6 px-2 md:px-40 md:pr-24 font-semibold w-full text-center align-middle pt-6 z-5"
        id={flash}
      >
        <p className="px-4 bg-gradient-to-r from-neutral-300 via-red-400 to-neutral-300 text-lg md:text-xl lg:text-2xl rounded-3xl">
          {quote}
        </p>
      </footer>
    </div>
  );
}
