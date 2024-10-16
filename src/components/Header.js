"use client";

import { useState, useEffect } from "react";
import { FaLinkedinIn, FaGithub, FaFilePdf } from "react-icons/fa";

const Header = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <header className="border-b dark:border-gray-700 shadow-sm">
      <nav className="h-16 mx-auto lg:max-w-7xl w-11/12">
        <div className="justify-between flex h-full items-center">
          <h2 className="text-lg md:text-2xl font-bold text-gray-600 dark:text-gray-300">
            Pranav Chandra
          </h2>

          <div className="flex gap-4">
            <span title="LinkedIn Profile">
              <a
                href="https://www.linkedin.com/in/pranav-chandra-441294135/"
                target="_blank"
              >
                <FaLinkedinIn className="transition-colors duration-300 text-2xl text-gray-400 dark:text-gray-300 hover:text-green-400" />
              </a>
            </span>
            <span title="Github Profile">
              <a href="https://github.com/pranavchandra27" target="_blank">
                <FaGithub
                  className="transition-colors duration-300 text-2xl text-gray-400 dark:text-gray-300 hover:text-green-400"
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
                  className="transition-colors duration-300 text-2xl text-gray-400 dark:text-gray-300 hover:text-green-400"
                  size={22}
                />
              </a>
            </span>

            <div
              onClick={toggleTheme}
              className="relative inline-block w-12 h-6 rounded-full transition-colors duration-300 bg-gray-300 dark:bg-gray-600 cursor-pointer"
            >
              <div
                className={`absolute left-0 top-0 w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                  theme === "dark" ? "translate-x-6" : ""
                }`}
              >
                {theme === "light" ? "🌞" : "🌜"}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
