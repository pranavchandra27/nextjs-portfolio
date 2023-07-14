import React from "react";
import Header from "./Header";
import BackgroundAnimation from "./BackgroundAnimation";

const Hero = () => {
  return (
    <div className="block" id="hero">
      <Header />
      <div className="mt-16 flex relative w-full h-2/3">
        <div className="max-w-screen-sm">
          <h1 className="pb-4 md:pb-10 md:text-7xl text-4xl capitalize text-transparent font-semibold bg-clip-text bg-gradient-to-r from-white to-gray-400">
            Welcome to my personal portfolio
          </h1>
          <p className="tracking-tight md:font-medium text-gray-400 md:text-xl text-lg leading-8">
            Hey, 👋🏻 there I am a skilled{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 font-bold">
              Frontend Developer{" "}
            </span>{" "}
            with over four years of extensive experience. My passion for
            continual learning and personal growth drives me to constantly
            explore new horizons. I thrive on acquiring new knowledge and honing
            my skills, whether it's through professional work or personal
            projects.
          </p>
          <button className="my-12 relative text-gray-50 font-semibold bg-white text-lg md:text-2xl py-3 md:py-4 px-10 md:px-16 border-none rounded-full bg-gradient-to-r hover:bg-gradient-to-l from-green-400 to-blue-500">
            <a href="#about">Learn More</a>
          </button>
        </div>
        <div className="absolute sm:w-96 w-7/12 right-5">
          <BackgroundAnimation />
        </div>
      </div>
    </div>
  );
};

export default Hero;
