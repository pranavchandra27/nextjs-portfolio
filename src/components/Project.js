import React from "react";
import projects from "src/helpers/projectsData";
import {BiGitRepoForked, BiLayout} from 'react-icons/bi'

const Project = () => {
  return (
    <section className="mt-10" id="projects">
      <div className="h-1.5 mb-10 w-20 rounded bg-gradient-to-r from-green-400 to-blue-500" />
      <h2 className="md:text-6xl text-3xl md:mb-10 mb-2 font-semibold text-gray-50">
        Projects
      </h2>
      <p className="text-gray-400 md:text-xl text-base md:font-medium">
        Here are some of the projects that I have build on using wide range of
        latest technologies.
      </p>
      <div className="flex mt-16 justify-center">
        <div className="md:grid md:grid-cols-2 md:gap-5 max-w-3xl">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="mb-5 md:mb-0 shadow-lg overflow-hidden bg-gray-800 rounded text-center"
            >
              <img src={`${project.image}.png`} className="h-2/5 w-full object-cover" alt="Project 1" />
              <div className="px-4 h-3/5">
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
                    target='_blank'
                    href={project.code}
                    className="rounded-lg text-white flex items-center py-1.5 px-3 font-semibold bg-blue-500 hover:bg-opacity-90"
                  >
                    <span className="mr-1 inline-flex"><BiGitRepoForked fontSize={18} /></span> Repo
                  </a>
                  {project.hasMoreUrl && (
                    <a
                      target='_blank'
                      href={project.anotherUrl}
                      className="rounded-lg text-white py-1.5 px-4 font-semibold bg-blue-500 hover:bg-opacity-90"
                    >
                      CMS
                    </a>
                  )}
                  <a
                    target='_blank'
                    href={project.view}
                    className="rounded-lg bg-blue-500 text-white flex items-center py-1.5 px-3 font-semibold hover:bg-opacity-90"
                  >
                    <span className="mr-1 inline-flex"><BiLayout fontSize={20} /></span> View
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
