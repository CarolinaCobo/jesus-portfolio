import Head from "next/head";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Nav/NavBar";
import Card from "../components/ProjectsCards/Cards";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Jesús Cobo Portfolio</title>

        <meta name="description" content="Jesús Cobo - Portfolio" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          key="og:title"
          property="og:title"
          content="Jesús Cobo - Instructional Designer | eLearning Developer"
        />
        <meta key="og:image" property="og:image" content="/og/thumbnail.png" />
        <meta
          key="og:description"
          property="og:description"
          content="Instructional Designer | eLearning Developer"
        />
        <meta
          key="description"
          property="description"
          content="Instructional Designer | eLearning Developer"
        />
        <meta property="og:url" content="https://www.jesushcobo.com/" />
      </Head>
      <main
        className="relative bg-contain bg-no-repeat"
        style={{
          backgroundImage: "url(./banner.jpeg)",
        }}
      >
        <div className="bg-gray-900  bg-opacity-25">
          <Navbar />
        </div>
        <div className="md:container md:mx-auto ">
          <Hero />
        </div>
        <Card />
        <Footer />
      </main>
    </div>
  );
}
