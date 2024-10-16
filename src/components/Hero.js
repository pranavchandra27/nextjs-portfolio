import React from "react";
import BackgroundAnimation from "./BackgroundAnimation";

const Hero = () => {
  return (
    <div className="block" id="hero">
      <div className="flex relative w-full h-2/3">
        <div className="max-w-screen-sm">
          <h1 className="mb-4 md:mb-8 max-w-2xl text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-gray-600 dark:from-gray-300 to-gray-800 dark:to-gray-100">
            Welcome to my personal portfolio
          </h1>
          <p className="leading-relaxed font-light tracking-tight text-gray-500 lg:mb-8 text-lg dark:text-gray-400">
            Hey there! I am a skilled{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 font-bold">
              Frontend Developer{" "}
            </span>{" "}
            with over five years of extensive experience. My passion for
            continuous learning and personal growth drives me to explore new
            horizons consistently. I thrive on acquiring new knowledge and
            refining my skills, whether through professional endeavors or
            personal projects. My commitment to excellence and innovation
            ensures that I stay at the forefront of industry developments,
            delivering exceptional results in every project I undertake.
          </p>
          <button className="my-12 w-full md:w-auto relative text-gray-50 font-semibold bg-white text-lg md:text-2xl py-3 md:py-4 px-10 md:px-16 border-none rounded-full bg-gradient-to-r hover:bg-gradient-to-l from-green-400 to-blue-500">
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
