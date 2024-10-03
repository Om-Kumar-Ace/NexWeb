import React from 'react';
import './nav.css'; 
import Deal from "./deal.jsx";
// Import images from the assets folder
import logo from '../assets/Nav/logo.png'; 
import icon1 from '../assets/Nav/icon1.png'; 
import icon2 from '../assets/Nav/icon2.png'; 
import icon3 from '../assets/Nav/icon3.png'; 
import icon4 from '../assets/Nav/icon4.png';
import DropdownHover from './dropdown.jsx';
const Nav = () => {
  return (
    <>
      <header>
        <Deal />
        {/* Add some margin-top to avoid overlapping with the Deal bar */}
        <nav className="flex w-screen relative m-0 justify-around items-center py-4 px-6">
          {/* Use imported images */}
          <img src={logo} alt="Logo" className='absolute left-20 h-28' />
          <form className="w-1/3 mx-auto mr-20">
            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-white sr-only">Search</label>
            <div className="relative ">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg className="w-4 h-4 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
              </div>
              <input 
                type="search" 
                id="default-search" 
                className="block w-full p-2 px-2 pl-10 font-medium text-sm text-gray-50 border-none rounded-3xl bg-gray-50 focus:ring-red-50  dark:bg-red-600 dark:border-gray-50 dark:placeholder-gray-50 " 
                placeholder="Search for artworks" 
                required 
              />
            </div>
          </form>
          <div className="btns flex h-15 gap-4 items-center ">
            <a href="#" className="text-white flex flex-col items-center space-x-2 ">
              <img src={icon1} alt="Currency Icon" className='h-15 ' /> 
              <span className='text-sm font-light'>Currency</span>
            </a>
            <a href="#" className="text-white flex flex-col items-center space-x-2">
              <img src={icon2} alt="Profile Icon" className='h-15 ' /> 
              <span className='text-sm font-light'>Join</span>
            </a>
            <a href="#" className="text-white flex flex-col items-center space-x-2">
              <img src={icon3} alt="Wishlist Icon" className='h-15 ' /> 
              <span className='text-sm font-light'>WishList</span>
            </a>
            <a href="#" className="text-white flex flex-col items-center space-x-2">
              <img src={icon4} alt="Cart Icon" className='h-15 ' /> 
              <span className='text-sm font-light'>Cart</span>
            </a>
          </div>
        </nav>
        <div className='top nav flex shadow-md p-5 items-center justify-around'>
            <div className='shop'>
                <div className='hamburger'></div>
                <div className='font-bold'>Shop By Anime</div>
            </div>
            <div className='navbtns flex gap-5'>
                <a href="#" className='font-medium'>Home</a>
                <a href="#" className='font-medium'>Best Sellers</a>
                <a href="#" className='font-medium'>New Arrivals</a>
                <a href="#" className='font-medium'><DropdownHover/></a>
                <a href="#" className='font-medium'>Gift Cards</a>
                <a href="#" className='font-medium'>Track Your Order</a>
                <a href="#" className='font-medium'>What's Shonen Store</a>
                <a href="#" className='font-medium'>Contact Us</a>
            </div>
        </div>
      </header>
    </>
  );
};

export default Nav;
