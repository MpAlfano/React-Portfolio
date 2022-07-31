import React, { useState, useEffect } from "react";

export default function TestAbout() {
  const { innerHeight: height } = window;

  const [quote, setQuote] = useState(
    `“Price is what you pay. Value is what you get.” -Warren Buffet`
  );

  const [flash, setFlash] = useState("");

  var x = 0;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const quote1 = `“The only thing worse than being blind is having sight but no vision." —Helen Keller`;
      const quote2 = `"Help others achieve their dreams and you will achieve yours." -Les Brown`;

      if (currentScrollY > height * 1.5 && x !== 1) {
        x = 2;
        setQuote(quote1);
        setFlash("flash");
      }
      if (currentScrollY <= height * 1.2 && x === 2) {
        x = 1;
        setQuote(quote2);
        setFlash("pulse");
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
  }, []);

  return (
    <main className="h-screen" id="about">
      <section className="top flex flex-col-1 h-1/2 md:h-1/2 text-gray-300">
        <div
          className="text-sm md:text-lg lg:text-xl xl:text-2xl px-2 md:px-10 pt-2 md:pt-4 md:ml-20"
          id="bio"
        >
          <p className="md:pt-5 lg:pt-10 lg:px-22 md:pb-4">
            Previously owned and operated a landscaping business where I enjoyed
            designing and building projects from scratch. Recently I finished a
            full stack coding bootcamp and feel empowered by my newly acquired
            skills. I am eager to learn and grow as I embark on a new career
            path.
          </p>
          <p className="md:pl-24 lg:pl-60 md:pr-8">
            I am very goal orientated and enjoy the planning process almost as
            much as working on or completing a project. I have always been
            intrigued by programming, with interests in how everything is bulit
            and what other new apps could be made to improve our way of life. I
            enjoy coming up with new ways to complete tasks more efficiently.
          </p>
        </div>
      </section>
      <section className="bottom h-3/4">
        <div
          className="pl-1 pt-12 mt-12 md:pl-24 lg:pl-32 md:pt-52 md:mt-32 lg:pt-20 lg:mt-28"
          id="skills"
        >
          <h1 className="text-xl pt-4 md:text-3xl xl:text-4xl font-bold underline">
            Skills
          </h1>
          <div className="grid text-base lg:text-2xl xl:text-3xl font-semibold pt-2 md:mt-2">
            <ul className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 pb-1 md:pb-3">
              <li>Problem Solving </li>
              <li>Inquisitiveness</li>
            </ul>
            <ul className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 pb-1 md:pb-3">
              <li>Critical Thinking</li>
              <li>Project Management</li>
              <li>Adaptability</li>
              <li>Listening</li>
            </ul>
            <ul className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 pb-1 md:pb-4">
              <li>Collaboration</li>
              <li>An Eye for Detail</li>
              <li className="pb-1 md:pb-0">Teamwork</li>
              <li className="">Personal Growth</li>
            </ul>
          </div>

          <div className="grid mt-4 lg:pt-4">
            <h1 className="text-xl md:text-3xl xl:text-4xl font-bold">
              <span className="px-0.5 bg-black text-white underline">
                Languages, Tools & Frameworks
              </span>
            </h1>
            <div className="grid text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold mt-4 md:mt-7">
              <ul className="grid grid-cols-5 lg:grid-cols-7 text-center pb-1 md:pb-2">
                <li>
                  <span className="px-0.5 bg-black text-white">JavaScript</span>
                </li>
                <li className="pl-4 md:pl-0">
                  <span className="px-0.5 bg-black text-white">React</span>
                </li>
                <li className="md:pb-2">
                  <span className="px-0.5 bg-black text-white">Redux</span>
                </li>
                <li>
                  <span className="px-0.5 bg-black text-white">CSS</span>
                </li>
                <li>
                  <span className="px-0.5 bg-black text-white">Node</span>
                </li>
              </ul>
              <ul className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 text-center pb-1 md:pb-2">
                <li className="md:pb-2">
                  <span className="px-0.5 bg-black text-white">Express</span>
                </li>
                <li>
                  <span className="px-0.5 bg-black text-white">MySql</span>
                </li>
                <li className="pb-1 md:pb-2">
                  <span className="px-0.5 bg-black text-white">MongoDB</span>
                </li>
                <li>
                  <span className="px-0.5 bg-black text-white">GraphQL</span>
                </li>
                <li>
                  <span className="px-0.5 bg-black text-white">MVC</span>
                </li>
              </ul>
              <ul className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-7 text-center">
                <li className="md:pb-2">
                  <span className="px-0.5 bg-black text-white">TDD - Jest</span>
                </li>
                <li>
                  <span className="px-0.5 bg-black text-white">Git</span>
                </li>
                <li className="pb-1 md:pb-0">
                  <span className="px-0.5 bg-black text-white">Github</span>
                </li>
                <li>
                  <span className="px-0.5 bg-black text-white">
                    TaliwindCSS
                  </span>
                </li>
                <li>
                  <span className="px-0.5 bg-black text-white">BootStrap</span>
                </li>
                <li>
                  <span className="px-0.5 bg-black text-white">HTML</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <footer
        className="hidden lg:flex justify-center -mt-36 lg:-mt-24 -pt-4 pb-6 px-2 md:px-40 md:pr-24 font-semibold w-full text-center z-5"
        id={flash}
      >
        <p className="px-4 bg-gradient-to-r from-neutral-300 via-blue-400 to-neutral-300 md:text-xl lg:text-2xl rounded-3xl">
          {quote}
        </p>
      </footer>
    </main>
  );
}
