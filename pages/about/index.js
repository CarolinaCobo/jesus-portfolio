import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Nav/NavBar";

export default function About() {
  return (
    <>
      <Navbar />
      <div className="relative py-16 bg-white overflow-hidden">
        <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
          <div
            className="relative h-full text-lg max-w-prose mx-auto"
            aria-hidden="true"
          ></div>
        </div>
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="text-lg max-w-prose mx-auto">
            <h1>
              <span className="block text-base text-center text-sky-700 font-semibold tracking-wide uppercase">
                About Me
              </span>
              {/* <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Jesus Cobo
              </span> */}
            </h1>
            <p className="mt-8 text-md text-gray-800 leading-8">
              I am passionate about learning and a firm believer that everything
              can be learned if you have the right structure, appropriate tools,
              and opportunities for practice. I am always in the process of
              learning something–piano, Swedish, and coding are three things
              that I am learning right now–, and the only thing I have found
              more fulfilling than acquiring a new skill is to help someone
              learn something new.
            </p>
            <p className="mt-8 text-md text-gray-800 leading-8">
              10 years ago, my interest in learning led me to start a career in
              teaching in which I had the privilege of guiding adult and young
              learners in the journey of second language acquisition. Among many
              other things, I also designed and facilitated workshops for
              teachers at regional and national conferences, coached new staff
              members, led curriculum overhaul initiatives, and was part of a
              team in charge of testing, implementing, and designing trainings
              for a new Learning Management System (LMS).
            </p>
            <p className="mt-8 text-lg text-gray-800 leading-8">
              Following my own learning journey, I now work in the exciting
              field of Learning and Development, where I get to learn new tools
              and about new topics on a daily basis and where I get to apply my
              expertise in learning theory and practice to the creation of
              engaging and effective learning solutions.
            </p>
            <p>
              <h3 className="text-base text-center text-sky-700 font-semibold tracking-wide uppercase p-8">
                Technical Skills{" "}
              </h3>
              <ul className="list-disc grid grid-cols-2 gap-4 text-lg text-gray-800 ml-8">
                <li>Articulate Storyline 360</li>
                <li>iMovie</li>
                <li>Articulate Rise 360</li>
                <li>Learning Management Systems (LMS)</li>
                <li>Microsoft Office Suite</li>
                <li>Slack</li>
                <li>WellSaid Labs</li>
                <li>Vyond</li>
                <li>Canva</li>
                <li>Camtasia</li>
                <li>Google Suite</li>
                <li>Zoom</li>
                <li>HTML & CSS</li>
              </ul>
            </p>
            <p>
              <h3 className="text-base text-center text-sky-700 font-semibold tracking-wide uppercase p-8">
                MY COMPETENCIES
              </h3>
              <ul className="list-disc grid grid-cols-2 gap-4 text-lg text-gray-800 ml-8">
                <li> ADDIE model</li>
                <li> Assessment</li>
                <li> Backward design</li>
                <li> Coaching</li>
                <li> eLearning</li>
                <li> Facilitation</li>
                <li> Instructor-led training (ILT)</li>
                <li> Kirkpatrick’s evaluation model</li>
                <li> Leadership</li>
                <li> Mentoring</li>
                <li> Microlearning</li>
                <li> SAM model</li>
                <li> Storyboarding</li>
                <li> Virtual instructor-led training (vILT)</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
