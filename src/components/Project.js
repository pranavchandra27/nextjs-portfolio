import React from "react";
import projects from "src/helpers/projectsData";

const Project = () => {
  return (
    <section id="projects" className="py-12">
      <div className="container mx-auto">
        <div className="h-1 mb-4 w-20 rounded bg-gradient-to-r from-green-400 to-blue-500" />
        <h2 className="text-xl md:text-3xl mb-2 font-bold text-gray-800 dark:text-gray-50">
          Projects
        </h2>
        <p className="text-gray-500 dark:text-gray-300 md:text-lg font-light max-w-4xl">
          Some of the recent work and personal projects.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {projects.map((project, index) => (
            <div className="flex flex-col bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              {/* Card Image */}
              <img
                src={`${project.image}.png`}
                alt={project.title}
                className="rounded-t-lg h-48 sm:h-60 w-full object-cover"
              />

              {/* Card Content */}
              <div className="flex flex-col flex-grow p-5">
                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm flex-grow">
                  {project.description}
                </p>

                {/* Technology Tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 
                      px-2 py-1 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="mt-auto flex justify-between items-center pt-4 gap-3">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline text-sm"
                    >
                      Live Demo
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline text-sm"
                    >
                      GitHub
                    </a>
                  )}
                  {project.anotherUrl && (
                    <a
                      href={project.anotherUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline text-sm"
                    >
                      View Backend
                    </a>
                  )}
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
