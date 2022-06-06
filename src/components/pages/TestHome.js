import React from "react";
import profPicture from "../images/bio.jpg";

export default function TestHome() {
  return (
    <div
      className="h-screen flex bg-cover bg-[url('../src/components/images/nature2.jpg')]"
      id="home"
    >
      <div className="flex content-center justify-center align-middle mx-auto">
        <div className="flex">
          <div className="grid lg:flex items-center text-center justify-center pt-10 md:pt-0 md:pb-24">
            <div className="flex justify-center lg:flex-shrink-0 md:pl-16 lg:pl-32 -mb-20">
              <img
                className="w-60 md:w-72 lg:w-80 rounded-full p-1"
                src={profPicture}
                alt="Prof Pic"
              />
            </div>
            <div className="flex justify-center pl-12 md:pl-32 lg:pl-16 pr-12 md:text-xl lg:text-3xl font-semibold">
              <p className="bg-sky-200 rounded-lg opacity-90" id="bio">
                Hello my name is Mark, I'm an ambitious Full-Stack Developer.
                Passionate about learning new skills and developing
                applications. I am always looking for fresh opportunities to
                grow and develop my skills.
              </p>
            </div>
            <br></br>
          </div>
        </div>
      </div>
      <footer className="flex pb-6 lg:pb-8 px-2 md:px-40 md:pr-24 absolute bottom-0 w-full justify-center align-middle text-center z-5">
        <p className="px-4 bg-gradient-to-r from-neutral-300 via-green-400 to-neutral-300 md:text-xl lg:text-3xl font-bold rounded-full">
          "I think it is possible for ordinary people to choose to be
          extraordinary." -Elon Musk
        </p>
      </footer>
    </div>
  );
}

// [
//  '“Everyone fails. Highly successful people fail many more times than the rest of the world and with much higher stakes at hand. ―Lewis Howes"',
//  '"I have not failed. I've just found 10,000 ways that won't work." -Thomas A. Edison'
//  '"Three things cannot be long hidden: the sun, the moon, and the truth." -Buddha'
// ];
