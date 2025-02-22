import React, { useState } from "react";

const RentBuyComponent = () => {
  const [activeTab, setActiveTab] = useState("rent");

  return (
    <div className="bg-white/90 backdrop-blur-md rounded-xl shadow-lg p-6">
      {/* Tabs */}
      <div className="flex space-x-6 mb-6">
        {["rent", "buy"].map((tab) => (
          <button
            key={tab}
            className={`px-6 py-2 rounded-full font-bold transition-all duration-300 transform ${
              activeTab === tab
                ? "bg-red-500 text-white shadow-lg scale-105"
                : "bg-gray-200 text-gray-600 hover:bg-gray-300"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Form */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Pick-up Location */}
        <div className="border rounded-lg p-4 flex flex-col bg-white shadow-sm hover:shadow-md transition-all">
          <label className="font-semibold text-black mb-1">Pick-up Location</label>
          <select
            className="text-gray-500 w-full border-none bg-transparent p-2 focus:ring focus:ring-red-300 focus:outline-none"
            aria-label="Select pick-up location"
          >
            <option>Select location</option>
            <option>New York</option>
            <option>Los Angeles</option>
            <option>Chicago</option>
          </select>
        </div>

        {/* Pick-up Date & Time */}
        <div className="border rounded-lg p-4 flex flex-col bg-white shadow-sm hover:shadow-md transition-all">
          <label className="font-semibold text-black mb-1">Pick-up Date & Time</label>
          <input
            type="datetime-local"
            className="text-gray-500 w-full border-none bg-transparent p-2 focus:ring focus:ring-red-300 focus:outline-none"
            aria-label="Select pick-up date and time"
          />
        </div>

        {/* Drop-off Location */}
        <div className="border rounded-lg p-4 flex flex-col bg-white shadow-sm hover:shadow-md transition-all">
          <label className="font-semibold text-black mb-1">Drop-off Location</label>
          <select
            className="text-gray-500 w-full border-none bg-transparent p-2 focus:ring focus:ring-red-300 focus:outline-none"
            aria-label="Select drop-off location"
          >
            <option>Select location</option>
            <option>San Francisco</option>
            <option>Houston</option>
            <option>Miami</option>
          </select>
        </div>

        {/* Drop-off Date & Time */}
        <div className="border rounded-lg p-4 flex flex-col bg-white shadow-sm hover:shadow-md transition-all">
          <label className="font-semibold text-black mb-1">Drop-off Date & Time</label>
          <input
            type="datetime-local"
            className="text-gray-500 w-full border-none bg-transparent p-2 focus:ring focus:ring-red-300 focus:outline-none"
            aria-label="Select drop-off date and time"
          />
        </div>
      </div>

      {/* Search Button */}
      <div className="mt-6 flex justify-end">
        <button className="bg-black text-white p-4 rounded-full hover:bg-gray-800 transition-transform transform hover:scale-105 duration-300 focus:ring-2 focus:ring-black">
          Search
        </button>
      </div>
    </div>
  );
};

export default RentBuyComponent;
