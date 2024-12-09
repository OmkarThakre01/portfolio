import React from 'react';
import img1 from '../../assets/Man1.png';
import img2 from '../../assets/Man1bg.png';

const Hero = () => {
  return (
    <div className="absolute flex flex-row items-center justify-center min-h-screen p-4 lg:p-8 space-y-8">
      {/* Text Section */}
      <div className="flex flex-col items-center lg:w-2/3 text-center space-y-4">
        <h1 className="text-[#6AB5E4] text-4xl font-bold">Hello! I Am Omkar</h1>
        <button className="bg-[#6AB5E4] text-white py-2 px-4 rounded hover:bg-[#4a93c6] transition">
          Download Resume
        </button>
      </div>

      {/* Image Section */}
      <div className="relative w-full flex justify-center">
        <img
          src={img2}
          alt="Background"
          className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[80%] sm:w-[60%] lg:w-[50%] -z-10"
        />
        <img
          src={img1}
          alt="Foreground"
          className="relative w-[80%] sm:w-[60%] lg:w-[50%]"
        />
      </div>

      {/* Additional Information */}
      <div className=" flex flex-col items-center text-center space-y-2">
        <h2 className="text-[#DF6951] text-xl font-semibold">
          I'm excited to showcase my work as a frontend developer and UI designer
        </h2>
        <p className="text-[#B5C7C1] text-lg">
          I'm here to bring your digital ideas to life.
        </p>
      </div>
    </div>
  );
};

export default Hero;
