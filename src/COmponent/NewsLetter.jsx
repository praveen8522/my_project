import React from "react";
import { FaEnvelope } from "react-icons/fa";

const Newsletter = () => {
  return (
    <div className="w-5/6 mx-auto my-20">
      <div className="flex flex-wrap justify-between items-center bg-gray-100 p-6 rounded-xl shadow-lg">
        
        {/* Left Section - Title */}
        <div className="flex items-center space-x-4">
          <FaEnvelope className="text-gray-600 text-3xl" />
          <p className="text-xl md:text-3xl font-semibold text-gray-800">
            Join our weekly Newsletter
          </p>
        </div>

        {/* Right Section - Input & Button */}
        <div className="flex flex-wrap items-center mt-4 md:mt-0 space-x-2">
          <input
            type="email"
            placeholder="Email Address"
            className="border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-700 px-4 py-2 w-full md:w-auto"
            aria-label="Enter your email address"
          />
          <button className="bg-blue-500 text-white font-bold px-6 py-2 rounded-full hover:bg-blue-600 transition duration-300 focus:ring-2 focus:ring-blue-300">
            SIGN UP
          </button>
        </div>

      </div>
    </div>
  );
};

export default Newsletter;
