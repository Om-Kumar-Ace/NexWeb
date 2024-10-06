import React, { useState } from "react";

const products = {
  "One Piece": [
    "/path-to-image-1.jpg",
    "/path-to-image-2.jpg",
    "/path-to-image-3.jpg",
    "/path-to-image-4.jpg",
    "/path-to-image-5.jpg",
    "/path-to-image-6.jpg",
    "/path-to-image-7.jpg",
  ],
  "Jujutsu Kaisen": [
    "/path-to-jujutsu-kaisen-image-1.jpg",
    "/path-to-jujutsu-kaisen-image-2.jpg",
    // Add more image URLs
  ],
  "Naruto": [
    "/path-to-naruto-image-1.jpg",
    "/path-to-naruto-image-2.jpg",
    // Add more image URLs
  ],
};

const categories = ["One Piece", "Jujutsu Kaisen", "Naruto"];

const ShopByCharacter = () => {
  const [selectedCategory, setSelectedCategory] = useState("One Piece");

  return (
    <div className="container mx-auto px-4 py-10">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold">Shop by character</h2>
        <p className="text-gray-500 mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex justify-center mb-6">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 mx-2 rounded-md font-semibold ${
              selectedCategory === category
                ? "bg-red-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {category}
          </button>
        ))}
        <button className="px-4 py-2 mx-2 rounded-md font-semibold bg-black text-white">
          View All
        </button>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products[selectedCategory].map((imgUrl, index) => (
          <img
            key={index}
            src={imgUrl}
            alt={`${selectedCategory} Product ${index + 1}`}
            className="w-full h-auto rounded-lg shadow-lg object-cover"
          />
        ))}
      </div>
    </div>
  );
};

export default ShopByCharacter;
