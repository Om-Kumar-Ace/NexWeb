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
                  <img src={Star} alt="" className='h-6' />
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
        <div className="sector1 flex gap-2 justify-center">
          <div className="container blog1 w-2/5 flex flex-wrap  justify-center items-center p-4 rounded-lg">
            <div className="vtr flex flex-col w-1/3">
              <img src={Vector} alt="" className='h-12' />
              <h3>150+</h3>
              <p>Total Over-Sized</p>
            </div>
            <div className="vtr flex flex-col w-1/3">
              <img src={Person} alt="" className='h-12' />
              <h3>300+</h3>
              <p>Total Characters</p>
            </div>
            <div className="vtr flex flex-col w-1/3">
              <img src={Person} alt="" className='h-12' />
              <h3>300+</h3>
              <p>Total Characters</p>
            </div>
            <div className="vtr flex flex-col w-1/3">
              <img src={Vector} alt="" className='h-12' />
              <h3>20+</h3>
              <p>Total Catagory</p>
            </div>
            <div className="vtr flex flex-col w-1/3">
              <img src={Person} alt="" className='h-12' />
              <h3>300+</h3>
              <p>Total Characters</p>
            </div>
            <div className="vtr flex flex-col w-1/3">
              <img src={Person} alt="" className='h-12' />
              <h3>300+</h3>
              <p>Total Characters</p>
            </div>
          </div>
          <div className="blog2">
            <img src={Group1} alt="" />
          </div>
        </div>
        <div className="ShopByAnime flex flex-col gap-10 justify-center items-center mt-10">
          <div className="box relative p-4 w-8/12 flex flex-col gap-5">
            <div className="text-5xl">
              Shop by Anime
            </div>
            <div className="text-lg font-normal">Lorem ipsum dolor sit amet, consectetuer adipi scing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magn. Lorem ipsum dolor sit amet, consectetuer adipi scing elit, sed diam nonummy</div>
            <div className="bits absolute bottom-0 right-0 -mr-20 flex gap-5">
              <img src={Vector1} alt="" />
              <img src={Vector2} alt="" />
            </div>
          </div>
          <div className="cards">
            <div className="card">
              <CollectionGrid/>
            </div>
          </div>
        </div>
        <div className="ByChar">
          <ShopByCharacter/>
        </div>
      </div>
    </>
  )
}

export default App
