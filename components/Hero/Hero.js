export default function Hero() {
  return (
    <div className="bg-stone-50 py-24">
      <div className=" grid grid-cols-12 max-w-7xl mx-auto py-16 px-4 sm:py-8 sm:px-6 lg:px-8">
        <div className="col-span-7">
          <div className=" m-4">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              Hi, I&apos;m{" "}
              <span className="decoration-sky-600 underline hover:animate-pulse">
                Jesús
              </span>
            </h2>
            <p className="text-base font-semibold text-sky-800 tracking-wide uppercase mt-3 max-w-md">
              I design and develop learning solutions to match your business
              needs.
              <p className="mt-2">Welcome to my portfolio.</p>
              {/* Instructional Designer and eLearning Developer */}
            </p>
            {/* <p className="max-w-xl mt-5  text-l text-gray-900">
              I design and develop learning solutions to match your business
              needs. Welcome to my portfolio.
            </p> */}
          </div>
        </div>
        <div className="relative w-full col-span-4">
          <img
            className="rounded-lg shadow-lg absolute z-10 object-cover rounded-xl -top-28 "
            src="./profilepic.jpeg"
            alt="Profile picture"
          />
        </div>
      </div>
    </div>
  );
}
