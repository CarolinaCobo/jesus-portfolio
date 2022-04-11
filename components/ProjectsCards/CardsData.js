const projectsData = [
  {
    name: "HIPAA Privacy Rule",
    description: "Some stuff about HIPAA",
    href: "/projects/hipaa",
    imageUrl: "/hipaa.png",
  },
  {
    name: "Applicant Screening in Property Management",
    description: "Property management stuff",
    href: "/projects/property-management",
    imageUrl: "/property-management.png",
  },
];

export default projectsData;

export function CardsData({ cardData }) {
  return (
    <>
      {cardData.map((cardData) => (
        <div key={cardData.sys.id}>{cardData.fields.title}</div>
      ))}
    </>
  );
}

export async function getStaticProps() {
  const client = require("contentful").createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_DELIVERY,
  });

  const entries = await client.getEntries({ content_type: "projects" });

  console.log(entries);

  return {
    props: {
      projects: entries.items,
    },
  };
}
