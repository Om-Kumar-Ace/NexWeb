import React from 'react';

const AboutUs = () => {
    return (
        <div className="container mx-auto py-12 px-4" style={{ backgroundColor: "#F4F4F4" }}>
            {/* About Us Header */}
            <div className="text-center flex flex-col items-center justify-center mb-8">
                <h2 className="text-4xl font-bold">About US</h2>
                <p className=" mt-4 text-center font-light w-1/2 text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </div>

            {/* Main Section with Logo in the Center */}
            <div className="flex justify-center">
                <div className="flex flex-col md:flex-row items-center">
                    {/* Left Column */}
                    <div className="space-y-8 md:space-y-16 md:mr-8">
                        <div className="flex flex-col items-center">
                            <div className="">
                                <img
                                    src="src\components\Pics\About\ion3.png"
                                    alt="Icon 1"
                                    className="w-14 h-14"
                                />
                            </div>
                            <p className="text-center mt-4 font-semibold">
                                Sedut unde omnis
                            </p>
                            <p className="text-center mt-2 w-9/12 text-xs font-normal">
                                Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudantium totam rem illo
                            </p>
                        </div>
                        <div className="flex flex-col items-center">
                        <div className="">
                                <img
                                    src="src\components\Pics\About\ion4.png"
                                    alt="Icon 1"
                                    className="w-14 h-14"
                                />
                            </div>
                            <p className="text-center mt-4 font-semibold">
                                Sedut unde omnis
                            </p>
                            <p className="text-center mt-2 w-9/12 text-xs font-normal">
                                Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudantium totam rem illo
                            </p>
                        </div>
                    </div>

                    {/* Logo in the Center */}
                    <div className="mx-8">
                        <img
                            src="src\components\Pics\About\NEXWEB.png"
                            alt="Shonen Store Logo"
                            className="rounded-lg shadow-lg"
                        />
                    </div>

                    {/* Right Column */}
                    <div className="space-y-8 md:space-y-16 md:ml-8">
                        <div className="flex flex-col items-center">
                        <div className="">
                                <img
                                    src="src\components\Pics\About\ion1.png"
                                    alt="Icon 1"
                                    className="w-14 h-14"
                                />
                            </div>
                            <p className="text-center mt-4 font-semibold">
                                Sedut unde omnis
                            </p>
                            <p className="text-center mt-2 w-9/12 text-xs font-normal">
                                Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudantium totam rem illo
                            </p>
                        </div>
                        <div className="flex flex-col items-center">
                        <div className="">
                                <img
                                    src="src\components\Pics\About\ion2.png"
                                    alt="Icon 1"
                                    className="w-14 h-15"
                                />
                            </div>
                            <p className="text-center mt-4 font-semibold">
                                Sedut unde omnis
                            </p>
                            <p className="text-center mt-2 w-9/12 text-xs font-normal">
                                Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudantium totam rem illo
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
