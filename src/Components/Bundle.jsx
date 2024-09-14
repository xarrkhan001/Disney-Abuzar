import React, { useState } from 'react';
import DBundle from '../assets/Images/DBundle.png';

function Bundle() {

  const [getAllThreeClicks, setGetAllThreeClicks] = useState(0);
  const handleGetAllThreeClick = () => {
    setGetAllThreeClicks(getAllThreeClicks + 1);
    console.log(`getAllThree clicked ${getAllThreeClicks + 1} times`);
  };

  return (
    <div className='relative mt-52'>
      <img src={DBundle} alt="" className='w-full' />

      <div className='lg:absolute md:absolute top-0 right-0 flex flex-col items-start space-y-2 p-4 mt-28'>
        <p className='text-white text-2xl font-thin'>
          Get your favourite stories, originals, and live sports
          <br />
          with Disney+, Hulu, and ESPN+.
        </p>

        <button
          className="px-16 py-3 bg-neela text-white rounded-sm font-thin hover:bg-blue-700
          transition-all duration-300 hover:-translate-y-2"
          onClick={handleGetAllThreeClick}
        >
          GET ALL THREE
        </button>

        <p className='text-xs text-white underline cursor-pointer'>Terms Apply.</p>
      </div>
    </div>
  );
}

export default Bundle;
