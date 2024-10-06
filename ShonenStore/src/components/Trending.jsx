import React from 'react';

const products = [
  {
    name: 'Knucklehead Club Tee',
    image: '/src/components/Pics/Trends/image.png',
},
{
    name: 'Wingless Duo Deskmat',
    image: '/src/components/Pics/Trends/image-2.png',
},
{
    name: 'Shinigami’s Graffiti Hawaiian Shirt',
    image: '/src/components/Pics/Trends/image-4.png',
  },
  {
    name: 'Dragon Boy 3D DIY Frame',
    image: '/src/components/Pics/Trends/image-6.png',
  },
  {
    name: 'Dawn Cloud Braided Bracelet',
    image: '/src/components/Pics/Trends/image-1.png',
  },
  {
    name: 'Naruto: Split Sneakers',
    image: '/src/components/Pics/Trends/image-3.png',
  },
  {
    name: 'Cursed Jogger',
    image: '/src/components/Pics/Trends/image-5.png',
  },
  {
    name: 'Worst Gen Figurine',
    image: '/src/components/Pics/Trends/image-7.png',
  },
];

const TopTrendingProduct = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">Top Trending Product</h2>
        <button className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-700">
          View All
        </button>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto object-cover"
            />
            <p className="mt-4 text-center text-gray-800">{product.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopTrendingProduct;
