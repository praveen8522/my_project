import React from "react";

const destinations = [
  {
    id: 1,
    name: "Accra",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpKqeL6tkHYPZ20ya8-kSoHmy7CsBH_FZ7Ig&s",
  },
  {
    id: 2,
    name: "Cape Coast",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8dgbPhncrDb52FvxT54XfQr3Z6VpNaMPknA&s", // Shortened for readability
  },
  {
    id: 3,
    name: "Kumasi",
    imageUrl: "https://www.savaari.com/blog/wp-content/uploads/2023/10/15.-nainital-lake_landscape.jpg",
  },
  {
    id: 4,
    name: "Vouta",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgMGuVzRGIW6p2yKrwWYsBv1IF-hm50cbSWV2fdjQSOkuGyWdWBjFlMHR7tQh8-tb1kto&usqp=CAU", // Shortened for readability
  },
  {
    id: 5,
    name: "Accra",
    imageUrl: "https://miro.medium.com/v2/resize:fit:5120/1*Jh9h0lunjNP4CqabTthYvw.jpeg",
  },
  {
    id: 6,
    name: "Cape Coast",
    imageUrl: "https://www.flamingotravels.co.in/blog/wp-content/uploads/2018/08/FEA-@.jpg", // Shortened for readability
  },
];

const Destinations = () => {
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-6">Popular Destinations</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {destinations.map((destination) => (
          <div key={destination.id} className="rounded-lg shadow-lg overflow-hidden">
            <img
              src={destination.imageUrl}
              alt={destination.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{destination.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Destinations;
