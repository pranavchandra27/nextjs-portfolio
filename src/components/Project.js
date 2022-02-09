import React from "react";
import projects from "src/helpers/projectsData";

const Project = () => {
  return (
    <section className="mt-10" id="projects">
      <div className="h-1.5 mb-10 w-20 rounded bg-gradient-to-r from-green-400 to-blue-500" />
      <h2 className="md:text-6xl text-3xl md:mb-10 mb-4 font-semibold text-gray-50">
        Projects
      </h2>
      <p className="text-gray-400 md:text-xl text-lg font-medium">
        Here are some of the projects that I have build on using wide range of
        latest technologies.
      </p>
      <div className="flex mt-16 justify-center">
        <div className="grid gap-10 grid-cols-1 md:grid-cols-2 max-w-3xl">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="shadow-lg bg-gray-800 rounded overflow-hidden text-center w-full"
            >
              <img src={`${project.image}.png`} alt="Project 1" />
              <div className="px-4">
                <p className="mt-6 text-xl text-gray-200">{project.name}</p>
                <p className="mt-6 text-md text-gray-200">
                  {project.description}
                </p>
                <div className="flex flex-wrap my-5 -ml-2">
                  {project.technologies.map((tech) => (
                    <div
                      key={tech}
                      className="ml-2 mb-2 bg-white cursor-default hover:bg-blue-500 text-gray-700  hover:text-white rounded-md p-2"
                    >
                      <p className="text-xs font-medium">{tech}</p>
                    </div>
                  ))}
                </div>
                <div className="flex my-5 justify-between">
                  <a
                    href={project.code}
                    className="rounded-lg text-white py-1.5 px-4 font-semibold bg-blue-500"
                  >
                    Repo
                  </a>
                  {project.hasMoreUrl && (
                    <a
                      href={project.anotherUrl}
                      className="rounded-lg text-white py-1.5 px-4 font-semibold bg-blue-500"
                    >
                      Headless CMS
                    </a>
                  )}
                  <a
                    href={project.view}
                    className="rounded-lg bg-blue-500 text-white py-1.5 px-4 font-semibold"
                  >
                    View
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
