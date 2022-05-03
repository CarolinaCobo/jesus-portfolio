export default function Hero() {
  return (
    <div className="lg:py-64 w-56 pb-11 md:py-16 pl-8 text-center bg-center md:mx-auto md:w-full md:pt-16 md:pb-20 lg:text-center lg:max-w-7xl">
      <div className="md:text-center bg-gray-900 pb-2 md:px-6 bg-opacity-25 md:w-1/2 sm:px-8 text-background lg:py-10">
        <h1 className="text-xl tracking-tight font-extrabold text-white md:text-6xl">
          <span className="">Hi, I&apos;m </span>{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-sky-500 ">
            Jesús
          </span>
        </h1>

        <p className="text-white text-xs md:max-w-lg sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
          I design and develop learning solutions to match your business needs.
          Welcome to my portfolio.
        </p>
      </div>
    </div>
  );
}
