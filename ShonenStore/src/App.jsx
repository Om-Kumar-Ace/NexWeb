import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/nav.jsx'
import Union from './assets/Home/union.png';
import Star from './assets/Home/star.png';
import Stars from './assets/Home/stars.png';
import Pic1 from './assets/Home/pic1.png';

function App() {
  return (
    <>
      <Nav />
      <div>
        <div className="banner flex w-4/5 p-4 pl-20">
          <div className="union z-10 absolute w-4/5 ">
              <img src={Union} alt="" />      
          </div>
          <div className='z-20 flex items-center'>
            <div className="container flex flex-col items-center gap-10 p-10 px-15 my-10 w-3/5">
            <h1 className='text-5xl text-left font-bold'>Step into the Anime Universe With Shonen Store</h1>
            <p className='text-left font-normal text-lg'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa</p>
            <div className="bxs flex h-auto w-auto gap-10">
              <button className='text-red-600 font-bold bg-white p-4'>Discover More</button>
              <div className="review h justify-center flex flex-col">
              <img src={Star} alt="" className='h-6'/>      
              <img src={Stars} alt="" className='h-5' />   
              <span ><span className='font-normal text-xs'>Based on - </span><span className='font-semibold text-xs underline'>20,323 reviews</span></span>
              </div>
            </div>
            </div>
            <div className="pic absolute top-64 right-24 w-2/5">
              <img src={Pic1} alt="" sizes="" srcset="" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
