// import React from "react";


// const cars = [
//   {
//     id: 1,
//     image: "https://imgd.aeplcdn.com/664x374/cw/ec/40369/Ford-EcoSport-Right-Front-Three-Quarter-159249.jpg?wm=0&q=80",
//     name: "Ford Ecosport",
//     location: "Cape Coast, Ghana",
//     seats: 4,
//     fuel: "Diesel",
//     transmission: "Manual",
//     price: "GH₵ 950",
//     discount: "10% off",
//     distance: "40 kms without fuel",
//   },
//   {
//     id: 2,
//     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLTYwbaFwezWLTVedeT00UXNx8QAkKBUelzOcJ1wm5YL1TQsq765pNy-vuAUmEwcqXymo&usqp=CAU",
//     name: "Ford Ecosport",
//     location: "Cape Coast, Ghana",
//     seats: 4,
//     fuel: "Diesel",
//     transmission: "Manual",
//     price: "GH₵ 950",
//     discount: "10% off",
//     distance: "40 kms without fuel",
//   },
//   {
//     id: 3,
//     image: "https://imgcdn.zigwheels.us/medium/gallery/exterior/1/7/ford-ecosport-56749.jpg",
//     name: "Volkswagen Virtus",
//     location: "Cape Coast, Ghana",
//     seats: 4,
//     fuel: "Diesel",
//     transmission: "Manual",
//     price: "GH₵ 950",
//     discount: "10% off",
//     distance: "40 kms without fuel",
//   },
// ];

// const CarCard = ({ car }) => {
//   return (
//     <div className="bg-white rounded-lg shadow-lg p-4 w-12/14 mx-auto">
//       <div className="relative">
//         <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
//           {car.discount}
//         </span>
//         <img src={car.image} alt={car.name} className="w-full h-40 object-cover rounded-md" />
//         <button className="absolute top-2 right-2 text-gray-500">♡</button>
//       </div>
//       <h3 className="font-bold text-lg mt-2">{car.name}</h3>
//       <p className="text-gray-500 text-sm">📍 {car.location}</p>
//       <div className="flex items-center justify-between text-sm mt-2">
//         <span>🪑 {car.seats} Seater</span>
//         <span>⛽ {car.fuel}</span>
//         <span>⚙ {car.transmission}</span>
//       </div>
//       <p className="font-bold text-lg mt-2">{car.price}</p>
//       <p className="text-gray-500 text-xs">for {car.distance}</p>
//       <button className="bg-blue-500 text-white w-full py-2 mt-3 rounded-md">View Details</button>
//     </div>
//   );
// };

// const CarListing = () => {
//   return (
//     <div className="flex gap-4 overflow-x-auto p-4">
//       {cars.map((car) => (
//         <CarCard key={car.id} car={car} />
//       ))}
//     </div>
//   );
// };

// export default CarListing;

import React from "react";

const cars = [
  {
    id: 1,
    image: "https://i0.wp.com/sreditingzone.com/wp-content/uploads/2018/05/car-background-hd-8.jpg?resize=780%2C500&ssl=1",
    name: "Ford Ecosport",
    location: "Cape Coast, Ghana",
    seats: 4,
    fuel: "Diesel",
    transmission: "Manual",
    price: "GH₵ 950",
    discount: "10% off",
    distance: "40 kms without fuel",
  },
  {
    id: 2,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT40vtwTrgxB7k5Tqg3Dzz-vy9Qu6nxpVSH6-nHG7aytay8SipreM0Jtmih22YUBkS9lBA&usqp=CAU",
    name: "Ford Ecosport",
    location: "Cape Coast, Ghana",
    seats: 4,
    fuel: "Diesel",
    transmission: "Manual",
    price: "GH₵ 950",
    discount: "10% off",
    distance: "40 kms without fuel",
  },
  {
    id: 3,
    image: "https://picture.lk/files/preview/1280x717/11722455605ofqvrfozwwej3bmbarwzealtgkkqxjqy31ygowb6ru7xtzvqwmwq1ke0mnmlt7ukjk5xnaluo8mai4ag3f6ytcuvc0fy4bld6pke.jpg",
    name: "Volkswagen Virtus",
    location: "Cape Coast, Ghana",
    seats: 4,
    fuel: "Diesel",
    transmission: "Manual",
    price: "GH₵ 950",
    discount: "10% off",
    distance: "40 kms without fuel",
  },
];

const CarCard = ({ car }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 w-full sm:w-72 md:w-80 lg:w-96 mx-auto">
      <div className="relative">
        <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
          {car.discount}
        </span>
        <img src={car.image} alt={car.name} className="w-full h-48 object-cover rounded-md" />
      </div>
      <h3 className="font-semibold text-lg mt-2">{car.name}</h3>
      <p className="text-gray-500 text-sm">📍 {car.location}</p>
      <div className="flex items-center justify-between text-sm mt-2 text-gray-700">
        <span>🪑 {car.seats} Seater</span>
        <span>⛽ {car.fuel}</span>
        <span>⚙ {car.transmission}</span>
      </div>
      <p className="font-bold text-lg mt-2">{car.price}</p>
      <p className="text-gray-500 text-xs">for {car.distance}</p>
      <button className="bg-blue-600 hover:bg-blue-700 text-white w-full py-2 mt-3 rounded-md transition duration-200">
        View Details
      </button>
    </div>
  );
};

const CarListing = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 p-4">
      {cars.map((car) => (
        <CarCard key={car.id} car={car} />
      ))}
    </div>
  );
};

export default CarListing;
