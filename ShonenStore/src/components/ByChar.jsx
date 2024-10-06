import React, { useState } from "react";
import imss from "./ByCha/image.png";

const products = {
    "One Piece": [
        "src/components/ByCha/image-1.png",
        "src/components/ByCha/image-2.png",
        "src/components/ByCha/image-3.png",
        "src/components/ByCha/image-4.png",
        "src/components/ByCha/image-5.png",
        "src/components/ByCha/image-6.png",
        
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
            <div className="text-center flex flex-col justify-center items-center mb-10">
                <h2 className="text-4xl font-bold">Shop by character</h2>
                <p className="text-sm text-center font-light mt-2 w-7/12">
                    Lorem ipsum dolor sit amet, consectetuer adipi scing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magn. Lorem ipsum dolor sit amet, consectetuer adipi scing elit, sed diam nonummy
                </p>
            </div>

            {/* Category Tabs */}
            <div className="flex justify-between mb-6">
                <div className="std">

                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-4 py-2 mx-2 rounded-md font-semibold ${selectedCategory === category
                                    ? "bg-red-500 text-white"
                                    : "bg-gray-200 text-gray-700"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
                <button className="px-4 py-2 mx-2 rounded-md font-semibold bg-black text-white">
                    View All
                </button>
            </div>

            {/* Product Grid */}
            <div className="imgctr flex items-center">
                <div className="img w-3/5">
                <img src={imss} alt="" />
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 p-5 gap-6">
                    {products[selectedCategory].map((imgUrl, index) => (
                        <img
                            key={index}
                            src={imgUrl}
                            alt={`${selectedCategory} Product ${index + 1}`}
                            className="w-full h-auto  shadow-lg object-cover"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ShopByCharacter;
