import Footer from "../../components/Footer/Footer";
import NavbarProjects from "../../components/Nav/NavBarProjects";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types";
import styles from "./about.module.css";

const options = {
  renderMark: {
    [MARKS.CODE]: (text) => {
      return (
        <pre className="inline">
          <code className="inline">{text}</code>
        </pre>
      );
    },
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => {
      const hasCodeInline = node.content[0]?.marks?.some((markObj) => {
        return markObj.type === "code";
      });
      if (node.content.length === 1 && hasCodeInline) {
        return (
          <div className="code-block block">
            <pre>
              <code>{node.content[0].value}</code>
            </pre>
          </div>
        );
      }

      return <p>{children}</p>;
    },
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const { file, title, description } = node.data.target.fields;
      const { url } = file;
      return (
        <figure className="my-4">
          <img className="mx-auto" alt={title} src={`https:${url}`} />
          <figcaption className="mx-16 mt-4 text-center text-slate-500 text-sm">
            {description}
          </figcaption>
        </figure>
      );
    },
    [INLINES.HYPERLINK]: (node, children) => {
      if (node.data.uri.includes("youtube.com/embed/")) {
        return (
          <div className="relative" style={{ paddingTop: "56.25%" }}>
            <iframe
              className="absolute inset-0 w-full h-full shadow-xl"
              src={node.data.uri}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        );
      }
      return (
        <a
          target={`${
            node.data.uri.includes("jesushcobo.com") ? "_self" : "_blank"
          }`}
          href={node.data.uri}
        >
          {children}
        </a>
      );
    },
  },
};

export default function About({ data }) {
  console.log(data);

  return (
    <>
      <div className="pb-16 bg-gradient-to-r from-sky-600 to-sky-500">
        <NavbarProjects />
        <div className="container mx-auto max-w-3xl">
          <h1 className="mb-6 pt-16 text-3xl tracking-tight font-medium text-white sm:text4xl md:text-5xl ">
            {data.title}
          </h1>
        </div>
      </div>

      <article className={styles["post"]}>
        <div>{documentToReactComponents(data.body, options)}</div>
      </article>
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const client = require("contentful").createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_DELIVERY,
  });

  const entries = await client.getEntries({ content_type: "aboutMe" });

  return {
    props: {
      data: entries.items[0].fields,
    },
  };
}
