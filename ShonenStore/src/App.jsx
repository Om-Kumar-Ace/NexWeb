import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/nav.jsx'
import Union from './assets/Home/union.png';
import Star from './assets/Home/star.png';
import Stars from './assets/Home/stars.png';
import Pic1 from './assets/Home/pic1.png';
import Vector from './assets/Home/1/Vector.svg';
import Person from './assets/Home/1/person.svg';
import Group1 from './assets/Home/1/Group1.png';
import Vector1 from './assets/ByAnime/Vector (1).svg';
import Vector2 from './assets/ByAnime/Vector.svg';
import CollectionGrid from './components/CardComponet.jsx'
import ShopByCharacter from './components/ByChar.jsx'
import TopTrendingProduct from './components/Trending.jsx'
import AboutUs from './components/About.jsx'
import BlogPage from './components/Blogpage.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <>
      <Nav />
      <div className="banner flex flex-col md:flex-row w-full md:w-4/5 p-4 md:pl-20 relative">
        <div className="union z-10 relative w-full md:w-11/12">
          <img src={Union} alt="" className="w-full" />
        </div>
        <div className="z-20 absolute flex flex-col md:flex-row items-center">
          <div className="container flex flex-col items-start gap-6 p-4 md:my-1 md:w-3/5">
            <h1 className='text-3xl md:text-5xl font-bold text-left'>Step into the Anime Universe With Shonen Store</h1>
            <p className='text-left text-base md:text-lg font-normal'>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            </p>
            <div className="flex items-center gap-6">
              <button className='text-red-600 font-bold bg-white p-3 md:p-4'>Discover More</button>
              <div className="review flex flex-col items-start">
                <img src={Star} alt="" className='h-5 md:h-6' />
                <img src={Stars} alt="" className='h-4 md:h-5' />
                <span><span className='font-normal text-xs md:text-sm'>Based on - </span>
                  <span className='font-semibold text-xs md:text-sm underline'>20,323 reviews</span>
                </span>
              </div>
            </div>
          </div>
          <div className="pic absolute top-0 md:absolute md:top-20 right-4 md:-right-20 w-full md:w-2/5">
            <img src={Pic1} alt="" className="w-full" />
          </div>
        </div>
      </div>

      {/* Section 1 */}
      <div className="sector1 flex flex-wrap justify-center gap-4 p-4">
        <div className="container flex flex-wrap gap-10 justify-center items-center bg-gray-100 p-4 rounded-lg w-full md:w-2/5">
          <div className="vtr flex flex-col w-1/3 md:w-1/4 items-center">
            <img src={Vector} alt="" className="h-8 md:h-12" />
            <h3>150+</h3>
            <p>Total Over-Sized</p>
          </div>
          <div className="vtr flex flex-col w-1/3 md:w-1/4 items-center">
            <img src={Person} alt="" className="h-8 md:h-12" />
            <h3>300+</h3>
            <p>Total Characters</p>
          </div>
          <div className="vtr flex flex-col w-1/3 md:w-1/4 items-center">
            <img src={Person} alt="" className="h-8 md:h-12" />
            <h3>300+</h3>
            <p>Total Characters</p>
          </div>
          <div className="vtr flex flex-col w-1/3 md:w-1/4 items-center">
            <img src={Vector} alt="" className="h-8 md:h-12" />
            <h3>20+</h3>
            <p>Total Categories</p>
          </div>
          <div className="vtr flex flex-col w-1/3 md:w-1/4 items-center">
            <img src={Person} alt="" className="h-8 md:h-12" />
            <h3>300+</h3>
            <p>Total Characters</p>
          </div>
          <div className="vtr flex flex-col w-1/3 md:w-1/4 items-center">
            <img src={Person} alt="" className="h-8 md:h-12" />
            <h3>300+</h3>
            <p>Total Characters</p>
          </div>
        </div>
        <div className="blog2 w-full md:w-auto">
          <img src={Group1} alt="" className="w-full md:w-auto" />
        </div>
      </div>

      {/* Shop by Anime Section */}
      <div className="ShopByAnime flex flex-col items-center mt-10 gap-6 px-4">
        <div className="box relative p-4 w-full md:w-8/12 text-center">
          <h2 className="text-3xl md:text-5xl">Shop by Anime</h2>
          <p className="text-sm md:text-lg font-normal">
            Lorem ipsum dolor sit amet, consectetuer adipi scing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magn.
          </p>
          <div className="bits absolute bottom-0 right-0 -mr-6 md:-mr-20 flex gap-5">
            <img src={Vector1} alt="" />
            <img src={Vector2} alt="" />
          </div>
        </div>
        <div className="cards w-full">
          <CollectionGrid />
        </div>
      </div>

      {/* Shop by Character */}
      <div className="ByChar w-full">
        <ShopByCharacter />
      </div>

      {/* Trending Section */}
      <div className="Trends w-full">
        <TopTrendingProduct />
      </div>

      {/* About Us */}
      <div className="About bg-gray-100 py-8">
        <AboutUs />
      </div>

      {/* Customer Reviews */}
      <div className="Review bg-white py-10">
        <div className="text-center flex flex-col items-center mb-10 px-4">
          <h2 className="text-3xl md:text-4xl font-bold">What Our Customer Says</h2>
          <p className="text-xs md:text-sm font-light mt-2 md:w-7/12">
            Lorem ipsum dolor sit amet, consectetuer adipi scing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magn.
          </p>
        </div>

          <div className="reviews max-w-6xl mx-auto flex flex-wrap gap-4 px-4">
        <div className="flex justify-center mx-auto">
            <div className="flex flex-col items-start w-full md:w-1/4">
              <h3 className="text-2xl font-bold mb-4">Excellent</h3>
              <img src={Stars} alt="5-star rating" className="w-3/4" />
              <p className="text-gray-600 text-sm mt-4">Based on <span className="text-black underline font-bold">20,323 reviews</span></p>
            </div>
            <div className="w-full md:w-3/4 flex flex-wrap gap-6">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="flex flex-col items-start gap-2 w-full md:w-1/4">
                  <div className="flex justify-between items-center">
                    <img src={Stars} alt="5-star rating" className="w-3/5" />
                    <span className="text-gray-500 text-xs">5 days ago</span>
                  </div>
                  <h4 className="text-sm font-bold ">Best Poster Ever</h4>
                  <p className="text-gray-600 text-left text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <span className="text-gray-400 text-xs">Jujutsu kaisen Boy</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Banner Section */}
      <div className="banner w-full md:w-4/5 mx-auto my-10">
        <img src="src/assets/Home/Group 1000008588.png" alt="" className="w-full" />
      </div>

      {/* Blog Page */}
      <div className="BlogPage w-full">
        <BlogPage />
      </div>
      <div className="banner w-4/5 flex flex-col justify-center mx-auto">
        <img src="src\assets\Home\Group 1000008593.png" alt="" />
      </div>
      <div className="advtz mx-auto p-4 gap-10 flex flex-wrap justify-center items-center">
        <div className="b1 flex justify-center items-center w-2/5 p-4" style={{ backgroundColor: "#f4f4f4" }}>
          <div className="icon p-1"><img src="src/assets/advtz/Group.png" alt="" /></div>
          <div className="textg p-1">
            <p className=" mb-1 text-2xl">high quality artwork</p>
            <p className="t2 text-xs">Sed ut perspiciatis unde omnis stenatus</p>
          </div>
        </div>
        <div className="b1 flex justify-center items-center w-2/5 p-4" style={{ backgroundColor: "#f4f4f4" }}>
          <div className="icon p-1"><img src="src/assets/advtz/Vector-1.png" alt="" /></div>
          <div className="textg p-1">
            <p className=" mb-1 text-2xl">high quality artwork</p>
            <p className="t2 text-xs">Sed ut perspiciatis unde omnis stenatus</p>
          </div>
        </div>
        <div className="b1 flex justify-around items-center w-10/12 p-4 gap-4" style={{ backgroundColor: "#f4f4f4" }}>
          <div className="tt flex flex-col justify-center items-center">
            <div className="icon p-1"><img src="src/assets/advtz/hug.png" alt="" /></div>
            <div className="textg p-1 flex flex-col justify-center items-center">
              <p className=" mb-1 text-2xl">Fast delivery</p>
              <p className="t2 text-xs">Sed ut perspiciatis unde omnis stenatus</p>
            </div>
          </div>
          <div className="tt flex flex-col justify-center items-center">
            <div className="icon p-1">
              <img src="src/assets/advtz/vector.png" alt="" className='relative' />
              <img src="src/assets/advtz/1.png" alt="" className='absolute -mt-14 ml-6 z-10' />
            </div>
            <div className="textg p-1 flex flex-col justify-center items-center">
              <p className=" mb-1 text-2xl">Secure Payments</p>
              <p className="t2 text-xs">Sed ut perspiciatis unde omnis stenatus</p>
            </div>
          </div>
          <div className="tt flex flex-col justify-center items-center">
            <div className="icon p-1"><img src="src/assets/advtz/mat.png" alt="" /></div>
            <div className="textg p-1 flex flex-col justify-center items-center">
              <p className=" mb-1 text-2xl">15 days return</p>
              <p className="t2 text-xs">Sed ut perspiciatis unde omnis stenatus</p>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </>
  )
}

export default App
