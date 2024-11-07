import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isDarkMode, setIsDarkMode } = useTheme();

  const links = [
    { text: "HOME", url: "/" },
    { text: "ABOUT", url: "/#about" },
    { text: "PROJECTS", url: "/projects" },
    { text: "CONTACT", url: "/#contact" },
  ];

  const handleLinkClick = (url) => {
    setIsOpen(false); // Close mobile menu on link click
    if (url.startsWith("/#")) {
      const id = url.substring(2);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg dark:bg-dark-secondary transition-colors duration-200">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <RouterLink
                to="/"
                className="font-bold transition-all duration-300 cursor-pointer text-md text-gray-900 dark:text-dark-text hover:text-violet-500"
              >
                ANAMARIJA J.
              </RouterLink>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center ml-10 space-x-4">
              {links.map((link) => (
                <RouterLink
                  key={link.text}
                  to={link.url}
                  onClick={() => handleLinkClick(link.url)}
                  className="px-3 py-2 text-[13px] font-bold rounded-md text-gray-900 dark:text-dark-text hover:text-violet-500 transition-all duration-300"
                >
                  {link.text}
                </RouterLink>
              ))}
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-dark-primary"
                aria-label="Toggle Dark Mode"
              >
                {isDarkMode ? (
                  <svg
                    className="w-5 h-5 text-yellow-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-5 h-5 text-dark-text"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden dark:bg-dark-secondary`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {links.map((link) => (
            <RouterLink
              key={link.text}
              to={link.url}
              onClick={() => handleLinkClick(link.url)}
              className="block px-3 py-2 text-base font-medium text-gray-900 dark:text-dark-text hover:text-violet-500 rounded-md"
            >
              {link.text}
            </RouterLink>
          ))}
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="flex items-center w-full px-3 py-2 text-base font-medium text-gray-900 dark:text-dark-text hover:text-violet-500 rounded-md"
          >
            {isDarkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
