// import React from "react";

// export default function Contact() {
//   return (
//     <div className="container px-5 my-5">
//       <form id="contactForm">
//         <div className="mb-3">
//           <label className="form-label" htmlFor="name">
//             Name
//           </label>
//           <input
//             className="form-control"
//             id="name"
//             type="text"
//             placeholder="Name"
//             data-sb-validations=""
//           />
//         </div>
//         <div className="mb-3">
//           <label className="form-label" htmlFor="emailAddress">
//             Email Address
//           </label>
//           <input
//             className="form-control"
//             id="emailAddress"
//             type="email"
//             placeholder="Email Address"
//             data-sb-validations="required,email"
//           />
//           <div
//             className="invalid-feedback"
//             data-sb-feedback="emailAddress:required"
//           >
//             Email Address is required.
//           </div>
//           <div
//             className="invalid-feedback"
//             data-sb-feedback="emailAddress:email"
//           >
//             Email Address Email is not valid.
//           </div>
//         </div>
//         <div className="mb-3">
//           <label className="form-label" htmlFor="message">
//             Message
//           </label>
//           <input
//             className="form-control"
//             id="message"
//             type="text"
//             placeholder="Message"
//             data-sb-validations="required"
//           />
//           <div className="invalid-feedback" data-sb-feedback="message:required">
//             Message is required.
//           </div>
//         </div>
//         <div className="d-none" id="submitSuccessMessage">
//           <div className="text-center mb-3">
//             <div className="fw-bolder">Form submission successful!</div>
//           </div>
//         </div>
//         <div className="d-none" id="submitErrorMessage">
//           <div className="text-center text-danger mb-3">
//             Error sending message!
//           </div>
//         </div>
//         <div className="d-grid">
//           <button
//             className="btn btn-primary btn-lg"
//             id="submitButton"
//             type="submit"
//           >
//             Submit
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

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
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
}
