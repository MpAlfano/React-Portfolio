import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
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
    <div className="container mt-5 mx-auto px-1">
      <div className="md:flex">
        <div className="flex-1 text-black text-center px-2 py-2">
          <h1 className="text-4xl">Contact</h1>
          <br></br>
          <div>
            <p className="text-2xl">Fill out this form to send me an email.</p>
            <br></br>
            <section className="">
              <form ref={form} onSubmit={sendEmail}>
                <div className="contact">
                  <label>Enter your name or company info:</label>
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
                  <label>Enter your contact info:</label>
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
                  <label>Message here:</label>
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
                  <br></br>
                  <button
                    className="bg-gray-800 hover:bg-gray-700 border-b-4 border-black hover:border-gray-800 text-white text-center py-2 px-4 rounded pb-20px"
                    type="submit"
                  >
                    Send email
                  </button>
                </div>
              </form>
              <br></br>
              <div className="text-2xl">
                You can also email me anytime at mpalfano4@gmail.com
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
