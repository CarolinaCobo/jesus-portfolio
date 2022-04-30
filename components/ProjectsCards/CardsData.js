const projectsData = [
  {
    name: "HIPAA Privacy Rule for Healthcare Employees",
    description: "E-LEARNING | ARTICULATE RISE 360 ",
    href: "/projects/hipaa",
    imageUrl: "/hipaa.png",
    projectHref:
      "https://jesuscoboportfolio.s3.amazonaws.com/hipaa-privacy-rule-for-healthcare-employees-raw-ONmH5f7P/content/index.html#/",
  },
  {
    name: "Applicant Screening in Property Management",
    description: "E-LEARNING | ARTICULATE STORYLINE 360",
    href: "/projects/property-management",
    imageUrl: "/property-management.png",
    projectHref:
      "https://jesuscoboportfolio.s3.amazonaws.com/Property+Management+-+Applicant+Screening+-+Storyline+output/story.html",
  },
  {
    name: "Avoiding Stereotypes",
    description: "INSTRUCTOR-LED TRAINING (ILT)",
    href: "/projects/avoiding-stereotypes",
    imageUrl: "/avoiding-stereotypes.png",
    projectHref: "/projects/avoiding-stereotypes",
  },
  {
    name: "Back Safety for Movers",
    description: "BILINGUAL JOB AID",
    href: "/projects/back-safety",
    imageUrl: "/safety.png",
    projectHref:
      "https://jesuscoboportfolio.s3.amazonaws.com/Job+Aid+-+Back+Safety+for+Movers.pdf",
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
