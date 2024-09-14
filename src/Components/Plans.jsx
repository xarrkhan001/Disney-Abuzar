import React, { useState } from 'react';
import Hulu from '../assets/Images/Hulu.png';
import Disney11 from '../assets/Images/Disney11.png';
import EspnPlus from '../assets/Images/EspnPlus.png';

import { FaCheck } from "react-icons/fa6";

function Plans() {
  const [isDisneyBundle, setIsDisneyBundle] = useState(true);



  const [duoBasicConfirmed, setDuoBasicConfirmed] = useState(false);
  const [trioBasicConfirmed, setTrioBasicConfirmed] = useState(false);
  const [trioPremiumConfirmed, setTrioPremiumConfirmed] = useState(false);




  const [basicConfirmed, setBasicConfirmed] = useState(false);
  const [millionConfirmed, setMillionConfirmed] = useState(false);
  const [saveBasicConfirmed, setSaveBasicConfirmed] = useState(false);




  const handleClick = (buttonNumber) => {
    switch (buttonNumber) {
      case 1:
        setDuoBasicConfirmed(true);
        break;
      case 2:
        setTrioBasicConfirmed(true);
        break;
      case 3:
        setTrioPremiumConfirmed(true);
        break;
      default:
        break;
    }
  };


  const handleClick2 = (buttonNumber) => {
    switch (buttonNumber) {
      case 1:
        setBasicConfirmed(true);
        break;
      case 2:
        setMillionConfirmed(true);
        break;
      case 3:
        setSaveBasicConfirmed(true);
        break;
      default:
        break;
    }
  };

  const toggleButton = () => {
    setIsDisneyBundle(!isDisneyBundle);
  };

  return (
    <div className="flex flex-col items-center mt-24 p-4">
      <div className="text-center leading-8">
        <h2 className="font-bold text-white text-3xl">Choose Your Plan</h2>
        <p className="text-gray-400 text-sm font-thin">Switch or Cancel* anytime</p>
      </div>

      <div className="flex justify-center my-4">
        <div
          id="capsuleButton"
          className="flex w-80 p-1 bg-gray-600 rounded-full cursor-pointer"
          onClick={toggleButton}
        >
          <div
            id="on"
            className={`flex-1 text-center py-2 rounded-full ${isDisneyBundle ? 'bg-neela text-white' : 'text-gray-400'}`}
          >
            Disney Bundle
          </div>
          <div
            id="off"
            className={`flex-1 text-center py-2 rounded-full ${!isDisneyBundle ? 'bg-neela text-white' : 'text-gray-400'}`}
          >
            Disney+
          </div>
        </div>
      </div>

      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5`}>
        {isDisneyBundle ? (
          <>
            <div className='border border-white p-8 shadow-md flex flex-col justify-between h-full'>
              <div>
                <div className='flex justify-center gap-2'>
                  <img src={Hulu} alt="" className='size-16 mt-1'/>
                  <img src={Disney11} alt="" className='size-16'/>
                </div>
                <h2 className='font-bold text-white text-xl mt-4'>Duo Basic</h2>
                <p className="text-gray-400 text-sm font-thin">With Ads</p>
                <div className='flex mt-4'>
                  <FaCheck className='text-white text-2xl mr-2'/>
                  <p className="text-gray-400 text-sm font-thin">Thousands of shows, movies, and Originals on Disney+ and Hulu</p>
                </div>
              </div>
              <div className='mt-4'>
                <h2 className="font-bold text-white text-3xl">$9.99 <span className="text-gray-400 text-sm font-thin">/month</span></h2>
                <button className="btn-primary mt-4 w-full py-4"
                   onClick={() => handleClick(1)}
                >{duoBasicConfirmed ? 'Confirmed' : 'SELECT'}</button>
              </div>
            </div>

            <div className='border border-white p-8 shadow-md flex flex-col justify-between h-full'>
              <div>
                <div className='flex justify-center gap-2'>
                  <img src={Hulu} alt="" className='size-16 mt-1'/>
                  <img src={Disney11} alt="" className='size-16'/>
                  <img src={EspnPlus} alt="" className='size-16 mt-1'/>
                </div>
                <h2 className='font-bold text-white text-xl mt-4'>Trio Basic</h2>
                <p className="text-gray-400 text-sm font-thin">With Ads</p>
                <div className='flex mt-4'>
                  <FaCheck className='text-white text-2xl mr-2'/>
                  <p className="text-gray-400 text-sm font-thin">Thousands of shows, movies, and Originals on Disney+ and Hulu</p>
                </div>
                <div className='flex mt-4'>
                  <FaCheck className='text-white text-2xl mr-2'/>
                  <p className="text-gray-400 text-sm font-thin">Live sports and Originals on ESPN+</p>
                </div>
              </div>
              <div className='mt-4'>
                <h2 className="font-bold text-white text-3xl">$12.99 <span className="text-gray-400 text-sm font-thin">/month</span></h2>
                <button className="btn-primary mt-4 w-full py-4"
                     onClick={() => handleClick(2)}
                >{trioBasicConfirmed ? 'Confirmed' : 'SELECT'}</button>
              </div>
            </div>

            <div className='border border-white p-8 shadow-md flex flex-col justify-between h-full'>
              <div>
                <div className='flex justify-center gap-2'>
                  <img src={Hulu} alt="" className='size-16 mt-1'/>
                  <img src={Disney11} alt="" className='size-16'/>
                  <img src={EspnPlus} alt="" className='size-16 mt-1'/>
                </div>
                <h2 className='font-bold text-white text-xl mt-4'>Trio Premium</h2>
                <p className="text-gray-400 text-sm font-thin">No Ads on Disney+ & Hulu</p>
                <div className='flex mt-4'>
                  <FaCheck className='text-white text-2xl mr-2'/>
                  <p className="text-gray-400 text-sm font-thin">Thousands of shows, movies, and Originals on Disney+ and Hulu</p>
                </div>
                <div className='flex mt-4'>
                  <FaCheck className='text-white text-2xl mr-2'/>
                  <p className="text-gray-400 text-sm font-thin">Live sports and Originals on ESPN+ (With Ads)</p>
                </div>
                <div className='flex mt-4'>
                  <FaCheck className='text-white text-2xl mr-2'/>
                  <p className="text-gray-400 text-sm font-thin">Downloads to watch on-the-go</p>
                </div>
              </div>
              <div className='mt-4'>
                <h2 className="font-bold text-white text-3xl">$19.99 <span className="text-gray-400 text-sm font-thin">/month</span></h2>
                <button className="btn-primary mt-4 w-full py-4"
                  onClick={() => handleClick(3)}
                >{trioPremiumConfirmed ? 'Confirmed' : 'SELECT'}</button>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className='border border-white p-8 shadow-md flex flex-col justify-between h-full'>
              <div className='flex justify-center'>
                <img src={Disney11} alt="" className='size-16'/>
              </div>
              <h2 className='font-bold text-white text-xl mt-4'>Basic</h2>
              <p className="text-gray-400 text-sm font-thin">With Ads</p>
              <div className='flex mt-4'>
                <FaCheck className='text-white text-2xl mr-2'/>
                <p className="text-gray-400 text-sm font-thin">Thousands of shows, movies, from Disney Pixar Marvel, Star Wars, and National Geographic</p>
              </div>
              <div className='mt-4'>
                <h2 className="font-bold text-white text-3xl">$7.99 <span className="text-gray-400 text-sm font-thin">/month</span></h2>
                <button className="btn-primary mt-4 w-full py-4"
                 onClick={() => handleClick2(1)}
                >{basicConfirmed ? 'Confirmed' : 'SELECT'}</button>
              </div>
            </div>

            <div className='border border-white p-8 shadow-md flex flex-col justify-between h-full'>
              <div className='flex justify-center'>
                <img src={Disney11} alt="" className='size-16'/>
              </div>
              <h2 className='font-bold text-white text-xl mt-4'>12M Basic</h2>
              <p className="text-gray-400 text-sm font-thin">With Ads</p>
              <div className='flex mt-4'>
                <FaCheck className='text-white text-2xl mr-2'/>
                <p className="text-gray-400 text-sm font-thin">12 Months of award-winning classics and exclusive new hits for 10 months</p>
              </div>
              <div className='mt-4'>
                <h2 className="font-bold text-white text-3xl">$79.99 <span className="text-gray-400 text-sm font-thin">/year</span></h2>
                <button className="btn-primary mt-4 w-full py-4"
                 onClick={() => handleClick2(2)}
                >{millionConfirmed ? 'Confirmed' : 'SELECT'}</button>
              </div>
            </div>

            <div className='border border-white p-8 shadow-md flex flex-col justify-between h-full'>
              <div className='flex justify-center'>
                <img src={Hulu} alt="" className='size-16 mt-1'/>
                <img src={Disney11} alt="" className='size-16'/>
                <img src={EspnPlus} alt="" className='size-16 mt-1'/>
              </div>
              <h2 className='font-bold text-white text-xl mt-4'>Save Basic</h2>
              <p className="text-gray-400 text-sm font-thin">No Ads on Disney+ & Hulu</p>
              <div className='flex mt-4'>
                <FaCheck className='text-white text-2xl mr-2'/>
                <p className="text-gray-400 text-sm font-thin">Includes Hulu (No Ads) along with everything you love in the Disney Bundle</p>
              </div>
              <div className='flex mt-4'>
                <FaCheck className='text-white text-2xl mr-2'/>
                <p className="text-gray-400 text-sm font-thin">Live sports and Originals on ESPN+ (With Ads)</p>
              </div>
              <div className='flex mt-4'>
                <FaCheck className='text-white text-2xl mr-2'/>
                <p className="text-gray-400 text-sm font-thin">Downloads to watch on-the-go</p>
              </div>
              <div className='mt-4'>
                <h2 className="font-bold text-white text-3xl">$19.99 <span className="text-gray-400 text-sm font-thin">/month</span></h2>
                <button className="btn-primary mt-4 w-full py-4"
                 onClick={() => handleClick2(3)}
                >{saveBasicConfirmed ? 'Confirmed' : 'SELECT'}</button>
              </div>
            </div>
          </>
        )}
      </div>

      <div className='leading-8 mt-4 text-center'>
        <p className="text-gray-400 text-lg font-thin">*Effective at the end of billing period</p>
        <p className="text-white text-sm font-thin">Terms Apply.</p>
      </div>
    </div>
  );
}

export default Plans;
