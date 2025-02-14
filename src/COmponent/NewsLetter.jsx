import React from 'react';
import { FaEnvelope } from 'react-icons/fa';

const Newsletter = () => {
  return (
    <div className='w-5/6 mx-auto my-20'>
        <div className="flex justify-between items-center py-6">
      <div className="flex items-center space-x-4">
        <FaEnvelope className="text-gray-500 text-3xl" />
        <p className="text-3xl font-semibold">Join our weekly Newsletter</p>
      </div>

      <div className="flex items-center ml-6 space-x-4">
        <input
          type="email"
          placeholder="Email Address"
          className="border-b border-gray-300 focus:outline-none focus:border-gray-500 text-gray-600 px-4 py-2"
        />
        <button className="bg-blue-500 text-white font-bold px-6 py-2 rounded-full hover:bg-blue-600">
          SIGNUP ME
        </button>
      </div>
    </div>
    </div>
  );
};

export default Newsletter;
