export default function Contact() {
  return (
    <>
      <div className="pb-16 bg-gradient-to-r from-sky-600 to-sky-500">
        <div className="container max-w-3xl mx-2 sm:mx-6 md:mx-auto">
          <h1 className="mb-6 pt-16 text-3xl tracking-tight font-medium text-white sm:text4xl md:text-5xl ">
            Get in touch
          </h1>
        </div>
      </div>

      <div className="pb-16 max-w-3xl mx-2 sm:mx-6 md:mx-auto">
        <p className="mt-8 text-xl text-gray-900 leading-8">
          I would love to hear from you. Please reach out by{" "}
          <a
            className="text-transparent bg-clip-text font-bold bg-gradient-to-r from-sky-600 to-sky-500 hover:from-sky-900  hover:to-sky-600"
            href="mailto:jesus.hernandez.cobo@gmail.com?subject=Get in touch"
            target="_blank"
            rel="noreferrer"
          >
            email{" "}
          </a>
          or by connecting with me on{" "}
          <a
            className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-sky-600 to-sky-500 hover:from-sky-900  hover:to-sky-600"
            href="https://www.linkedin.com/in/jesus-cobo"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn.
          </a>
        </p>
        <p className="mt-8 text-xl text-gray-900 leading-8">
          Thank you for visiting my portfolio.
          <p className="mt-4">- Jesús</p>
        </p>
      </div>
    </>
  );
}
