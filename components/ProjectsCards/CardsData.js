const projectsData = [
  {
    name: "Wedding",
    slogan: "The wedding experience, from the invitations to the 'I do'.",
    href: "/case-studies/wedding-experience",
    imageUrl: "/wedding.png",
    who: "a recently engaged couple who is getting married this summer.",
    what: "research (discover conventions), interviews, empathy map, wireframes, UI design, website development + Iterations based on new needs and goals as the wedding date gets closer.",
    outcome:
      "Deliverables - wedding invitations, wedding website, forms (guest food restrictions and allergies, transport, playlist, etc).",
    status: true,
  },
  {
    name: "Tabnear MVP",
    slogan:
      "From research to launching Tabnear's MVP on a kickstarter campaign",
    href: "/case-studies/tabnear-mvp",
    imageUrl: "/value-proposition-tabnear.png",
    who: "Tabnear, the social network for board game lovers",
    what: "Online surveys, Personas, Information arquitecture, User flows, User journey maps, Usability testing (reomte and in person), Wireframimg, Prototyping, UI Design kit.",
    outcome:
      "Developed the Minimum Viable Product and launched a close loop of Tabnear app prior the Kickstarter campaign.",
    status: true,
  },
  {
    name: "Fly UX",
    slogan:
      "A smooth booking experience for a new airline trying to break into the market.",
    href: "/case-studies/fly-ux",
    imageUrl: "/fly-ux.png",
    who: "FlyUX (fictitious company) - Project part of the UX Design Institute Diploma",
    what: "Online surveys, Usability testing, User flows, User journey maps, Usability testing, Wireframimg, Prototyping, Handover documentation.",
    outcome:
      "Reducing the time to complete the booking by displaing the fare benefits clearly, minimize the information to enter and offering to keep the same choices for the return flight.",
    status: true,
  },

  {
    name: "Glassdoor - WFH",
    slogan: "",
    href: "/case-studies/job-hunting-case-study",
    imageUrl: "/benchmark.jpeg",
    who: "Glassdoor.com - Project part of the UX-Tree Mentorship Program",
    what: "",
    outcome: "",
    status: false,
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

// export async function getStaticProps() {
//   const client = require("contentful").createClient({
//     space: process.env.CONTENTFUL_SPACE_ID,
//     accessToken: process.env.CONTENTFUL_DELIVERY,
//   });

//   const entries = await client.getEntries({ content_type: "caseStudies" });

//   console.log(entries);

//   return {
//     props: {
//       caseStudies: entries.items,
//     },
//   };
// }
