import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-gray-900 to-gray-700 bg-opacity-80 backdrop-blur-md fixed top-0 left-0 w-full z-50 shadow-lg">
      <div className="container mx-auto flex items-center justify-between px-6 py-5">
        
        {/* Location Selector */}
        <div className="flex items-center space-x-2 border border-gray-400 bg-white bg-opacity-20 backdrop-blur-lg rounded-full px-4 py-2 cursor-pointer hover:bg-opacity-40 transition">
          <span className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-5 h-5"
              aria-label="Location Icon"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 2C8.686 2 6 4.686 6 8c0 4.472 6 10 6 10s6-5.528 6-10c0-3.314-2.686-6-6-6z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 10a2 2 0 110-4 2 2 0 010 4z"
              />
            </svg>
          </span>
          <span className="text-white text-sm">Choose your location</span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-4 h-4"
              aria-label="Dropdown Icon"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </span>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>

        {/* Desktop & Mobile Menu */}
        <div
          className={`md:flex items-center space-x-4 absolute md:static top-16 left-0 w-full md:w-auto bg-gray-900 md:bg-transparent shadow-md md:shadow-none p-4 md:p-0 transition-all duration-500 ${
            menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10 md:opacity-100 md:translate-y-0"
          }`}
        >
          <button className="px-5 py-2 bg-red-500 text-white rounded-full shadow-md hover:bg-red-600 transition duration-300 focus:ring focus:ring-red-400">
            For Vehicle Owner
          </button>
          <button className="px-5 py-2 border border-white text-white rounded-full hover:bg-gray-200 hover:text-black transition duration-300 focus:ring focus:ring-gray-400">
            Login
          </button>
          <button className="px-5 py-2 bg-white text-black rounded-full shadow-md hover:bg-gray-100 transition duration-300 focus:ring focus:ring-gray-400">
            Sign up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

