import Head from "next/head";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Nav/NavBar";
import Card from "../components/ProjectsCards/Cards";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Jesus Cobo Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        className="relative bg-contain bg-no-repeat"
        style={{
          backgroundImage: "url(./banner.jpeg)",
        }}
      >
        <Navbar />
        <div className="md:container md:mx-auto">
          <Hero />
        </div>
        <Card />
        <Footer />
      </main>
    </div>
  );
}
