import projectsData from "./CardsData";

const cardsData = projectsData;

export default function Card() {
  return (
    <div className="relative bg-white sm:pt-4">
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
    </div>
  );
}
