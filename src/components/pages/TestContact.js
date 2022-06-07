import React, { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function TestContact() {
  const form = useRef();

  const [response, responseSet] = useState("");
  const { innerHeight: height } = window;

  const [quote, setQuote] = useState(
    `“The world makes room for passionate people.” -Lewis Howes`
  );

  const [flash, setFlash] = useState("");

  var x = 0;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const quote1 = `"Accept responsibility for your life. Know that it is you who will get you where you want to go, no one else." -Les Brown`;
      const quote2 = `"Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment." -Buddha`;

      if (currentScrollY >= height * 5 && x !== 1) {
        x = 3;
      }
      if (currentScrollY <= height * 4.98 && x !== 1 && x !== 0) {
        x = 2;
        setQuote(quote1);
        setFlash("flash");
      }
      if (currentScrollY >= height * 4.99 && x === 2) {
        x = 1;
        setQuote(quote2);
        setFlash("pulse");
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
  }, []);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_px2fv3w",
        "template_13eizjr",
        form.current,
        "2PI30PYVsL2Y8fZ6W"
      )
      .then(
        (result) => {
          document.querySelector(".user_name").value = "";
          document.querySelector(".user_email").value = "";
          document.querySelector(".message").value = "";
          responseSet("Email has been sent, I will respond as soon as I can.");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const clearMessage = () => {
    responseSet("");
  };

  return (
    <main className="min-h-screen h-fit md:h-screen relative" id="contact">
      <div className="container relative md:py-20 md:pl-20 mx-auto px-1 pt-4 md:pt-10">
        <div className="md:flex">
          <div className="flex-1 text-black text-center px-2 py-2">
            <div>
              <p className="text-2xl">
                Fill out this form to send me an email.
              </p>
              <br></br>
              <section className="">
                <form ref={form} onSubmit={sendEmail} className="md:pb-16">
                  <div className="contact">
                    <label className="md:text-lg xl:text-xl">
                      Enter your name or company info:
                    </label>
                    <br></br>
                    <input
                      className="user_name w-full lg:w-1/2"
                      type="text"
                      name="user_name"
                      required
                      onChange={clearMessage}
                    />
                  </div>
                  <br></br>
                  <div>
                    <label className="md:text-lg xl:text-xl">
                      Enter your contact info:
                    </label>
                    <br></br>
                    <input
                      className="user_email w-full lg:w-1/2 required:border-red-500"
                      name="user_email"
                      type="email"
                      required
                      onChange={clearMessage}
                    />
                  </div>
                  <br></br>
                  <div>
                    <label className="md:text-lg xl:text-xl">
                      Message here:
                    </label>
                    <br></br>
                    <textarea
                      className="message w-full lg:w-2/3 h-36"
                      type="text"
                      name="message"
                      required
                      onChange={clearMessage}
                    />
                  </div>
                  <br></br>
                  <div className="mb-2">
                    <p className="text-xl">{response}</p>
                    <button
                      className="bg-gray-800 hover:bg-gray-700 border-b-4 border-black hover:border-gray-800 text-white text-center py-2 px-4 rounded md:pb-20px"
                      type="submit"
                    >
                      Send email
                    </button>
                  </div>
                </form>
                <div className="text-2xl xl:text-3xl">
                  You can also email me anytime at mpalfano4@gmail.com
                </div>
                <div className="text-2xl xl:text-3xl pt-2">
                  Phone: (905) 407-7178
                </div>
              </section>
            </div>
          </div>
        </div>
        <ul className="contact-links md:hidden">
          <li>
            <a
              href="https://www.linkedin.com/in/markalfano"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} color="4d4d4e" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/MpAlfano"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} color="4d4d4e" />
            </a>
          </li>
          <li>
            <a
              href="mailto: mpalfano4@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faEnvelope} color="4d4d4e" />
            </a>
          </li>
        </ul>
      </div>
      <footer
        className="flex justify-center px-2 py-6 md:px-40 md:pr-24 font-semibold w-full text-center z-5"
        id={flash}
      >
        <p className="px-4 bg-gradient-to-r from-neutral-300 via-yellow-400 to-neutral-300 md:text-xl lg:text-3xl rounded-full">
          {quote}
        </p>
      </footer>
    </main>
  );
}
