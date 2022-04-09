export default function Hero() {
  return (
    <div className="bg-gray-900 py-24">
      <div className="flex flex-row max-w-7xl mx-auto py-16 px-4 sm:py-8 sm:px-6 lg:px-8">
        <div className="flex items-center justify m-4">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
              Jesús Cobo{" "}
            </h2>
            <p className="text-base font-semibold text-indigo-200 tracking-wide uppercase mt-3">
              Instructional Designer and eLearning Developer
            </p>
            <p className="max-w-xl mt-5 mx-auto text-l text-white">
              I design and develop learning solutions to match your business
              needs. Welcome to my portfolio.
            </p>
          </div>
        </div>
        <div className=" place-content-center ">
          <img
            className="mx-auto object-cover rounded-lg shadow-lg"
            src="./profilepic.jpeg"
            alt="Profile picture"
          />
        </div>
      </div>
    </div>
  );
}
