import React from "react";

export default function Contact() {
  return (
    <div className="container mt-5 mx-auto px-2">
      <div className="md:flex">
        <div className="flex-1 text-black text-center px-5 py-5">
          <div>
            <h1>Fill out this form to send me an email.</h1>
            <form className="">
              <div>
                <label>Name:</label>
                <br></br>
                <input className="w-1/2" type="text" id="name" />
              </div>
              <div>
                <label>Email:</label>
                <br></br>
                <input
                  className="w-1/2 required:border-red-500 "
                  type="text"
                  id="email"
                />
              </div>
              <div>
                <label>Message</label>
                <br></br>
                <input className="w-full h-36" type="text" id="message" />
              </div>
              <div className="mb-2">
                <br></br>
                <button className="btn color-green" type="submit">
                  Signup
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
