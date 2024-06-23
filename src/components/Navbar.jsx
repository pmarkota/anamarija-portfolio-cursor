import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

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
    <nav className="bg-white shadow-lg">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <RouterLink
                to="/"
                className="font-bold transition-all duration-300 cursor-pointer text-md text-slate-800 hover:text-violet-500"
              >
                ANAMARIJA J.
              </RouterLink>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="flex items-baseline ml-10 space-x-4">
              {links.map((link) => (
                <RouterLink
                  key={link.text}
                  to={link.url}
                  onClick={() => handleLinkClick(link.url)}
                  className="px-3 py-2 text-[13px] font-bold rounded-md text-slate-800 hover:text-violet-500 transition-all duration-300"
                >
                  {link.text}
                </RouterLink>
              ))}
            </div>
          </div>
          <div className="flex -mr-2 md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 text-gray-400 bg-gray-900 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              ) : (
                <svg
                  className="block w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`${isOpen ? "block" : "hidden"} md:hidden`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {links.map((link) => (
            <RouterLink
              key={link.text}
              to={link.url}
              onClick={() => handleLinkClick(link.url)}
              className="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:text-white"
            >
              {link.text}
            </RouterLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
