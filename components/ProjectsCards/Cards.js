import projectsData from "./CardsData";

import Link from "next/link";

const cardsData = projectsData;

export default function Card() {
  return (
    <>
      {/* <div className="relative bg-white sm:pt-4">
        <h2 className="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl md:pt-8">
          Portfolio
        </h2>
        {projectsData.map((cardData) => (
          <div
            id="projects-section"
            key={cardData.name}
            className="lg:mx-auto lg:max-w-7xl lg:px-6 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start"
          >
            <div className="relative sm:py-16 lg:py-0">
              <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20">
                <div className="relative pt-80 pb-10 rounded-2xl shadow-xl overflow-hidden">
                  <img
                    className="absolute inset-0 h-full w-full object-cover "
                    src={cardData.imageUrl}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="relative mx-auto max-w-md px-4 lg:py-12 sm:max-w-3xl sm:px-6 lg:px-0">
              <div className="pt-12 sm:pt-1 lg:pt-16">
                <h2 className=" text-gray-900 font-bold tracking-tight sm:text-4xl pt-2">
                  {cardData.name}
                </h2>
                <div className="mt-6 text-gray-500 space-y-6">
                  <p className="text-lg">{cardData.description}</p>
                  <div className="max-w-2xl mx-auto text-center pb-8">
                    <a
                      href={cardData.href}
                      className="bg-sky-700 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white hover:bg-sky-900 sm:w-auto"
                    >
                      Learn more
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div> */}

      <div className="relative bg-white sm:pt-4">
        <h2 className="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl md:pt-8">
          Portfolio
        </h2>
        {/* <div className="absolute inset-0">
          <div className="bg-white h-1/3 sm:h-2/3" />
        </div> */}
        <div className="relative max-w-7xl mx-auto">
          {/* <div className="text-left">
            <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
              My work
            </h2>
            <p className="mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
              Some examples of my work and projects I&apos;ve worked or I&apos;m
              currently working on, feedback is always appreaciated
            </p>
          </div> */}
          <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none pb-8">
            {projectsData.map((cardData) => (
              <div
                id="projects-section"
                key={cardData.name}
                className="flex flex-col shadow-md overflow-hidden"
              >
                <div className="flex-shrink-0" href={cardData.href}>
                  <img
                    className=" h-72 w-full object-cover"
                    src={cardData.imageUrl}
                    alt=""
                  />
                </div>
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <a href={cardData.href}>
                      <p className="text-xl leading-6 font-medium space-y-1 text-sky-600 ">
                        {cardData.name}
                      </p>
                    </a>
                    <a href={cardData.href} className="block mt-2">
                      <p className="text-xl font-semibold text-gray-900"></p>
                      <p className="mt-3 text-base text-gray-500">
                        {cardData.description}
                      </p>
                    </a>
                  </div>
                  <div className="mt-5 sm:mt-8 sm:flex">
                    <div className="w-full">
                      <Link href={cardData.href}>
                        <a className="flex items-center justify-center py-3 border bg-gradient-to-r from-sky-600 to-sky-500 hover:from-sky-900  hover:to-sky-600 font-small text-white md:text-sm mb-2 sm:mb-0 md:mr-2">
                          Learn more
                        </a>
                      </Link>
                    </div>
                    <div className="w-full">
                      <Link href="#testimonials-section">
                        <a className="w-full flex items-center justify-center py-3 border bg-white font-small text-dark md:text-sm bg-gradient-to-r hover:from-sky-600 hover:to-sky-500 hover:text-white">
                          Open project
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
