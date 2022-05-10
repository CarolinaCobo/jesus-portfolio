export default function Hero() {
  return (
    <div className="w-56 m-8 pl-8  text-center bg-center sm:m-0 md:mx-auto md:w-full md:pt-16 md:pb-20 lg:text-center lg:max-w-7xl sm:flex grid">
      <div className="md:text-center pb-2 md:px-6 sm:px-8 text-background lg:py-10 place-self-center	">
        <h1 className="text-xl tracking-tight font-extrabold text-white md:text-6xl">
          <span className="">Hi, I&apos;m </span>{" "}
          <span className="bg-white px-1">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-sky-500 ">
              Jesús
            </span>
          </span>
        </h1>
        <p className="text-white text-xs md:max-w-lg sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
          I design and develop learning solutions to match your business needs.
          Welcome to my portfolio.
        </p>
      </div>
      <div className="sm:flex-auto ml-48 grid">
        <img
          className="rounded-full h-full w-2/3"
          src="/headerimage.png"
          alt="header image"
        />
      </div>
    </div>
  );
}
