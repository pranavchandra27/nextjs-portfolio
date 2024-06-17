import React from "react";
import projects from "src/helpers/projectsData";

const Project = () => {
  return (
    <section id="projects" className="py-12">
      <div className="container mx-auto">
        <div className="h-1 mb-2 w-20 rounded bg-gradient-to-r from-green-400 to-blue-500" />
        <h2 className="text-xl md:text-3xl mb-2 font-bold text-gray-800 dark:text-gray-50">
          Projects
        </h2>
        <p className="text-gray-500 dark:text-gray-300 md:text-lg font-light max-w-4xl">
          Some of the recent work and personal projects.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 border border-gray-200 rounded-lg shadow hover:shadow-lg p-6 transition-shadow dark:border-gray-700"
            >
              <img
                src={`${project.image}.png`}
                alt={project.title}
                className="rounded-md mb-4"
              />

              <div className="flex flex-col">
                <h3 className="md:text-2xl text-lg font-semibold">
                  {project.title}
                </h3>
                <p className="mt-2 md:h-40 xl:h-32 text-gray-600 dark:text-gray-400 font-light">
                  {project.description}
                </p>
                <p className="mt-4 text-gray-600 dark:text-gray-400">
                  <strong className="dark:text-white">Technologies:</strong>{" "}
                  {project.technologies.join(", ")}
                </p>
                <div className="mt-4">
                  <a
                    href={project.link}
                    target="_blank"
                    className="text-blue-500 cursor-pointer hover:underline mr-4"
                  >
                    Live Demo
                  </a>
                  {project.hasMoreUrl && (
                    <a
                      href={project.anotherUrl}
                      target="_blank"
                      className="text-blue-500 cursor-pointer hover:underline mr-4"
                    >
                      View Backend
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    className="text-blue-500 cursor-pointer hover:underline"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
