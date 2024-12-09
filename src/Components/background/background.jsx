import React from 'react';
import img1 from '../../assets/Decore.png';
import img2 from '../../assets/Decore2.png';

const Background = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0">
        {/* First Image with Responsive margin */}
        <div className="ml-[16%] md:ml-[20%] lg:ml-[64rem]">
          <img src={img1} alt="Decorative background 1" className="w-full object-cover" />
        </div>
        {/* Second Image with responsive size */}
        <div className="w-[25rem] h-[4rem] md:w-[20rem] sm:h-[3rem]">
          <img src={img2} alt="Decorative background 2" className="w-full h-auto object-contain" />
        </div>
      </div>
    </div>
  );
};

export default Background;
