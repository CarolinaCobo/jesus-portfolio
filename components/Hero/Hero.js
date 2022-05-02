export default function Hero() {
  return (
    <div className="w-64 text-center bg-center pb-8 ml-4 md:mx-auto md:w-full md:py-48 md:mt-10 md:max-w-7xl md:pt-16 md:pb-20 lg:py-48 lg:text-left ">
      <div className="lg:text-left bg-gray-900 md:px-6 bg-opacity-25 lg:w-1/2 sm:px-8 text-background py-10">
        <h1 className="text-xl tracking-tight font-extrabold text-white md:text-6xl">
          <span className="">Hi, I&apos;m </span>{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-sky-500 ">
            Jesús
          </span>
        </h1>

        <p className="text-white text-sm sm:max-w-lg sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
          I design and develop learning solutions to match your business needs.
          Welcome to my portfolio.
        </p>
      </div>
    </div>
  );
}
