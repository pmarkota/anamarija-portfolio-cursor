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

  const [submitted, setSubmitted] = useState(false); // State to track form submission

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Process your form submission here (simulated with a console log)
      console.log("Form data:", formData);
      // Reset the form after submission
      setFormData({
        name: "",
        email: "",
        message: "",
      });
      // Set submitted state to true to show confirmation message
      setSubmitted(true);
    } else {
      console.log("Form validation failed.");
    }
  };

  const validateForm = () => {
    let valid = true;
    const errors = {
      name: "",
      email: "",
      message: "",
    };

    // Validate Name
    if (formData.name.trim() === "") {
      errors.name = "Name is required";
      valid = false;
    }

    // Validate Email
    if (!formData.email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
      errors.email = "Invalid email address";
      valid = false;
    }

    // Validate Message
    if (formData.message.trim() === "") {
      errors.message = "Message is required";
      valid = false;
    }

    setFormErrors(errors);
    return valid;
  };

  return (
    <section className="bg-gray-100 home-hero">
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <h2 className="mb-4 text-4xl font-bold text-gray-800 md:text-5xl">
          CONTACT
        </h2>
        <hr className="w-16 h-2 mb-8 rounded-full bg-violet-500" />
        <p className="max-w-2xl mb-8 text-lg text-gray-600 md:text-xl">
          Feel free to contact me by submitting the form below and I will get
          back to you as soon as possible.
        </p>
        <div className="w-full max-w-lg p-8 bg-white rounded-lg shadow-md">
          {!submitted ? ( // Show the form if not submitted
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-600"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 text-sm border rounded-md bg-slate-100 focus:outline-none focus:border-violet-500 ${
                    formErrors.name && "border-red-500"
                  }`}
                  placeholder="Your Name"
                />
                {formErrors.name && (
                  <p className="mt-1 text-xs text-red-500">{formErrors.name}</p>
                )}
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-600"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 text-sm border rounded-md bg-slate-100 focus:outline-none focus:border-violet-500 ${
                    formErrors.email && "border-red-500"
                  }`}
                  placeholder="Your Email"
                />
                {formErrors.email && (
                  <p className="mt-1 text-xs text-red-500">
                    {formErrors.email}
                  </p>
                )}
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-gray-600"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 text-sm border rounded-md resize-none bg-slate-100 focus:outline-none focus:border-violet-500 ${
                    formErrors.message && "border-red-500"
                  }`}
                  placeholder="Your Message"
                ></textarea>
                {formErrors.message && (
                  <p className="mt-1 text-xs text-red-500">
                    {formErrors.message}
                  </p>
                )}
              </div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95, type: "spring", stiffness: 500 }}
                type="submit"
                className="w-full px-4 py-2 text-sm font-medium text-white rounded-md bg-violet-500 hover:bg-violet-700 focus:outline-none focus:bg-violet-700"
              >
                Submit
              </motion.button>
            </form>
          ) : (
            // Show confirmation message if form is submitted
            <div className="text-green-600">
              <p className="mb-2 text-lg font-semibold">Thank you!</p>
              <p className="text-sm">
                Your message has been successfully submitted. I will get back to
                you as soon as possible.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
