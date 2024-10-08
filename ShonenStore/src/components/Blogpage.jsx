import React from "react";

const BlogPage = () => {
    const blogs = [
        {
            title: "Best T-Shirt Print Technique",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            image: "src/assets/Blog/Rectangle 24548.png",
            link: "#",
        },
        {
            title: "Best Over-Sized Technique",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            image: "src/assets/Blog/Rectangle 24549.png",
            link: "#",
        },
        {
            title: "Best Poster Print Technique",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            image: "src/assets/Blog/Rectangle 24550.png",
            link: "#",
        },
    ];

    const news = [
        {
            title: "Lorem ipsum dolor sit amet elitcon sectetur adipising elit sedo dolor",
            description: "Lorem ipsum dolor sit amet elitcon sectetur adiping sedo dolor ipsum ipsum dolor sitei amet elitcon....",
            category: "Anime",
            author: "Arpit",
            post: "Writer",
            date: "15 May, 2024",
            image: "src/assets/Blog/item (5).png", 
        },
        {
            title: "Lorem ipsum dolor sit amet elitcon sectetur adipising elit sedo dolor",
            description: "Lorem ipsum dolor sit amet elitcon sectetur adiping sedo dolor ipsum ipsum dolor sitei amet elitcon....",
            category: "Anime",
            author: "Om",
            post: "Writer",
            date: "15 May, 2024",
            image: "src/assets/Blog/item (1).png",
        },
        {
            title: "Lorem ipsum dolor sit amet elitcon sectetur adipising elit sedo dolor",
            description: "Lorem ipsum dolor sit amet elitcon sectetur adiping sedo dolor ipsum ipsum dolor sitei amet elitcon....",
            category: "Anime",
            author: "Amitabh",
            post: "Writer",
            date: "15 May, 2024",
            image: "src/assets/Blog/item (2).png",
        },
        {
            title: "Lorem ipsum dolor sit amet elitcon sectetur adipising elit sedo dolor",
            description: "Lorem ipsum dolor sit amet elitcon sectetur adiping sedo dolor ipsum ipsum dolor sitei amet elitcon....",
            category: "Anime",
            author: "Ayush",
            post: "Writer",
            date: "15 May, 2024",
            image: "src/assets/Blog/item (3).png",
        },
        {
            title: "Lorem ipsum dolor sit amet elitcon sectetur adipising elit sedo dolor",
            description: "Lorem ipsum dolor sit amet elitcon sectetur adiping sedo dolor ipsum ipsum dolor sitei amet elitcon....",
            category: "Anime",
            author: "NexWeb",
            post: "Writer",
            date: "15 May, 2024",
            image: "src/assets/Blog/item (4).png",
        },
        // Add other news items similarly
    ];

    return (
        <div className="container mx-auto p-8">
            <section className="mb-12">
                <div className="text-center flex flex-col justify-center items-center mb-10">
                    <h2 className="text-4xl font-bold">Read Our Blog</h2>
                    <p className="text-sm text-center font-light mt-2 w-7/12">
                        Lorem ipsum dolor sit amet, consectetuer adipi scing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magn. Lorem ipsum dolor sit amet, consectetuer adipi scing elit, sed diam nonummy
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {blogs.map((blog, index) => (
                        <div key={index} className=" flex flex-col j p-4" style={{ backgroundColor: "#F4F4F4" }}>
                            <img src={blog.image} alt={blog.title} className="w-full h-auto object-cover " />
                            <h2 className="text-xl font-bold mt-4 text-left">{blog.title}</h2>
                            <p className="text-gray-500 mt-2 text-sm text-left">{blog.description}</p>
                            <a href={blog.link} className="text-red-500 mt-4 inline-block text-left underline">Read More</a>
                        </div>
                    ))}
                </div>
            </section>

            <section>
                <h2 className="text-3xl font-bold text-left mb-6">Latest News</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                    {news.map((item, index) => (
                        <div key={index} className=" p-4" style={{ backgroundColor: "#F4F4F4" }}>
                            <img src={item.image} alt={item.title} className="w-full h-40 object-cover" />
                            <div className="mt-4 flex justify-between items-center relative">
                                <span className="text-white absolute left-2 bg-red-500 p-1 px-2 bottom-5 rounded-2xl text-sm font-bold">{item.category}</span>

                            </div>
                            <h3 className="text-sm font-bold text-left mt-2">{item.title}</h3>
                            <p className="text-gray-500 text-xs text-left mt-2">{item.description}</p>
                            <div className="mt-4 flex justify-around items-center">
                                <div className="author flex gap-2">
                                    <img src="src/assets/Blog/Ellipse 187.png" alt="" />
                                    <div className="poet flex flex-col justify-center items-center">
                                        <p className="text-xs font-bold ml-0 text-gray-900">{item.author}</p>
                                        <p className="text-xs ml-0 text-gray-500">{item.post}</p>
                                    </div>
                                </div>
                                <p className="text-gray-500 mr-0 text-xs">{item.date}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default BlogPage;
