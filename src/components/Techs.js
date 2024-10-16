import React from "react";
import { FaReact, FaServer, FaFigma } from "react-icons/fa";

const Techs = () => {
  return (
    <section className="mt-20" id="tech">
      <div className="h-1 mb-5 w-20 rounded bg-gradient-to-r from-green-400 to-blue-500" />
      <h2 className="text-xl md:text-3xl mb-2 font-bold text-gray-800 dark:text-gray-50">
        Technologies
      </h2>
      <p className="text-gray-500 dark:text-gray-400 md:text-lg font-light max-w-4xl">
        I have worked with a wide range of technologies from front-end to
        back-end.
      </p>
      <div className="mt-10 flex sm:flex-row flex-col justify-between">
        <div className="md:mb-0 mb-5">
          <span className="text-gray-800 dark:text-gray-50">
            <FaReact size={25} />
          </span>
          <h3 className="md:text-3xl text-xl font-bold text-gray-600 dark:text-gray-300 my-2">
            Frontend
          </h3>
          <p className="text-base text-gray-500 dark:text-gray-400">
            Experience with
          </p>
          {"\n"}
          <p className="text-base text-gray-500 dark:text-gray-400 md:max-w-72">
            ReactJs, Redux, NextJs, React Native, Ionic, Tailwind CSS.
          </p>
        </div>
        <div className="md:mb-0 mb-5">
          <span className="text-gray-800 dark:text-gray-50">
            <FaServer size={25} />
          </span>
          <h3 className="md:text-3xl text-xl font-bold text-gray-600 dark:text-gray-300 my-2">
            Backend
          </h3>
          <p className="text-base text-gray-500 dark:text-gray-400">
            Experience with
          </p>
          {"\n"}
          <p className="text-base text-gray-500 dark:text-gray-400 md:max-w-72">
            NodeJs, ExpressJs, MongoDB, GraphQL.
          </p>
        </div>
        <div>
          <span className="text-gray-800 dark:text-gray-50">
            <FaFigma size={25} />
          </span>
          <h3 className="md:text-3xl text-xl font-bold text-gray-600 dark:text-gray-300 my-2">
            UX/UI
          </h3>
          <p className="text-base text-gray-500 dark:text-gray-400">
            Experience with
          </p>
          {"\n"}
          <p className="text-base text-gray-500 dark:text-gray-400 md:max-w-72">
            tools like Figma, Adobe photoshop.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Techs;
