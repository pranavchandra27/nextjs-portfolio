import Hero from "@components/Hero";
import Projects from "@components/Project";
import Technologies from "@components/Techs";
import About from "@components/About";
import Footer from "@components/Footer";
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
      <div className="mx-auto lg:max-w-7xl w-11/12">
        {/* Header and Navbar */}
        <Hero />

        {/* Projects */}
        <Projects />

        {/* My Skills and Technologies */}
        <Technologies />

        {/* About me */}
        <About />

        {/* Footer section */}
        <Footer />
      </div>
    </div>
  );
}
