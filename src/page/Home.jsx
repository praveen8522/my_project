import React from "react";
import RentBuyComponent from "../COmponent/RentBuyComponent";
import CarRentalDestinations from "../COmponent/CarRentalDestinations ";
import ClientFeedback from "../COmponent/ClientFeedback";
import Newsletter from "../COmponent/NewsLetter";
import CarListing from "../COmponent/CArCArd";


const Home = () => {
  return (
    <div className="mx-auto">
      <img  src="https://www.motoringresearch.com/wp-content/uploads/2019/09/1631623_e-tron-1.jpg"></img>
      <RentBuyComponent></RentBuyComponent>
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
        <CarListing/>
      <CarRentalDestinations></CarRentalDestinations>
      <ClientFeedback></ClientFeedback>
      <Newsletter></Newsletter>
    </div>
  );
};

export default Home;
