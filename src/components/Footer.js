import React from "react";
import { FaLinkedinIn, FaGithub, FaFilePdf } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t dark:border-gray-700 shadow-sm">
      <div className="mx-auto lg:max-w-7xl w-11/12 mt-10">
        <div className="flex sm:flex-row flex-col">
          <div className="sm:flex-auto sm:m-0 mt-5">
            <p className="text-gray-600 dark:text-gray-200 font-bold mb-2">
              Email:
            </p>
            <a
              href="mailto:pranavchandra27@gmail.com"
              className="text-gray-400 font-medium"
            >
              pranavchandra27@gmail.com
            </a>
          </div>
        </div>
        <div className="py-10 flex sm:flex-row flex-col justify-between items-center">
          <p className="text-gray-500">
            This website is built in ❤ Next.js and Tailwind CSS.
          </p>
          <div className="flex sm:m-0 mt-5">
            <span className="mr-5" title="LinkedIn Profile">
              <a
                href="https://www.linkedin.com/in/pranav-chandra-441294135/"
                target="_blank"
              >
                <FaLinkedinIn className="transition-colors duration-300 text-2xl text-gray-400 hover:text-green-400" />
              </a>
            </span>
            <span className="mr-5" title="Github Profile">
              <a href="https://github.com/pranavchandra27" target="_blank">
                <FaGithub
                  className="transition-colors duration-300 text-2xl text-gray-400 hover:text-green-400"
                  size={25}
                />
              </a>
            </span>
            <span title="Resume">
              <a
                href="https://drive.google.com/file/d/1ADtbVEFQSZOzG_r-GnIM--yc3VC5igIl/view?usp=drive_link"
                target="_blank"
              >
                <FaFilePdf
                  className="transition-colors duration-300 text-2xl text-gray-400 hover:text-green-400"
                  size={22}
                />
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
