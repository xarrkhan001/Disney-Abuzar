import React from 'react'
import Watch from '../assets/Images/Watch.png'

function WatchAnywhere() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex lg:flex-row flex-col mt-52 gap-20 relative">
        <div className="lg:w-1/2 w-full">
          <img src={Watch} alt="" className="lg:size-[37rem] size-[20rem] mx-auto" />
        </div>

        <div className="space-y-4 mt-28 lg:mt-28 lg:w-1/2 w-full">
          <h2 className="font-bold text-white text-3xl text-left">Watch the way you want</h2>
          <ul className="text-gray-400 text-lg font-thin list-disc list-inside space-y-6 text-left">
            <li>Host virtual movie nights. Pause, rewind and react with up to six friends. To invite or be invited to join GroupWatch, a subscription is required.</li>
            <li>Download any movie or series and watch it on the go.</li>
            <li>Keep your family safe with easy parental controls.</li>
            <li>An ever-growing range of titles in stunning 4K UHD and Dolby Atmos sound on compatible devices.</li>
            <li>Stream on up to four devices at the same time.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default WatchAnywhere