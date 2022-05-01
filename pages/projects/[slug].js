import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Head from "next/head";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types";
import styles from "./projects.module.css";

import Footer from "../../components/Footer/Footer";
import NavbarProjects from "../../components/Nav/NavBarProjects";
import PostHeader from "../../components/post-header";

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

export default function Post({ post }) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  console.log({ post });
  return (
    <div className="">
      {router.isFallback ? (
        <div>Loading…</div>
      ) : (
        <>
          <Head>
            <title>{post.title}</title>
            <meta key="og:title" property="og:title" content={post.title} />
            {post.image?.fields && (
              <meta
                key="og:image"
                property="og:image"
                content={`https:${post.image.fields.file.url}`}
              />
            )}
            <meta
              key="og:description"
              property="og:description"
              content={post.excerpt}
            />
            <meta
              key="description"
              property="description"
              content={post.excerpt}
            />
            <meta property="og:type" content="article" />
            <meta property="og:url" content="https://jesushcobo/projects/" />
          </Head>
          <div className="bg-sky-600 pb-16">
            <NavbarProjects />
            <PostHeader
              title={post.title}
              coverImage={
                post.image ? `https:${post.image.fields.file.url}` : null
              }
              links={post.multipleProjects?.data}
            />
          </div>
          <article className={styles["post"]}>
            <div>{/* Put your header here */}</div>

            <div>{documentToReactComponents(post.content, options)}</div>
          </article>
          <Footer />
        </>
      )}
    </div>
  );
}

async function getContentfulPosts() {
  const client = require("contentful").createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_DELIVERY,
  });

  async function fetchEntries() {
    const entries = await client.getEntries();
    if (entries.items) return entries.items;
    console.log(`Error getting Entries for ${contentType.name}.`);
  }

  const newPosts = await fetchEntries();

  return newPosts;
}

export async function getStaticProps({ params, preview }) {
  const post = await getContentfulPostBySlug(params.slug, preview);

  return {
    props: {
      post: {
        ...post.fields,
        content: post.fields.body,
      },
    },
    revalidate: 1,
  };
}

export const getContentfulPostBySlug = async function (slug, preview = false) {
  const client = require("contentful").createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: preview
      ? process.env.CONTENTFUL_PREVIEW_SECRET
      : process.env.CONTENTFUL_DELIVERY,
    host: preview ? "preview.contentful.com" : "cdn.contentful.com",
  });

  async function fetchEntries() {
    const entries = await client.getEntries();
    if (entries.items) return entries.items;
    console.log(`Error getting Entries for ${contentType.name}.`);
  }

  const posts = await fetchEntries();

  const postArrFromSlug = posts.filter((post) => {
    return post.fields.slug === slug;
  });

  return postArrFromSlug[0];
};

export async function getStaticPaths() {
  const newPosts = await getContentfulPosts();

  return {
    paths: newPosts.map((post) => {
      return {
        params: {
          slug: post.fields.slug,
        },
      };
    }),
    fallback: false,
  };
}
