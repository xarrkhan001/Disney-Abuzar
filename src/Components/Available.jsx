import React from 'react'
import TV from '../assets/Images/TV.png'
import Computer from '../assets/Images/Computer.png'
import Mobile from '../assets/Images/Mobile.png'
import Game from '../assets/Images/Game.png'

function Available() {
  return (
    <div className='lg:mt-36 md:mt-36 mt-10'>
      
      <h2 className='font-bold text-white text-3xl text-center'>Available on your favourite devices</h2>
      
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-20'>
        
        <div className='TV flex flex-col items-center'>
          <img src={TV} alt="" className='w-40 transform hover:scale-105 transition-transform duration-300'/>
          <h2 className='font-bold text-white text-2xl p-2'>TV</h2>
          <ul className='text-gray-400 text-sm space-y-2 font-thin text-center'>
            <li>Amazon Fire TV</li>
            <li>Android TV devices</li>
            <li>Apple TV</li>
            <li>Chromecast</li>
            <li>LG TV</li>
            <li>Roku</li>
            <li>Samsung</li>
            <li>Xfinity X1 & Flex</li>
            <li>Hisense</li>
            <li>Panasonic</li>
          </ul>
        </div>

        <div className='Computer flex flex-col items-center'>
          <img src={Computer} alt="" className='w-40 transform hover:scale-105 transition-transform duration-300'/>
          <h2 className='font-bold text-white text-2xl p-2'>Computer</h2>
          <ul className='text-gray-400 text-sm space-y-2 font-thin text-center'>
            <li>Chrome OS</li>
            <li>MacOS</li>
            <li>Windows PC</li>
          </ul>
        </div>

        <div className='Mobile flex flex-col items-center'>
          <img src={Mobile} alt="" className='w-40 transform hover:scale-105 transition-transform duration-300'/>
          <h2 className='font-bold text-white text-2xl p-2'>Mobile & Tablet</h2>
          <ul className='text-gray-400 text-sm space-y-2 font-thin text-center'>
            <li>Amazon Fire Tablets</li>
            <li>Android Phones & Tablets</li>
            <li>iPhone & iPad</li>
          </ul>
        </div>

        <div className='Game flex flex-col items-center'>
          <img src={Game} alt="" className='w-40 transform hover:scale-105 transition-transform duration-300'/>
          <h2 className='font-bold text-white text-2xl p-2'>Game Consoles</h2>
          <ul className='text-gray-400 text-sm space-y-2 font-thin text-center'>
            <li>PS4</li>
            <li>PS5</li>
            <li>Xbox One</li>
            <li>Xbox Series X</li>
            <li>Xbox Series S</li> 
          </ul>
        </div>

      </div>

    </div>
  )
}

export default Available
