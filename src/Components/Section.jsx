import React, { useState } from 'react';
import d1 from '../assets/Images/d1.png';
import d2 from '../assets/Images/d2.jpg';
import d3 from '../assets/Images/d3.jpg';
import d4 from '../assets/Images/d4.jpg';
import d5 from '../assets/Images/d5.jpg';
import d6 from '../assets/Images/d6.png';
import d7 from '../assets/Images/d7.png';
import d8 from '../assets/Images/d8.jpg';
import d9 from '../assets/Images/d9.png';

const videoData = {
  link1: {
    thumbnails: [d1, d2, d3, d9, d8, d7],
    trailers: [
      'https://www.youtube.com/watch?v=trailer1',
      'https://www.youtube.com/watch?v=trailer2',
      'https://www.youtube.com/watch?v=trailer3',
      'https://www.youtube.com/watch?v=trailer9',
      'https://www.youtube.com/watch?v=trailer8',
      'https://www.youtube.com/watch?v=trailer7',
    ],
  },
  link2: {
    thumbnails: [d4, d5, d6, d1, d2, d3],
    trailers: [
      'https://www.youtube.com/watch?v=trailer4',
      'https://www.youtube.com/watch?v=trailer5',
      'https://www.youtube.com/watch?v=trailer6',
      'https://www.youtube.com/watch?v=trailer1',
      'https://www.youtube.com/watch?v=trailer2',
      'https://www.youtube.com/watch?v=trailer3',
    ],
  },
  link3: {
    thumbnails: [d7, d8, d9, d6, d1, d1],
    trailers: [
      'https://www.youtube.com/watch?v=trailer7',
      'https://www.youtube.com/watch?v=trailer8',
      'https://www.youtube.com/watch?v=trailer9',
      'https://www.youtube.com/watch?v=trailer6',
      'https://www.youtube.com/watch?v=trailer1',
      'https://www.youtube.com/watch?v=trailer1',
    ],
  },
};

function Section() {
  const [thumbnails, setThumbnails] = useState(videoData.link1.thumbnails);
  const [trailers, setTrailers] = useState(videoData.link1.trailers);
  const [activeLink, setActiveLink] = useState('link1');

  const handleClick = (link) => {
    setThumbnails(videoData[link].thumbnails);
    setTrailers(videoData[link].trailers);
    setActiveLink(link);
  };

  const handleThumbnailClick = (index) => {
    const trailerLink = trailers[index];
    window.open(trailerLink, '_blank');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 mt-32">
      <div className="p-6 rounded-lg w-full max-w-5xl">
        <div className="flex flex-col md:flex-row justify-center mb-8 space-y-4 md:space-y-0 md:space-x-4">
          <button
            className={`relative text-white text-xl font-thin ${activeLink === 'link1' ? 'after:content-[""] after:block after:w-full after:h-1 after:bg-white after:absolute after:bottom-[-2px] after:left-0' : ''}`}
            onClick={() => handleClick('link1')}
          >
            TRENDING
          </button>
          <button
            className={`relative text-white text-xl font-thin ${activeLink === 'link2' ? 'after:content-[""] after:block after:w-full after:h-1 after:bg-white after:absolute after:bottom-[-2px] after:left-0' : ''}`}
            onClick={() => handleClick('link2')}
          >
            NEW ON DISNEY+
          </button>
          <button
            className={`relative text-white text-xl font-thin ${activeLink === 'link3' ? 'after:content-[""] after:block after:w-full after:h-1 after:bg-white after:absolute after:bottom-[-2px] after:left-0' : ''}`}
            onClick={() => handleClick('link3')}
          >
            COMING SOON
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
          {thumbnails.map((thumbnail, index) => (
            <img
              key={index}
              src={thumbnail}
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-auto shadow-lg transform hover:scale-105 transition-transform duration-300"
              onClick={() => handleThumbnailClick(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Section;
