const projectsData = [
  {
    name: "HIPAA Privacy Rule for Healthcare Employees",
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
  {
    name: "Avoiding Stereotypes",
    description: "Property management stuff",
    href: "/projects/avoiding-stereotypes",
    imageUrl: "/avoiding-stereotypes.png",
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
