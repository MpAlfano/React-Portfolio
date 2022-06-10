import React, { useState, useEffect } from "react";
import profPicture from "../images/bio.jpg";

export default function TestHome() {
  const { innerHeight: height } = window;

  const [quote, setQuote] =
    useState(`"I think it is possible for ordinary people to choose to be
  extraordinary." -Elon Musk`);

  const [flash, setFlash] = useState("");

  var x = 0;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const quote1 = `"Three things cannot be long hidden: the sun, the moon, and the truth." -Buddha`;
      const quote2 = `"I have not failed. I've just found 10,000 ways that won't work." -Thomas A. Edison`;

      if (currentScrollY > height / 2 && x !== 1) {
        x = 2;
        setQuote(quote1);
        setFlash("flash");
      }
      if (currentScrollY <= 0.25 * height && x !== 0) {
        x = 1;
        setQuote(quote2);
        setFlash("pulse");
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
  }, []);

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
                Passionate about maintaining a healthy lifestyle, developing new
                applications and my personal growth. I enjoy designing on the
                front end with React, SASS and Tailwindcss or working on back
                end functionality using JavaScript. I am always looking for
                fresh opportunities to grow and develop my skills.
              </p>
            </div>
            <br></br>
          </div>
        </div>
      </div>
      <footer
        className="flex pb-6 lg:pb-8 px-2 md:px-40 md:pr-24 absolute bottom-0 w-full justify-center align-middle text-center z-5"
        id={flash}
      >
        <p className="px-4 bg-gradient-to-r from-neutral-300 via-green-400 to-neutral-300 md:text-xl lg:text-3xl font-bold rounded-full">
          {quote}
        </p>
      </footer>
    </div>
  );
}
