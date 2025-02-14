import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const feedbacks = [
  {
    id: 1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    author: "Lorem",
  },
  {
    id: 2,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    author: "Lorem",
  },
  {
    id: 3,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    author: "Lorem",
  },
];

const ClientFeedback = () => {
  return (
    <div className="w-11/12 mx-auto">
      <h2 className="text-center text-2xl font-bold mb-8">Our Clients Feedback</h2>
      <div className="flex flex-wrap justify-center gap-52">
        {feedbacks.map((feedback) => (
          <div key={feedback.id} className="relative w-80 p-6 shadow-lg border-black rounded-3xl">
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
