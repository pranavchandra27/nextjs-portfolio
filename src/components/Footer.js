import React from "react";
import { FaLinkedinIn, FaGithub, FaFilePdf } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-10">
      <div className="h-1.5 mb-10 w-20 rounded bg-gradient-to-r from-green-400 to-blue-500" />
      <div className="h-px bg-gray-700 my-8" />
      <div className="flex sm:flex-row flex-col">
        <div className="sm:flex-1">
          <p className="text-gray-600 font-medium sm:mb-4 mb-2">Phone</p>
          <a href="tel:+917785069323" className="text-gray-400 font-medium">
            +91 77850-69323
          </a>
        </div>
        <div className="sm:flex-auto sm:m-0 mt-5">
          <p className="text-gray-600 font-medium sm:mb-4 mb-2">Email</p>
          <a
            href="mailto:pranavchandra27@gmail.com"
            className="text-gray-400 font-medium"
          >
            pranavchandra27@gmail.com
          </a>
        </div>
      </div>
      <div className="py-10 flex sm:flex-row flex-col justify-between items-center">
        <p className="font-medium text-gray-500">
          This website is built in ❤ Next.js with Tailwind CSS
        </p>
        <div className="flex sm:m-0 mt-5">
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
            <a href="https://drive.google.com/file/d/1-fJGF9DoNFZilYO9Jk3WQzHU9WxKGY3m/view?usp=sharing" target="_blank">
              <FaFilePdf
                className="transition-colors duration-300 text-2xl text-gray-300 hover:text-green-400"
                size={22}
              />
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
