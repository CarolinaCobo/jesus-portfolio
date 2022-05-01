import CoverImage from "../components/cover-image";

export default function PostHeader({ title, coverImage, links, ctaLabel }) {
  return (
    <div className="container mx-auto">
      <div className="mt-10 md:grid md:grid-cols-6 md:gap-6 pb-6 flex flex-col-reverse">
        <div className="md:col-start-2 md:col-span-2 md:place-content-center">
          <h1 className="mb-6 pt-16 text-3xl tracking-tight font-medium text-white sm:text4xl md:text-5xl ">
            {title}
          </h1>
          {links &&
            links.map(({ label, url }) => (
              <div key={url}>
                <a
                  className=" mb-8 py-3 border md:text-sm sm:mb-0 md:mr-2 px-6 mx-auto bg-white bg-gradient-to-r hover:from-sky-600 hover:to-sky-500 hover:text-white"
                  href={url}
                >
                  {label}
                </a>
              </div>
            ))}
        </div>
        <div className="md:col-span-2">
          {coverImage && (
            <CoverImage
              title={title}
              src={coverImage}
              height={300}
              width={400}
            />
          )}
        </div>
      </div>
    </div>
  );
}
