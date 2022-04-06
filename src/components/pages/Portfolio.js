import React from "react";
import proj1 from "../images/proj1.png";
import proj2 from "../images/proj2.png";
import proj3 from "../images/proj3.png";
import proj4 from "../images/proj4.png";
import proj5 from "../images/proj5.png";
import gitfit from "../images/gitfit.png";

export default function Portfolio() {
  return (
    <div>
      <h1 className="text-center font-bold text-4xl text-black">
        Portfolio Page
      </h1>
      <div className="container mt-5 mx-auto px-2">
        <div className="md:flex">
          <div className="flex-1 text-black text-center bg-teal-600 hover:border-dashed border-2 border-indigo-600 px-5 py-5 m-2 rounded">
            <div className="lg:flex lg:items-center">
              <div className="lg:flex-shrink-0">
                <img
                  className="rounded-lg lg:w-64"
                  src={gitfit}
                  alt="Pick & Mix"
                />
              </div>
              <div className="mt-4 lg:mt-0 lg:ml-6">
                <div className="uppercase tracking-wide text-md font-bold">
                  Pick & Mix
                </div>
                <p>
                  MERN stack application utilizing GraphQL and apollo-client to
                  access a complex database. Database structure includes users,
                  exercises, workout plans with weekly and daily exercises.
                  Users can sign up and check out workout plans, add them to
                  their own profile. Users can also view exercises with
                  descriptions and an embedded how to video.
                </p>
                <a
                  href="https://gitfit-2.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="block mt-1 text-lg leading-tight font-semibold hover:text-sky-300"
                >
                  Project
                </a>
                <a
                  href="https://github.com/nkrilis/GitFit-2.0"
                  target="_blank"
                  rel="noreferrer"
                  className="block mt-1 text-lg leading-tight font-semibold hover:text-sky-300"
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
                  src={proj1}
                  alt="Pick & Mix"
                />
              </div>
              <div className="mt-4 lg:mt-0 lg:ml-6">
                <div className="uppercase tracking-wide text-md font-bold">
                  Pick & Mix
                </div>
                <p>
                  Full-stack project that uses a database to populate grocery
                  items for a user to browse through. A user can sign up and
                  begin adding items to their list. The user can also view that
                  list to update item quantity, remove items and also remove all
                  the items. Other features include the current date being
                  displayed and a search bar to filter items.
                </p>
                <a
                  href="https://pick-n-mix.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="block mt-1 text-lg leading-tight font-semibold hover:text-sky-300"
                >
                  Project
                </a>
                <a
                  href="https://github.com/MpAlfano/pick-n-mix"
                  target="_blank"
                  rel="noreferrer"
                  className="block mt-1 text-lg leading-tight font-semibold hover:text-sky-300"
                >
                  Github Repo
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="md:flex">
          <div className="flex-1 text-black text-center bg-teal-600 hover:border-dashed border-2 border-indigo-600 px-5 py-5 m-2 rounded">
            <div className="lg:flex lg:items-center">
              <div className="lg:flex-shrink-0">
                <img
                  className="rounded-lg lg:w-64"
                  src={proj2}
                  alt="Off The Couch"
                />
              </div>
              <div className="mt-4 lg:mt-0 lg:ml-6">
                <div className="uppercase tracking-wide text-md font-bold">
                  Off The Couch
                </div>
                <p>
                  Project that allows a user with limited time find something to
                  do nearby. They can choose an activity from a list or have one
                  randomly generated based on the users location. Their is also
                  an option to generate a random restaurant for a hungry user
                  who can't decide what do order. Uses API's to get location,
                  search google and generate a random actvity.
                </p>
                <a
                  href="https://mpalfano.github.io/Off-the-couch-personal/"
                  target="_blank"
                  rel="noreferrer"
                  className="block mt-1 text-lg leading-tight font-semibold hover:text-sky-300"
                >
                  Project
                </a>
                <a
                  href="https://github.com/MpAlfano/Off-the-couch-personal"
                  target="_blank"
                  rel="noreferrer"
                  className="block mt-1 text-lg leading-tight font-semibold hover:text-sky-300"
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
                  src={proj3}
                  alt="Team Profile Generator"
                />
              </div>
              <div className="mt-4 lg:mt-0 lg:ml-6">
                <div className="uppercase tracking-wide text-md font-bold">
                  Team Page Generator
                </div>
                <p>
                  Back-end application that allows a user to create a team
                  profile page with their team member information. They user can
                  add multiple members, give them select roles and fill in
                  cooresponding information. Once the user is finished the HTML
                  page will be generated for them.
                </p>
                <a
                  href="https://drive.google.com/file/d/1SEgfOOYlcsP_NGAnhDHhQlTAogMmE3SJ/view"
                  target="_blank"
                  rel="noreferrer"
                  className="block mt-1 text-lg leading-tight font-semibold hover:text-sky-300"
                >
                  Deployed Project
                </a>
                <a
                  href="https://github.com/MpAlfano/Team-Profile-Generator"
                  target="_blank"
                  rel="noreferrer"
                  className="block mt-1 text-lg leading-tight font-semibold hover:text-sky-300"
                >
                  Github Repo
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="md:flex">
          <div className="flex-1 text-black text-center bg-teal-600 hover:border-dashed border-2 border-indigo-600 px-5 py-5 m-2 rounded">
            <div className="lg:flex lg:items-center">
              <div className="lg:flex-shrink-0">
                <img
                  className="rounded-lg lg:w-64"
                  src={proj4}
                  alt="Employee Tracker Back-end"
                />
              </div>
              <div className="mt-4 lg:mt-0 lg:ml-6">
                <div className="uppercase tracking-wide text-md font-bold">
                  Employee Tracker
                </div>
                <p>
                  Back-end application that can be used to store eployee
                  information into a database. A user can create job titles,
                  assign managers and add multiple employees to different
                  departments. They can also update any fields neccessary and
                  view their database information such as all employees or
                  departments as needed.
                </p>
                <a
                  href="https://drive.google.com/file/d/14MFCAClaN5ZHQJUiS2FZ12bAQRH9YpNB/view"
                  target="_blank"
                  rel="noreferrer"
                  className="block mt-1 text-lg leading-tight font-semibold hover:text-sky-300"
                >
                  Project
                </a>
                <a
                  href="https://github.com/MpAlfano/Social-Network-API"
                  target="_blank"
                  rel="noreferrer"
                  className="block mt-1 text-lg leading-tight font-semibold hover:text-sky-300"
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
                  src={proj5}
                  alt="Social-Network-API"
                />
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
                <a
                  href="https://drive.google.com/file/d/1DKWWVOzsYXXoT9VpF7elQkfQbeLTxfZC/view"
                  target="_blank"
                  rel="noreferrer"
                  className="block mt-1 text-lg leading-tight font-semibold hover:text-sky-300"
                >
                  Project
                </a>
                <a
                  href="https://github.com/MpAlfano/Social-Network-API"
                  target="_blank"
                  rel="noreferrer"
                  className="block mt-1 text-lg leading-tight font-semibold hover:text-sky-300"
                >
                  Github Repo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
