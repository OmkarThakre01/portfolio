import React from 'react';
import Img3 from '../../assets/Img3.png';

const Contact = () => {
  return (
    <section className="bg-gray-100 py-10">
      {/* Centered Heading and Description */}
      <div className="w-full text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h1>
        <p className="text-gray-600">
          We'd love to hear from you! Fill out the form below and we'll get back to you as soon as possible.
        </p>
      </div>

      {/* Layout */}
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10 px-6">
        {/* Left Side: Image */}
        <div className="w-full lg:w-1/2">
          <img
            src={Img3}
            alt="Contact Us Illustration"
            className="w-full object-cover"
          />
        </div>

        {/* Right Side: Contact Form */}
        <div className="w-full lg:w-1/2">
          <form className=" p-6 space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your full name"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Type your message here"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
