export default function Hero() {
  return (
    <div className=" bg-center py-48  ">
      {/* <div className="absolute inset-0 bg-gray-50 mix-blend-multiply" /> */}
      <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 ">
        <div className="sm:text-center lg:text-left">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-100 sm:text-5xl md:text-6xl ">
            <span className="">Hi, I&apos;m </span>{" "}
            <span className=" text-sky-600 ">Jesús</span>
          </h1>
          <p className="mt-3 text-base  text-gray-100 sm:mt-5 sm:text-lg sm:max-w-lg sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            I design and develop learning solutions to match your business
            needs. Welcome to my portfolio.
          </p>
        </div>
      </main>
    </div>
  );
}
