import React from "react";
import RentBuyComponent from "../Component/RentBuyComponent";
import CarRentalDestinations from "../Component/CarRentalDestinations ";
import ClientFeedback from "../Component/ClientFeedback";
import Newsletter from "../Component/NewsLetter";
import CarListing from "../Component/CArCArd";

const Home = () => {
  return (
    <div className="mx-auto">
      <img  
        src="https://images3.alphacoders.com/890/89045.jpg" 
        className="w-full h-[300px] sm:h-[500px] md:h-[600px] lg:h-[730px] object-cover"
        alt="Car"
      />
      <RentBuyComponent />
      <div className="text-center px-4 py-10 md:px-16 lg:px-24">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-4">
          Lorem ipsum
        </h1>
        <p className="text-gray-600 text-base md:text-lg lg:text-xl max-w-3xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      <CarListing />
      <CarRentalDestinations />
      <ClientFeedback />
      <Newsletter />
    </div>
  );
};

export default Home;

