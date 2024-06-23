import React from "react";

export const FooterSection = () => {
  return (
    <footer className="text-gray-300 bg-gray-800">
      <div className="container px-4 py-8 mx-auto">
        <div className="flex flex-wrap justify-between">
          <div className="w-full mb-8 md:w-1/3">
            <h3 className="mb-4 text-xl font-bold">About Me</h3>
            <p className="text-sm">
              Hello! I'm Anamarija, a passionate UI/UX designer who loves
              crafting beautiful and functional user experiences.
            </p>
          </div>
          <div className="w-full mb-8 md:w-1/3">
            <h3 className="mb-4 text-xl font-bold">Contact Me</h3>
            <p className="mb-2 text-sm">Email: contact@example.com</p>
            <p className="text-sm">Phone: +123 456 789</p>
          </div>
        </div>
        <hr className="my-8 border-gray-800" />
        <div className="text-sm text-center">
          &copy; {new Date().getFullYear()} Anamarija J. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
