// export default function Contact() {
//   return (
//     <>
//       <div className="pb-16 bg-gradient-to-r from-sky-600 to-sky-500">
//         <div className="container max-w-3xl mx-2 sm:mx-6 md:mx-auto">
//           <h1 className="mb-6 pt-16 text-3xl tracking-tight font-medium text-white sm:text4xl md:text-5xl ">
//             Get in touch
//           </h1>
//         </div>
//       </div>

//       <div className="pb-16 max-w-3xl mx-2 sm:mx-6 md:mx-auto">
//         <p className="mt-8 text-xl text-gray-900 leading-8">
//           I would love to hear from you. Please reach out by{" "}
//           <a
//             className="text-transparent bg-clip-text font-bold bg-gradient-to-r from-sky-600 to-sky-500 hover:from-sky-900  hover:to-sky-600"
//             href="mailto:jesus.hernandez.cobo@gmail.com?subject=Get in touch"
//             target="_blank"
//             rel="noreferrer"
//           >
//             email{" "}
//           </a>
//           or by connecting with me on{" "}
//           <a
//             className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-sky-600 to-sky-500 hover:from-sky-900  hover:to-sky-600"
//             href="https://www.linkedin.com/in/jesus-cobo"
//             target="_blank"
//             rel="noreferrer"
//           >
//             LinkedIn.
//           </a>
//         </p>
//         <p className="mt-8 text-xl text-gray-900 leading-8">
//           Thank you for visiting my portfolio.
//           <p className="mt-4">- Jesús</p>
//         </p>
//       </div>
//     </>
//   );
// }

import React, { useRef, useState } from "react";
import emailjs, { send } from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    setEmail("");
    setName("");
    setMessage("");
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vp7qrfd",
        "template_tngtc2q",
        form.current,
        "user_HTT6JvIMa0YqrzXyDfQLh"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Thank you for your message, I'll get back to you soon!");
        },
        (error) => {
          console.log(error.text);
          alert(
            "Sorry, something went wrong 😢 please try again or reach out to me on LinkedIn"
          );
        }
      );
    handleSubmit();
  };

  return (
    <>
      <div className="pb-16 bg-gradient-to-r from-sky-600 to-sky-500">
        <div className="container max-w-3xl mx-2 sm:mx-6 md:mx-auto">
          <h1 className="mb-6 pt-16 text-3xl tracking-tight font-medium text-white sm:text4xl md:text-5xl ">
            Get in touch
          </h1>
        </div>
      </div>
      <div className="px-4 overflow-hidden sm:px-6 lg:px-8">
        <div className="pb-16 max-w-3xl mx-2 sm:mx-6 md:mx-auto">
          <p className="mt-8 text-xl text-gray-900 leading-8">
            I would love to hear from you. Please reach out by{" "}
            <a
              className="text-transparent bg-clip-text font-bold bg-gradient-to-r from-sky-600 to-sky-500 hover:from-sky-900  hover:to-sky-600"
              href="mailto:jesus.hernandez.cobo@gmail.com?subject=Get in touch"
              target="_blank"
              rel="noreferrer"
            >
              email
            </a>
            , by connecting with me on{" "}
            <a
              className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-sky-600 to-sky-500 hover:from-sky-900  hover:to-sky-600"
              href="https://www.linkedin.com/in/jesus-cobo"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>{" "}
            or by filling the form below.
          </p>
          <p className="mt-8 text-xl text-gray-900 leading-8">
            Thank you for visiting my portfolio.
            <p className="mt-4">- Jesús</p>
          </p>
        </div>
        <hr></hr>
        <div className="relative max-w-xl mx-auto mt-8">
          <h1 className="text-2xl text-center ">Contact Form</h1>
          <div id="formInfo" className="mt-12">
            <form
              ref={form}
              onSubmit={sendEmail}
              method="POST"
              className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
            >
              <div className="sm:col-span-2">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-900 "
                >
                  Name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={name}
                    autoComplete="given-name"
                    required
                    onChange={(e) => setName(e.target.value)}
                    className="py-3 px-4 block w-full shadow-sm border focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                  />
                </div>
              </div>
              <div className="sm:col-span-2 ">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-900 border-solid border-gray-900"
                >
                  Email
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    value={email}
                    type="email"
                    autoComplete="email"
                    onChange={(e) => setEmail(e.target.value)}
                    className="py-3 px-4 block w-full shadow-sm border focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 "
                    required
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-900"
                >
                  Message
                </label>
                <div className="mt-1">
                  <textarea
                    id="message"
                    name="message"
                    value={message}
                    rows={4}
                    className="py-3 px-4 block w-full shadow-sm border focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 "
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <button
                  type="submit"
                  onClick={sendEmail}
                  className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent shadow-sm text-base font-medium border bg-gradient-to-r from-sky-600 to-sky-500 hover:from-sky-900  hover:to-sky-600 font-small text-white md:text-sm"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
