import Hero from "@components/Hero";
import Projects from "@components/Project";
import Technologies from "@components/Techs";
import About from "@components/About";
import Footer from "@components/Footer";
import Header from "src/components/Header";
import Head from "next/head";

export default function Home() {
  return (
    <div className="h-full w-full">
      <Head>
        <title>Pranav Chandra - Frontend Developer</title>
        <meta
          name="description"
          content="Portfolio of Pranav Chandra showcasing projects and skills."
        />
      </Head>

      <Header />

      <div className="mx-auto lg:max-w-7xl w-11/12 my-10">
        {/* Header */}
        <Hero />

        {/* Projects */}
        <Projects />

        {/* My Skills and Technologies */}
        <Technologies />

        {/* About me */}
        <About />
      </div>
      {/* Footer section */}
      <Footer />
    </div>
  );
}
