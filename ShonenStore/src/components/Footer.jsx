import React from "react";
import icon1 from "../assets/Footer/Group 1000008149.png"
import icon2 from "../assets/Footer/Group 1000008150.png"
import icon3 from "../assets/Footer/Group 1000008151.png"
import icon4 from "../assets/Footer/Group 1000008152.png"
const Footer = () => {
    return (
        <footer className=" text-gray-100 py-12" style={{ backgroundColor: "#3D3D3D" }}>
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                    {/* Section 1: Description */}
                    <div>
                        <p className="text-xs text-left mb-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>

                    {/* Section 2: Support Links */}
                    <div>
                        <h3 className="text-white font-bold mb-4 flex flex-col justify-center items-start">Support</h3>
                        <ul className="space-y-2 flex flex-col justify-center items-start">
                            <li><a href="#" className="hover:text-white">Check order status</a></li>
                            <li><a href="#" className="hover:text-white">Shipping & Returns</a></li>
                            <li><a href="#" className="hover:text-white">Help/FAQ</a></li>
                            <li><a href="#" className="hover:text-white">Terms of use</a></li>
                            <li><a href="#" className="hover:text-white">Mountain instruction</a></li>
                            <li><a href="#" className="hover:text-white">Contact us</a></li>
                            <li><a href="#" className="hover:text-white">Privacy policy</a></li>
                        </ul>
                    </div>

                    {/* Section 3: About Links */}
                    <div>
                        <h3 className="text-white font-bold mb-4 flex flex-col justify-center items-start ">About</h3>
                        <ul className="space-y-2 flex flex-col justify-center items-start">
                            <li><a href="#" className="text-left hover:text-white">What's a Displate?</a></li>
                            <li><a href="#" className="text-left hover:text-white">Displate Club</a></li>
                            <li><a href="#" className="text-left hover:text-white">About Us</a></li>
                            <li><a href="#" className="text-left hover:text-white">Blog</a></li>
                            <li><a href="#" className="text-left hover:text-white">Career</a></li>
                            <li><a href="#" className="text-left hover:text-white">Copyrights</a></li>
                        </ul>
                    </div>

                    {/* Section 4: Earn and Find Us */}
                    <div>
                        <h3 className="text-white font-bold mb-4 flex flex-col justify-center items-start">Earn With Displate</h3>
                        <ul className="space-y-2 mb-8 flex flex-col justify-center items-start">
                            <li><a href="#" className="text-left hover:text-white">Sell your art</a></li>
                        </ul>
                    </div>
                    {/* Section 5: Social Media Icons */}
                    <div>
                        <h3 className="text-white font-bold mb-4 flex flex-col justify-center items-start">Find Us</h3>
                        <ul className="space-y-2 mb-8 flex flex-col justify-center items-start">
                            <li><p href="#" className="text-left  hover:text-white">Sed ut perspiciatis unde omnis iste natus error</p></li>
                        <li><div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white"><img src={icon1} alt="" /> </a>
                            <a href="#" className="text-gray-400 hover:text-white"><img src={icon2} alt="" /></a>
                            <a href="#" className="text-gray-400 hover:text-white"><img src={icon3} alt="" /></a>
                            <a href="#" className="text-gray-400 hover:text-white"><img src={icon4} alt="" /></a>
                        </div></li>
                        </ul>
                    </div>
                </div>

                {/* Footer Bottom Section */}
                <div className="border-t border-gray-50 mt-8 pt-8 text-sm flex flex-col md:flex-row justify-between">
                    <p>© all rights reserved Geekozzi</p>
                    <p>
                        <a href="#" className="hover:text-white">Privacy Policy</a> /
                        <a href="#" className="hover:text-white"> General conditions</a> /
                        <a href="#" className="hover:text-white"> Return Policy</a>
                    </p>
                    <p>made with love by marketingo</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
