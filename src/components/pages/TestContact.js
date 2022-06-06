import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function TestContact() {
  const form = useRef();

  const [response, responseSet] = useState("");

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
    <main className="h-screen relative" id="contact">
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
                    <label className="md:text-lg">
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
                    <label className="md:text-lg">
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
                    <label className="md:text-lg">Message here:</label>
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
                      className="bg-gray-800 hover:bg-gray-700 border-b-4 border-black hover:border-gray-800 text-white text-center py-2 px-4 rounded pb-20px"
                      type="submit"
                    >
                      Send email
                    </button>
                  </div>
                </form>
                <div className="text-2xl">
                  You can also email me anytime at mpalfano4@gmail.com
                </div>
                <div className="text-2xl pt-2">Phone: (905) 407-7178</div>
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
      <footer className="hidden md:flex justify-center px-2 pt-40 md:px-40 md:pr-24 font-semibold w-full text-center z-5">
        <p className="px-4 bg-gradient-to-r from-neutral-300 via-yellow-400 to-neutral-300 md:text-xl lg:text-3xl rounded-full">
          “The world makes room for passionate people.” -Lewis Howes
        </p>
      </footer>
    </main>
  );
}

// [
//  '"Other people's opinion of you does not have to become your reality." -Les Brown',
//  '"Accept responsibility for your life. Know that it is you who will get you where you want to go, no one else." -Les Brown',
//  '"Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment." -Buddha'
// ]
