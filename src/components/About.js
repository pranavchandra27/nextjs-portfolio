import React from "react";
import timelineData from "src/helpers/timelineData";

const About = () => {
  return (
    <section className="mt-10" id="about">
      <div className="h-1.5 mb-10 w-20 rounded bg-gradient-to-r from-green-400 to-blue-500" />
      <h2 className="md:text-6xl text-3xl md:mb-10 mb-2 font-semibold text-gray-50">
        About Me
      </h2>
      <p className="text-gray-400 md:text-xl text-base md:font-medium max-w-xl">
        I am a self taught deverloper which explains I am very passionate
        learner, seeking for useful things, I have 3 years of experience in web
        development, and I have a bachelor's degree in mathematics, I like
        reading about technologies, cars, and anything that interest me and
        watching movies, I love nature and I like to cook.
      </p>
      <ul className="bg-gray-700 p-5 max-w-2xl mx-auto md:mt-16 mt-8 rounded">
        {timelineData.map((timeline) => (
          <li className="mb-5 last:mb-5">
            <div className="grid grid-cols-3 gap-4">
              <div>
                <time className="text-gray-50 text-base md:text-lg font-medium">
                  {timeline.time}
                </time>
                <div className="w-1 bg-gray-400 h-4/5 mt-2 rounded" />
              </div>
              <div className="col-span-2">
                <h3 className="text-gray-50 text-base md:text-lg font-medium">
                  {timeline.subtitle}
                </h3>
                <p className="text-gray-400 text-sm md:text-base font-medium">
                  {timeline.paragraph}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default About;
