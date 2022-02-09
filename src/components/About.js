import React from "react";

const About = () => {
  return (
    <section className="mt-10" id="about">
      <div className="h-1.5 mb-10 w-20 rounded bg-gradient-to-r from-green-400 to-blue-500" />
      <h2 className="md:text-6xl text-3xl md:mb-10 mb-4 font-semibold text-gray-50">
        About Me
      </h2>
      <p className="text-gray-400 md:text-xl text-lg font-medium max-w-xl">
        I am a self taught deverloper which explains I am very passionate
        learner, seeking for useful things, I have 3 years of experience in web
        development, and I have a bachelor's degree in mathematics, I like
        reading about technologies, cars, and anything that interest me and
        watching movies, I love nature and I like to cook.
      </p>
      <ul className="bg-gray-700 p-5 max-w-2xl mx-auto md:mt-16 mt-8 rounded">
        <li className="mb-5">
          <div className="grid grid-cols-3 gap-4">
            <div>
              <time className="text-gray-50 text-lg font-medium">2017</time>
              <div className="w-1 bg-gray-400 h-4/5 mt-2 rounded" />
            </div>
            <div className="col-span-2">
              <h3 className="text-gray-50 text-lg font-medium">
                Beginning of my journey
              </h3>
              <p className="text-gray-400 font-medium">
                I started to learn web developement back in 2017 by taking
                online courses from udemy, youtube and skillshare like platforms
                while I was pursuing my bachelor's.
              </p>
            </div>
          </div>
        </li>
        <li className="mb-5">
          <div className="grid grid-cols-3 gap-4">
            <div>
              <time className="text-gray-50 text-lg font-medium">
                2018 - 2019
              </time>
              <div className="w-1 bg-gray-400 h-4/5 mt-2 rounded" />
            </div>
            <div className="col-span-2">
              <h3 className="text-gray-50 text-lg font-medium">My first gig</h3>
              <p className="text-gray-400 font-medium">
                In 2018 I started to work part-time as a front-end developer
                with basic knowledge of{" "}
                <code className="bg-gray-900 px-1 mx-1">
                  HTML, CSS and JavaScript
                </code>
                and aside that I was learning{" "}
                <code className="bg-gray-900 px-1 mx-1">React.js</code>
              </p>
            </div>
          </div>
        </li>
        <li className="mb-5">
          <div className="grid grid-cols-3 gap-4">
            <div>
              <time className="text-gray-50 text-lg font-medium">2020</time>
              <div className="w-1 bg-gray-400 h-4/5 mt-2 rounded" />
            </div>
            <div className="col-span-2">
              <h3 className="text-gray-50 text-lg font-medium">
                Some freelance work
              </h3>
              <p className="text-gray-400 font-medium">
                After a year of working with a company part-time in 2020 I
                started to work as a freelancer and I was gaining more real life
                experiences working with clients directly, and aside that I was
                learning more about backend, meanwhile I learnt more
                technologies like{" "}
                <code className="bg-gray-900 px-1">Next.js, GraphQL</code> and
                more
              </p>
            </div>
          </div>
        </li>
        <li className="">
          <div className="grid grid-cols-3 gap-4">
            <div>
              <time className="text-gray-50 text-lg font-medium">
                2021 - 2022
              </time>
              <div className="w-1 bg-gray-400 h-4/5 mt-2 rounded" />
            </div>
            <div className="col-span-2">
              <h3 className="text-gray-50 text-lg font-medium">
                Full time work
              </h3>
              <p className="text-gray-400 font-medium">
                After completing my bachelor's I started to work full-time as a
                Full Stack Developer and delivering some high quality work,
                aside that I build personal projects using latest technologies.
                for example you can check my{" "}
                <a href="#projects" className="underline cursor-pointer">
                  Projects
                </a>{" "}
                section.
              </p>
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default About;
