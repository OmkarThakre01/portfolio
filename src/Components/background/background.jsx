import React from 'react';
import img1 from '../../assets/Decore.png';
import img2 from '../../assets/Decore2.png';

const Background = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0">
        {/* First Image with Responsive margin */}
        <div className="ml-[40%] sm:ml-[25rem] lg:ml-[50rem] xl:ml-[60rem]">
          <img
            src={img1}
            alt="Decorative background 1"
            className="w-full object-cover"
          />
        </div>
        {/* Second Image with Responsive Size */}
        <div className="mt-4">
          <img
            src={img2}
            alt="Decorative background 2"
            className="w-[50%] sm:w-[40%] md:w-[30%] lg:w-[20%] xl:w-[15%] h-auto  "
          />
        </div>
      </div>
    </div>
  );
};

export default Background;
