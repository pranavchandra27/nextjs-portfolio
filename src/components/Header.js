import React from "react";
import { FaLinkedinIn, FaGithub, FaFilePdf } from "react-icons/fa";

const Header = () => {
  return (
    <header className="h-16">
      <div className="justify-between flex h-full items-center">
        <h2 className="text-xl text-gray-100">
          <span className="text-2xl font-bold">P</span>ranav
          <span className="text-2xl font-bold">C</span>handra
        </h2>

        <div className="flex">
          <span className="mr-5" title="LinkedIn Profile">
            <a
              href="https://www.linkedin.com/in/pranav-chandra-441294135/"
              target="_blank"
            >
              <FaLinkedinIn className="transition-colors duration-300 text-2xl text-gray-300 hover:text-green-400" />
            </a>
          </span>
          <span className="mr-5" title="Github Profile">
            <a href="https://github.com/pranavchandra27" target="_blank">
              <FaGithub
                className="transition-colors duration-300 text-2xl text-gray-300 hover:text-green-400"
                size={25}
              />
            </a>
          </span>
          <span title="Resume">
            <a
              href="https://drive.google.com/file/d/1ut0ZSuak1VF8yjHn39RldbgEteFfG1xC/view?usp=sharing"
              target="_blank"
            >
              <FaFilePdf
                className="transition-colors duration-300 text-2xl text-gray-300 hover:text-green-400"
                size={22}
              />
            </a>
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
