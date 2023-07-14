import React from "react";
import { FaReact, FaServer, FaFigma } from "react-icons/fa";

const Techs = () => {
  return (
    <section className="mt-20" id="tech">
      <div className="h-1.5 mb-10 w-20 rounded bg-gradient-to-r from-green-400 to-blue-500" />
      <h2 className="md:text-6xl text-3xl md:mb-10 mb-2 font-semibold text-gray-50">
        Technologies
      </h2>
      <p className="text-gray-400 md:text-xl text-base md:font-medium max-w-4xl">
        I have worked with a wide range of technologies from front-end to
        back-end.
      </p>
      <div className="mt-16 flex sm:flex-row flex-col justify-between">
        <div className="md:mb-0 mb-5">
          <span className="text-gray-50">
            <FaReact size={25} />
          </span>
          <h3 className="md:text-3xl text-2xl font-bold text-gray-50 my-2">
            Frontend
          </h3>
          <p className="md:text-lg text-base font-medium text-gray-400">
            Experience with
          </p>
          {"\n"}
          <p className="md:text-lg text-base font-medium text-gray-400">
            React.js, Next.js, React Native
          </p>
        </div>
        <div className="md:mb-0 mb-5">
          <span className="text-gray-50">
            <FaServer size={25} />
          </span>
          <h3 className="md:text-3xl text-2xl font-bold text-gray-50 my-2">
            Backend
          </h3>
          <p className="md:text-lg text-base font-medium text-gray-400">
            Experience with
          </p>
          {"\n"}
          <p className="md:text-lg text-base font-medium text-gray-400">
            Node.js, MongoDB, GraphQL
          </p>
        </div>
        <div>
          <span className="text-gray-50">
            <FaFigma size={25} />
          </span>
          <h3 className="md:text-3xl text-2xl font-bold text-gray-50 my-2">
            UX/UI
          </h3>
          <p className="md:text-lg text-base font-medium text-gray-400">
            Experience with
          </p>
          {"\n"}
          <p className="md:text-lg text-base font-medium text-gray-400">
            tools like Figma
          </p>
        </div>
      </div>
    </section>
  );
};

export default Techs;
