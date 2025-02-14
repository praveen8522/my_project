import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-white shadow-lg">
      {/* Left Section - Location Selector */}
      <div className="flex items-center space-x-2 border border-gray-400 rounded-full px-4 py-2">
        <span className="text-black">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-5 h-5"
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
        <span className="text-gray-700">Choose your location</span>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </span>
      </div>

      {/* Right Section - Buttons */}
      <div className="flex items-center space-x-4">
        {/* For Vehicle Owner Button */}
        <button className="px-4 py-2 bg-red-500 text-white rounded-full shadow hover:bg-red-600">
          For Vehicle Owner
        </button>
        {/* Login Button */}
        <button className="px-4 py-2 border border-black text-black rounded-full hover:bg-gray-100">
          Login
        </button>
        {/* Sign up Button */}
        <button className="px-4 py-2 bg-black text-white rounded-full hover:bg-gray-900">
          Sign up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
