import React from "react";

const About = () => {
  return (
    <section className="mt-10">
      <div className="h-1.5 mb-10 w-20 rounded bg-gradient-to-r from-green-400 to-blue-500" />
      <h2 className="md:text-6xl text-4xl md:mb-10 mb-5 font-semibold text-gray-50">
        About Me
      </h2>
      <p className="text-gray-400 md:text-xl text-lg font-medium max-w-xl">
        I have a bachelor's degree in mathematics, I like reading and watching
        movies in my free time, I love nature and I like to learn about new
        things whether it is about work I do or any other thing.
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
                Started my journey
              </h3>
              <p className="text-gray-400 font-medium">
                I started to learn web developement by taking online courses
                from udemy, youtube and skillshare like platforms while I was
                studying my bachelor's degree.
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
              <h3 className="text-gray-50 text-lg font-medium">
                Worked as a Front-end Developer
              </h3>
              <p className="text-gray-400 font-medium">
                In 2018 I started to work as a front-end developer part-time and
                also worked as a freelancer to gain some professional
                experience.
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
                Freelance work
              </h3>
              <p className="text-gray-400 font-medium">
                In 2020 when the pandemic has started I started to work fully
                remotely as a full time freelancer, In that time I worked as a
                full-stack developer working with React and Node.js.
              </p>
            </div>
          </div>
        </li>
        <li className="">
          <div className="grid grid-cols-3 gap-4">
            <div>
              <time className="text-gray-50 text-lg font-medium">2021</time>
              <div className="w-1 bg-gray-400 h-4/5 mt-2 rounded" />
            </div>
            <div className="col-span-2">
              <h3 className="text-gray-50 text-lg font-medium">
                Full time Web Developer
              </h3>
              <p className="text-gray-400 font-medium">
                Currently I am working remotely in a company as a React
                Developer and sometimes I also handle some backend side in
                Node.js to stay in sync with the develeopment team.
              </p>
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default About;
