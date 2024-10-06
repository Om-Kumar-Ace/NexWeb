import React from "react";

const items = [
  {
    title: "One Piece",
    imageUrls: [
      "/src/assets/ByAnime/image-1.png",
      "/src/assets/ByAnime/image-2.png",
      "/src/assets/ByAnime/image-3.png",
      "/src/assets/ByAnime/image-4.png"
    ],
    count: 83
},
{
    title: "Jujutsu Kaisen",
    imageUrls: [
        "/src/assets/ByAnime/image-5.png",
        "/src/assets/ByAnime/image-6.png",
        "/src/assets/ByAnime/image-7.png",
        "/src/assets/ByAnime/image-8.png",
    ],
    count: 83
},
{
    title: "My Hero Academia",
    imageUrls: [
        "/src/assets/ByAnime/image-10.png",
        "/src/assets/ByAnime/image-11.png",
        "/src/assets/ByAnime/image-12.png",
        "/src/assets/ByAnime/image-13.png",
        
    ],
    count: 83
},
{
    title: "Naruto",
    imageUrls: [
        "/src/assets/ByAnime/image-14.png",
        "/src/assets/ByAnime/image-15.png",
        "/src/assets/ByAnime/image-16.png",
        "/src/assets/ByAnime/image-17.png",
      
    ],
    count: 83
  }
];

const CollectionCard = ({ title, imageUrls, count }) => {
  return (
    <div className="shadow-md overflow-hidden" style={{backgroundColor:'#F4F4F4'}}>
      <div className="grid grid-cols-2 gap-2 p-4">
        {imageUrls.map((url, index) => (
          <img key={index} src={url} alt={title} className="w-full h-auto object-cover" />
        ))}
      </div>
      <div className="text-center p-4">
        <h3 className="text-red-600 font-bold text-lg">{title}</h3>
        <p>{count} Items</p>
      </div>
    </div>
  );
};

const CollectionGrid = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((item, index) => (
          <CollectionCard
            key={index}
            title={item.title}
            imageUrls={item.imageUrls}
            count={item.count}
          />
        ))}
      </div>
    </div>
  );
};

export default CollectionGrid;
