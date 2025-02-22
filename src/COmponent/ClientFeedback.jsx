// import React from 'react';
// import { FaQuoteLeft } from 'react-icons/fa';

// const feedbacks = [
//   {
//     id: 1,
//     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//     author: "Lorem",
//   },
//   {
//     id: 2,
//     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//     author: "Lorem",
//   },
//   {
//     id: 3,
//     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//     author: "Lorem",
//   },
// ];

// const ClientFeedback = () => {
//   return (
//     <div className="w-11/12 mx-auto">
//       <h2 className="text-center text-2xl font-bold mb-8">Our Clients Feedback</h2>
//       <div className="flex flex-wrap justify-center gap-52">
//         {feedbacks.map((feedback) => (
//           <div key={feedback.id} className="relative w-80 p-6 shadow-lg border-black rounded-3xl">
//             <FaQuoteLeft className="text-red-500 text-4xl absolute -top-5 left-5" />
//             <p className="text-gray-600 italic mb-4">{feedback.text}</p>
//             <p className="text-right font-semibold">- {feedback.author}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ClientFeedback;


import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const feedbacks = [
  {
    id: 1,
    text: "Ensure that all vehicles go through regular inspections to avoid mechanical issuesConsider eco-friendly options (hybrids, electric cars) to appeal to environmentally conscious customers.",
    author: "John Doe",
  },
  {
    id: 2,
    text: "Avoid hidden fees—unexpected charges can lead to negative reviews Offer a price comparison tool on the website to help customers choose the best deal.",
    author: "Jane Smith",
  },
  {
    id: 3,
    text: "Friendly and knowledgeable staff improve customer experience Quick response to inquiries (phone, email, or in-person.",
    author: "Michael Brown",
  },
];

const ClientFeedback = () => {
  return (
    <div className="w-11/12 mx-auto py-12">
      <h2 className="text-center text-3xl font-bold mb-8">Our Clients' Feedback</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {feedbacks.map((feedback) => (
          <div
            key={feedback.id}
            className="relative bg-white w-full p-8 shadow-xl border border-gray-300 rounded-3xl"
          >
            <FaQuoteLeft className="text-red-500 text-4xl absolute -top-5 left-5" />
            <p className="text-gray-600 italic mb-4">{feedback.text}</p>
            <p className="text-right font-semibold">- {feedback.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientFeedback;
