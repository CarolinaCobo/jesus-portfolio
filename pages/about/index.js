import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Nav/NavBar";

export default function About({ projects }) {
  return (
    <>
      {projects.map((project) => (
        <div key={project.sys.id}>{project.fields.title}</div>
      ))}
    </>
  );
}

export async function getStaticProps() {
  const client = require("contentful").createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_DELIVERY,
  });

  const entries = await client.getEntries({ content_type: "project" });

  return {
    props: {
      projects: entries.items,
    },
  };
}
//

// export default function About() {
//   return (
//     <>
//       <Navbar />

//       <Footer />
//     </>
//   );
// }
