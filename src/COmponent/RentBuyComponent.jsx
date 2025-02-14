import React, { useState } from 'react';

const RentBuyComponent = () => {
  const [activeTab, setActiveTab] = useState('rent');

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      {/* Tabs */}
      <div className="flex space-x-6 mb-6">
        <button
          className={`px-4 py-2 rounded-full text-white font-bold ${
            activeTab === 'rent' ? 'bg-red-500' : 'bg-transparent text-black'
          }`}
          onClick={() => setActiveTab('rent')}
        >
          Rent
        </button>
        <button
          className={`px-4 py-2 rounded-full ${
            activeTab === 'buy' ? 'text-black font-bold' : 'text-gray-500'
          }`}
          onClick={() => setActiveTab('buy')}
        >
          Buy
        </button>
      </div>

      {/* Form */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Pick-up location */}
        <div className="border rounded-lg p-4 flex items-center space-x-4">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 text-black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 2C8.686 2 6 4.686 6 8c0 4.472 6 10 6 10s6-5.528 6-10c0-3.314-2.686-6-6-6z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10a2 2 0 110-4 2 2 0 010 4z"
              />
            </svg>
          </span>
          <div>
            <p className="font-semibold text-black">Pick-up location</p>
            <input
              type="text"
              placeholder="Pick-up location"
              className="text-gray-500 w-full focus:outline-none"
            />
          </div>
        </div>

        {/* Pick-up Date & Time */}
        <div className="border rounded-lg p-4 flex items-center space-x-4">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 text-black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3M16 7V3M3 11h18M5 11v10m14-10v10m-6 0h6"
              />
            </svg>
          </span>
          <div>
            <p className="font-semibold text-black">Pick-up Date & Time</p>
            <input
              type="text"
              placeholder="Pick-up Date & Time"
              className="text-gray-500 w-full focus:outline-none"
            />
          </div>
        </div>

        {/* Drop-off location */}
        <div className="border rounded-lg p-4 flex items-center space-x-4">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 text-black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 2C8.686 2 6 4.686 6 8c0 4.472 6 10 6 10s6-5.528 6-10c0-3.314-2.686-6-6-6z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10a2 2 0 110-4 2 2 0 010 4z"
              />
            </svg>
          </span>
          <div>
            <p className="font-semibold text-black">Drop-off location</p>
            <input
              type="text"
              placeholder="Drop-off location"
              className="text-gray-500 w-full focus:outline-none"
            />
          </div>
        </div>

        {/* Drop-off Date & Time */}
        <div className="border rounded-lg p-4 flex items-center space-x-4">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 text-black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3M16 7V3M3 11h18M5 11v10m14-10v10m-6 0h6"
              />
            </svg>
          </span>
          <div>
            <p className="font-semibold text-black">Drop-off Date & Time</p>
            <input
              type="text"
              placeholder="Drop-off Date & Time"
              className="text-gray-500 w-full focus:outline-none"
            />
          </div>
        </div>
      </div>

      {/* Search Button */}
      <div className="mt-6 flex justify-end">
        <button className="bg-black text-white p-4 rounded-full hover:bg-gray-800">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default RentBuyComponent;
