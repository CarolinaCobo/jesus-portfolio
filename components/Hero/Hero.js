export default function Hero() {
  return (
    <div className="flex sm:flex-row flex-col-reverse max-w-7xl mx-auto">
      <div className="text-background place-self-center flex flex-col justify-center items-center ">
        <h1 className="mt-4 md:mb-4 text-center text-3xl font-extrabold text-white md:text-6xl md:w-96">
          <span>Hi, I&apos;m </span>{" "}
          <span className="bg-white px-1">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-sky-500 ">
              Jesús
            </span>
          </span>
        </h1>
        <p className="text-white text-xs w-72 pb-4 text-center sm:text-xl md:w-96">
          I design and develop learning solutions to match your business needs.
          Welcome to my portfolio
        </p>
      </div>

      <div className="flex flex-col justify-center items-center sm:p-16 sm:ml-16">
        <img
          className="rounded-full h-full w-48 md:w-2/3"
          src="/headerimage.png"
          alt="header image"
        />
      </div>
    </div>
  );
}
