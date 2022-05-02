export default function Hero() {
  return (
    <div className="bg-center py-48  mt-10mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left ">
      <div className="sm:text-center lg:text-left bg-gray-900 py-3 px-6 bg-opacity-25 lg:w-1/2 sm:px-8  text-background py-10">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-100 sm:text-5xl md:text-6xl">
          <span className="">Hi, I&apos;m </span>{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-sky-500 ">
            Jesús
          </span>
        </h1>

        <p className="mt-3 text-base text-gray-100 sm:mt-5 sm:text-lg sm:max-w-lg sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
          I design and develop learning solutions to match your business needs.
          Welcome to my portfolio.
        </p>
      </div>
    </div>
  );
}
