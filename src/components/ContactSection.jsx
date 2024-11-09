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
    <section className="py-12 sm:py-20 bg-gray-50 dark:bg-dark-secondary">
      <div className="container px-4 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mb-8 sm:mb-12 glow-wrapper"
        >
          <div className="absolute inset-0 flex items-center justify-center opacity-10">
            <div className="w-96 h-96 bg-gradient-to-r from-violet-500 via-fuchsia-500 to-violet-500 rounded-full blur-3xl" />
          </div>

          <div className="relative flex flex-col items-center glow-container">
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-center w-20 h-20 mb-6 rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-500 shadow-lg shadow-violet-500/30"
            >
              <svg
                className="w-10 h-10 text-white"
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
            </motion.div>
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mb-4 text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-fuchsia-500 to-violet-600 md:text-5xl"
            >
              Let's Connect
            </motion.h2>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="max-w-2xl text-center text-gray-600 dark:text-gray-300"
            >
              Have a project in mind? Let's work together to create something
              amazing.
            </motion.p>
          </div>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative group order-2 md:order-1"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 to-fuchsia-600/20 rounded-2xl blur-xl transform group-hover:scale-105 transition-transform duration-300" />

            <div className="relative p-4 sm:p-8 bg-white dark:bg-dark-primary rounded-2xl border border-violet-100 dark:border-violet-900 hover:shadow-xl transition-all duration-300">
              <h3 className="mb-8 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-600">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r from-violet-500 to-fuchsia-500">
                    <svg
                      className="w-6 h-6 text-white"
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
                    <p className="text-lg font-semibold text-gray-900 dark:text-dark-text">
                      Email
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      contact@example.com
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r from-violet-500 to-fuchsia-500">
                    <svg
                      className="w-6 h-6 text-white"
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
                    <p className="text-lg font-semibold text-gray-900 dark:text-dark-text">
                      Location
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      Zagreb, Croatia
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative group order-1 md:order-2"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 to-fuchsia-600/20 rounded-2xl blur-xl transform group-hover:scale-105 transition-transform duration-300" />

            <div className="relative p-4 sm:p-8 bg-white dark:bg-dark-primary rounded-2xl border border-violet-100 dark:border-violet-900 hover:shadow-xl transition-all duration-300">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className="w-full px-4 py-3 text-gray-900 transition-all duration-200 bg-gray-50 dark:bg-dark-secondary dark:text-dark-text rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500 focus:bg-white dark:focus:bg-dark-primary"
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
                      className="w-full px-4 py-3 text-gray-900 transition-all duration-200 bg-gray-50 dark:bg-dark-secondary dark:text-dark-text rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500 focus:bg-white dark:focus:bg-dark-primary"
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
                      className="w-full px-4 py-3 text-gray-900 transition-all duration-200 bg-gray-50 dark:bg-dark-secondary dark:text-dark-text rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-violet-500 focus:bg-white dark:focus:bg-dark-primary"
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
                    className="w-full px-6 py-3 text-lg font-medium text-white transition-all duration-300 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-500 hover:from-violet-500 hover:to-fuchsia-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 shadow-lg shadow-violet-500/20"
                  >
                    Send Message
                  </motion.button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-6 text-center rounded-xl bg-gradient-to-r from-violet-500/10 to-fuchsia-500/10"
                >
                  <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-600">
                    Thank you!
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Your message has been sent successfully. I'll get back to
                    you soon!
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
