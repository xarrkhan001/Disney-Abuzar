import React, {useState} from 'react';
import Background from '../assets/Images/Background.jpg';
import Hulu from '../assets/Images/Hulu.png';
import Disney11 from '../assets/Images/Disney11.png';
import EspnPlus from '../assets/Images/EspnPlus.png';
import Disney22 from '../assets/Images/Disney22.png';
import Plus from '../assets/Images/Plus.png';
import Pixar from '../assets/Images/Pixar.png';
import Marvel from '../assets/Images/Marvel.png';
import Starwar from '../assets/Images/StarWar.png';
import National from '../assets/Images/National.png';

function Main() {




  const [getBothConfirmed, setGetBothConfirmed] = useState(false);
  const [getThreeConfirmed, setGetThreeConfirmed] = useState(false);

  const handleLogInClick = () => {
    setButton1Clicks(logInClicks + 1);
    console.log(`logInClick clicked ${logInClicks + 1} times`);
  };





  const handleClick = (buttonNumber) => {
    switch (buttonNumber) {
      case 1:
        setGetBothConfirmed(true);
        break;
      case 2:
        setGetThreeConfirmed(true);
        break;
      default:
        break;
    }
  };
       

  return (
    <div>
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-no-repeat bg-center z-[-1]"
        style={{
          backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)), url(${Background})`,
        }}
      />
      <div>
        <button
          className="bg-black text-white rounded-sm   border border-white lg:px-5 lg:py-2 px-2 py-1
           hover:border-2 hover:border-white hover:text-bold hover:text-yellow-500 float-right mr-2 
           relative mt-24 lg:mt-0 bottom-28"
           onClick={handleLogInClick}
        >
          LOG IN
        </button>
      </div>
      <div className="onBackground flex lg:flex-row md:flex-row flex-col items-center justify-center lg:mt-24">
        <div className="flex flex-col items-center lg:m-3">
          <div className="flex flex-row">
            <img src={Hulu} alt="" className="lg:size-28 md:size-28 size-20 mt-3" />
            <img src={Disney11} alt="" className="lg:size-28  md:size-28 size-20" />
          </div>
          <button
            className="lg:px-32 lg:py-5 px-12 py-2 bg-neela text-white rounded-sm font-thin
             hover:bg-blue-700 transition-all duration-300 hover:-translate-y-2"
             onClick={() => handleClick(1)}
          >
           {getBothConfirmed ? 'SUCESS! RETREIVED BOTH' : 'GET THEM BOTH'}
          </button>
        </div>
        <div className="flex flex-col items-center  lg:m-3">
          <div className="flex flex-row ">
            <img src={Hulu} alt="" className="lg:size-28   md:size-28 size-20 mt-3" />
            <img src={Disney11} alt="" className="lg:size-28   md:size-28 size-20 left-4" />
            <img src={EspnPlus} alt="" className="lg:size-28  md:size-28  size-20 mt-3" />
          </div>
          <button
            className="lg:px-32 lg:py-5 px-12 py-2 bg-neela text-white rounded-sm font-thin
             hover:bg-blue-700 transition-all duration-300 hover:-translate-y-2"
             onClick={() => handleClick(2)}
          >
           {getThreeConfirmed ? 'SUCESS! RETREIVED ALL' : 'GET ALL THREE'}
          </button>
        </div>
      </div>
      <div className="space-y-5 flex flex-col justify-between text-center">
        <p className="text-[#d9d9e2] text-2xl  font-thin ">
          All of these and more now streaming.
        </p>
        <p className="text-[#c6c5d1] font-thin">
          The Disney Bundle Duo Basic includes Disney+ (With Ads) and Hulu (With
          Ads). <span className="text-white">Terms Apply.</span>
        </p>


        <div className="flex lg:flex-row md:flex-row flex-col items-center justify-center ">     
          <a href="https://www.disney.com" target="_blank" rel="noopener noreferrer">
            <img src={Disney22} alt="" className="size-24 cursor-pointer" />
          </a>

          
          <img src={Plus} alt="" className="size-16 mt-4" />
          <a href="https://www.pixar.com" target="_blank" rel="noopener noreferrer">
             <img src={Pixar} alt="" className="size-24 cursor-pointer" />
          </a>  
            

          <img src={Plus} alt="" className="size-16 mt-4" />
            

          
           <a href="https://www.marvel.com" target="_blank" rel="noopener noreferrer">
           <img src={Marvel} alt="" className="size-24 cursor-pointer" />
           </a>
           <img src={Plus} alt="" className="size-16 mt-4" />
          

           
           <a href="https://www.starwars.com" target="_blank" rel="noopener noreferrer">
           <img src={Starwar} alt="" className="size-24 cursor-pointer" />
           </a>

           <img src={Plus} alt="" className="size-16 mt-4" />
   

           
           <a href="https://www.nationalgeographic.com" target="_blank" rel="noopener noreferrer">
           <img src={National} alt="" className="size-24 cursor-pointer" />
          </a>

         
          
          
        </div>
        <h2 className="text-white text-3xl font-thin cursor-pointer transition-all duration-300 hover:translate-x-2 hover:text-neela ">View All Plan Options</h2>
      </div>
    </div>
  );
}

export default Main;