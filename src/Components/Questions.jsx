import React from 'react'
import { FaPlus } from "react-icons/fa6";

function Questions() {
  return (
    <div className='mt-44 px-4 sm:px-8 lg:px-16'>
      
      <h2 className='font-bold text-white text-3xl mb-8 text-center'>Frequently Asked Questions</h2>

      <div className='space-y-4'>
        {[
          "What is Disney+?",
          "How much does Disney+ cost?",
          "What can I watch on Disney+?",
          "Where can I watch Disney+?",
          "What's included on the Disney+ plans with and without Ads?",
          "What is Disney bundle?"
        ].map((question, index) => (
          <div key={index} className='bg-gray-900 flex flex-row justify-between items-center p-4 '>
            <p className='text-gray-400 text-lg sm:text-xl font-thin hover:text-white cursor-pointer'>{question}</p>
            <FaPlus className='text-white text-lg sm:text-xl cursor-pointer' />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Questions
