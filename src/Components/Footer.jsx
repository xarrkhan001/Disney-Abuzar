import React from 'react'
import Disney11 from '../assets/Images/Disney11.png'
import { BsGlobe2 } from "react-icons/bs";

function Footer() {
  return (
    <div className="lg:flex lg:justify-center lg:items-center h-screen
    grid grid-cols-1 ">
      <div className="content-center lg:mt-52 md:mt-52 mt-10 space-y-4">
        <div className='flex justify-center'>
          <img src={Disney11} alt="" className='size-20' />
        </div>

        <div >
          <ul className='text-gray-400 text-sm  font-thin lg:flex flex-none space-x-5 '>
            <li className='flex  gap-2 ml-40 md:ml-0 lg:ml-0 '> <BsGlobe2 className='mt-1' /> English</li>
            <li>Subscriber Agreement</li>
            <li>Privacy Policy</li>
            <li>Your CaliforniaPrivacyRights</li>
            <li>Do Not Sell My Personal Inforamation</li>
            <li>Children Online Privacy Policy</li>
          </ul>
        </div>

        <div>
          <ul className='text-gray-400 text-sm  font-thin lg:flex flex-none space-x-5 '>
            <li>Closed Captioning</li>
            <li>Closed Captioning</li>
            <li>Interest-based Ads</li>
            <li>Supported Devices</li>
            <li>Help</li>
            <li>Gift Disney+</li>
            <li>About Us</li>
            <li>Disney+ Partner Program</li>

            <li>Disney Bundle</li>
          </ul>
        </div>

       <div className='space-y-4 mt-4'>
       <p className='text-gray-400   text-xs '>Content and Platform availability may vary by rgion.</p>
        <p className='text-gray-400 text-xs  '> &copy; Disney. All Rights Reserved.</p>
       </div>


      </div>
    </div>
  )
}

export default Footer