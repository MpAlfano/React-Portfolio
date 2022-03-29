import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

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
          console.log(result.text);
          document.querySelector(".user_name").value = "";
          document.querySelector(".user_email").value = "";
          document.querySelector(".message").value = "";
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="container mt-5 mx-auto px-2">
      <div className="md:flex">
        <div className="flex-1 text-black text-center px-5 py-5">
          <h1 className="text-4xl">Contact</h1>
          <br></br>
          <div>
            <p className="text-2xl">
              Fill out this form to send me an email message.
            </p>
            <br></br>
            <section className="">
              <form ref={form} onSubmit={sendEmail}>
                <div className="contact">
                  <label>Name:</label>
                  <br></br>
                  <input
                    className="user_name w-1/2"
                    type="text"
                    name="user_name"
                    required
                  />
                </div>
                <br></br>
                <div>
                  <label>Email:</label>
                  <br></br>
                  <input
                    className="user_email w-1/2 required:border-red-500"
                    name="user_email"
                    type="email"
                    required
                  />
                </div>
                <br></br>
                <div>
                  <label>Message here:</label>
                  <br></br>
                  <textarea
                    className="message w-full h-36"
                    type="text"
                    name="message"
                    required
                  />
                </div>
                <br></br>
                <div className="mb-2">
                  <br></br>
                  <button
                    className="bg-gray-800 hover:bg-gray-700 border-b-4 border-black hover:border-gray-800 text-white text-center py-2 px-4 rounded pb-20px"
                    type="submit"
                  >
                    Send email
                  </button>
                </div>
              </form>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
