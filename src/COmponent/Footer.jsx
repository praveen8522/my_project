import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { FaPaypal, FaCcVisa, FaCcMastercard } from 'react-icons/fa';
import { AiOutlineArrowRight } from 'react-icons/ai';

const Footer = () => {
  return (
   <div className='flex justify-center items-center w-10/10 mx-auto'>
     <div className="bg-gray-50 w-10/12 mx-auto p-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-32 text-gray-800">
        
        {/* About Section */}
        <div>
          <h2 className="font-bold text-lg mb-2">ABOUT</h2>
          <p className="mb-4">
            Welcome to vehicle rental, where comfort is everything. Beautiful room presentations, straightforward booking & reservation options, & a whole lot more awaits here.
          </p>
          <div className="flex space-x-4 text-xl">
            <FaFacebookF className="text-blue-600 hover:text-blue-800 cursor-pointer" />
            <FaInstagram className="text-pink-500 hover:text-pink-700 cursor-pointer" />
            <FaTwitter className="text-blue-400 hover:text-blue-600 cursor-pointer" />
          </div>
        </div>

        {/* Contact Section */}
        <div>
          <h2 className="font-bold text-lg mb-2">CONTACT</h2>
          <p>A: <a href="#" className="hover:underline">Via Venti Settembre, Roma</a></p>
          <p>P: <a href="tel:+3155577783" className="hover:underline">+31 555 777 83</a></p>
          <p>App: Viber, WhatsApp</p>
          <p>E: <a href="mailto:info@easymove.com" className="hover:underline">info@easymove.com</a></p>

           {/* Location Section */}
          <div className='mt-5'>
          <h2 className="font-bold text-lg mb-2">LOCATION</h2>
          <a href="#" className="flex items-center space-x-2 text-gray-800 hover:underline">
            <span>Show on map</span>
            <AiOutlineArrowRight />
          </a>
        </div>
        </div>

        {/* Payment Methods Section */}
        <div>
          <h2 className="font-bold text-lg mb-2">PAYMENT METHODS</h2>
          <p className="mb-4">
            Pay any way you choose, we support all payment options.
          </p>
          <div className="flex space-x-4 text-2xl">
            <FaPaypal className="text-blue-600 cursor-pointer" />
            <FaCcVisa className="text-blue-700 cursor-pointer" />
            <FaCcMastercard className="text-red-600 cursor-pointer" />
          </div>
        </div>

       
        

      </div>
    </div>
   </div>
  );
};

export default Footer;
