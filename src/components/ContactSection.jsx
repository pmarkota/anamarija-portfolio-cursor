import React, { useState } from "react";
import { motion } from "framer-motion";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form data:", formData);
      setFormData({ name: "", email: "", message: "" });
      setSubmitted(true);
    }
  };

  const validateForm = () => {
    let valid = true;
    const errors = {
      name: "",
      email: "",
      message: "",
    };

    if (formData.name.trim() === "") {
      errors.name = "Name is required";
      valid = false;
    }

    if (!formData.email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
      errors.email = "Invalid email address";
      valid = false;
    }

    if (formData.message.trim() === "") {
      errors.message = "Message is required";
      valid = false;
    }

    setFormErrors(errors);
    return valid;
  };

  return (
    <section className="relative py-20 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-dark-secondary dark:to-dark-primary">
      <div className="container px-4 mx-auto max-w-7xl">
        <div className="flex flex-col items-center mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-dark-text md:text-5xl">
            Let's Connect
          </h2>
          <div className="w-16 h-1 mb-6 bg-violet-500 rounded-full"></div>
          <p className="max-w-2xl text-lg text-gray-600 dark:text-gray-300">
            Have a project in mind? Let's work together to create something
            amazing.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Contact Information */}
          <div className="p-8 bg-white rounded-2xl dark:bg-dark-primary shadow-lg">
            <h3 className="mb-6 text-2xl font-semibold text-gray-900 dark:text-dark-text">
              Contact Information
            </h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-violet-100 dark:bg-violet-900 rounded-lg">
                  <svg
                    className="w-6 h-6 text-violet-600 dark:text-violet-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-dark-text">
                    Email
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    contact@example.com
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-violet-100 dark:bg-violet-900 rounded-lg">
                  <svg
                    className="w-6 h-6 text-violet-600 dark:text-violet-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-dark-text">
                    Location
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    Zagreb, Croatia
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-8 bg-white rounded-2xl dark:bg-dark-primary shadow-lg">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full px-4 py-3 text-gray-900 placeholder-gray-400 bg-gray-50 dark:bg-dark-secondary dark:text-dark-text dark:placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
                  />
                  {formErrors.name && (
                    <p className="mt-1 text-sm text-red-500">
                      {formErrors.name}
                    </p>
                  )}
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className="w-full px-4 py-3 text-gray-900 placeholder-gray-400 bg-gray-50 dark:bg-dark-secondary dark:text-dark-text dark:placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
                  />
                  {formErrors.email && (
                    <p className="mt-1 text-sm text-red-500">
                      {formErrors.email}
                    </p>
                  )}
                </div>
                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    rows="4"
                    className="w-full px-4 py-3 text-gray-900 placeholder-gray-400 bg-gray-50 dark:bg-dark-secondary dark:text-dark-text dark:placeholder-gray-500 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-violet-500"
                  ></textarea>
                  {formErrors.message && (
                    <p className="mt-1 text-sm text-red-500">
                      {formErrors.message}
                    </p>
                  )}
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full px-6 py-3 text-sm font-medium text-white transition-colors duration-200 bg-violet-600 rounded-lg hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2"
                >
                  Send Message
                </motion.button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-6 text-center bg-green-50 dark:bg-green-900/20 rounded-lg"
              >
                <svg
                  className="w-12 h-12 mx-auto mb-4 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-dark-text">
                  Thank you!
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Your message has been sent successfully. I'll get back to you
                  soon!
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
