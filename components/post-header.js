import CoverImage from "../components/cover-image";

export default function PostHeader({ title, coverImage, ctaUrl, ctaLabel }) {
  return (
    <div className="mt-10 grid grid-cols-6 gap-6 pb-6 ">
      <div className="col-start-2 col-span-2 place-content-center">
        <h1 className=" mb-6 pt-16 text-3xl tracking-tight font-medium text-white sm:text-4xl md:text-5xl ">
          {title}
        </h1>
        <a
          className="py-3 border 
           md:text-sm mb-2 sm:mb-0 md:mr-2 px-6 mx-auto bg-white font-small text-dark md:text-sm bg-gradient-to-r hover:from-sky-600 hover:to-sky-500 hover:text-white "
          href={ctaUrl}
        >
          {ctaLabel}
        </a>
      </div>
      <div className="col-span-2">
        <CoverImage title={title} src={coverImage} height={400} width={650} />
      </div>
    </div>
  );
}
