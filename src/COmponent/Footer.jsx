import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaPaypal, FaCcVisa, FaCcMastercard } from "react-icons/fa";
import { AiOutlineArrowRight } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="w-full bg-gray-100 py-12 flex justify-center">
      <div className="w-11/12 max-w-7xl mx-auto text-gray-800">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-16 text-center">
          
          {/* About Section */}
          <div className="w-80 flex flex-col items-center">
            <h2 className="font-bold text-xl mb-4">ABOUT</h2>
            <p className="mb-4 text-sm max-w-xs">
              Welcome to vehicle rental, where comfort is everything. Beautiful room presentations, straightforward booking & reservation options, & a whole lot more await here.
            </p>
            <div className="flex space-x-4 text-2xl">
              <FaFacebookF className="text-blue-600 hover:text-blue-800 cursor-pointer transition" />
              <FaInstagram className="text-pink-500 hover:text-pink-700 cursor-pointer transition" />
              <FaTwitter className="text-blue-400 hover:text-blue-600 cursor-pointer transition" />
            </div>
          </div>

          {/* Contact Section */}
          <div className="w-80 flex flex-col items-center">
            <h2 className="font-bold text-xl mb-4">CONTACT</h2>
            <p className="text-sm">A: <a href="#" className="hover:underline">Via Venti Settembre, Roma</a></p>
            <p className="text-sm">P: <a href="tel:+3155577783" className="hover:underline">+31 555 777 83</a></p>
            <p className="text-sm">App: Viber, WhatsApp</p>
            <p className="text-sm">E: <a href="mailto:info@easymove.com" className="hover:underline">info@easymove.com</a></p>
          </div>


          {/* Location Section */}
          <div>
             <div className="mt-5">
              <h2 className="font-bold text-lg mb-2">LOCATION</h2>
              <a href="#" className="flex items-center justify-center space-x-2 text-gray-800 hover:underline">
                <span>Show on map</span>
                <AiOutlineArrowRight />
              </a>
            </div>
          </div>


          {/* Payment Methods Section */}
          <div className="w-70 flex flex-col items-center">
            <h2 className="font-bold text-xl mb-4">PAYMENT METHODS</h2>
            <p className="mb-4 text-sm max-w-xs">
              Pay any way you choose, we support all payment options.
            </p>
            <div className="flex space-x-4 text-3xl">
              <FaPaypal className="text-blue-600 cursor-pointer hover:scale-110 transition" />
              <FaCcVisa className="text-blue-700 cursor-pointer hover:scale-110 transition" />
              <FaCcMastercard className="text-red-600 cursor-pointer hover:scale-110 transition" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Footer;


