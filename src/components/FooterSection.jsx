import React from "react";

export const FooterSection = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-gray-900 dark:bg-dark-primary">
      <div className="container px-4 mx-auto max-w-7xl">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Anamarija J.</h3>
            <p className="text-gray-400">
              UI/UX Designer crafting beautiful and functional digital
              experiences.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "About", "Projects", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-400 transition-colors duration-200 hover:text-violet-400"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact</h3>
            <div className="space-y-2">
              <p className="text-gray-400">Email: contact@example.com</p>
              <p className="text-gray-400">Location: Zagreb, Croatia</p>
            </div>
          </div>
        </div>

        <hr className="my-8 border-gray-800" />

        <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
          <p className="text-sm text-gray-400">
            © {currentYear} Anamarija J. All rights reserved.
          </p>
          <div className="flex space-x-6">
            {["Twitter", "LinkedIn", "GitHub"].map((platform) => (
              <a
                key={platform}
                href="#"
                className="text-gray-400 transition-colors duration-200 hover:text-violet-400"
              >
                {platform}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
