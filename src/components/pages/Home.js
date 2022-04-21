import React from "react";
import profPicture from "..//images/bio.jpg";

export default function Home() {
  return (
    // <div>
    //   <div className="md:flex justify-center">
    //     <div className="profDiv md:flex text-center margin: 0 auto px-2 md:px-10 lg:px-40">
    //       <h1 className="text-center font-bold text-4xl text-black">
    //         About Me
    //       </h1>
    //       <br></br>
    //       <img className="profPic" src={profPicture} alt="biography"></img>
    //       <section>
    //         <div className="bg-sky-200">
    //           <p>
    //             Hello my name is Mark, I'm an ambitious Full-Stack Developer
    //             looking for new opportunities to grow and enjoy tackling new
    //             challenges. Previously I operated my owned landscaping business
    //             for over seven years before deciding I wanted to pursue coding.
    //             I am very goal orientated and enjoy the planning process almost
    //             as much as working on or completing a project. I have always
    //             been intrigued by programming. With interests in how everything
    //             is bulit and what other new apps could be made to improve our
    //             way of life. I really enjoy creating new things and thinking of
    //             new ways to complete tasks more efficiently. I look forward to
    //             my future and maybe one day I will be working with you.
    //           </p>
    //         </div>
    //       </section>
    //     </div>
    //   </div>
    // </div>

    <div>
      <h1 className="text-center font-bold text-xl lg:text-4xl text-black">
        About Me
      </h1>
      <div className="container mt-2 mx-auto">
        <div className="md:flex">
          <div className="flex-1 text-black text-center rounded">
            <div className="lg:flex lg:items-center">
              <div className="lg:flex-shrink-0">
                <img
                  className="rounded-lg lg:w-64"
                  src={profPicture}
                  alt="GitFit"
                />
              </div>

              <div className="mt-4 lg:mt-0 lg:ml-6">
                <div className="uppercase tracking-wide text-md font-bold">
                  GitFit
                </div>
                <p>
                  MERN stack application utliizing GraphQL and apollo-client to
                  access a complex database. Database structure includes users,
                  exercises, workout plans with weekly and daliy exercises.
                  Users can sign up and check out workout plans, add them to
                  their own proflie. Users can also view exercises with
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
                  href="https://github.com/nkrliis/GitFit-2.0"
                  target="_blank"
                  rel="noreferrer"
                  className="block mt-1 text-lg leading-tight font-semibold hover:text-sky-300"
                >
                  Github Repo
                </a>
              </div>
            </div>
            <div className="">
              <h1 className="text-2xl">My Skills:</h1>
              <div className="grid sm:grid-cols-auto md:grid-cols-2 lg:-grid-cols-2">
                <div className="bg-green-300">
                  <h1 className="text-lg font-bold">Languages & Tools</h1>
                  <ul>
                    <li>JavaScript</li>
                    <li>SQL& NoSQL</li>
                    <li>Git</li>
                  </ul>
                </div>

                <div className="bg-green-300">
                  <h1 className="text-lg font-bold">Frameworks</h1>
                  <ul>
                    <li>React</li>
                    <li>TaliwindCSS</li>
                    <li>BootStrap</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
