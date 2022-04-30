import CoverImage from "../components/cover-image";

export default function PostHeader({ title, coverImage, ctaUrl, ctaLabel }) {
  return (
    <div className="md:container md:mx-auto">
      <div className="mt-10 grid grid-cols-6 gap-6 pb-6 ">
        <div className="col-start-2 col-span-2 place-content-center">
          <h1 className=" mb-6 pt-16 text-3xl tracking-tight font-medium text-white sm:text-4xl md:text-5xl ">
            {title}
          </h1>
        </div>
        <div className="col-span-2">
          <CoverImage title={title} src={coverImage} height={400} width={500} />
        </div>
      </div>
    </div>
  );
}
