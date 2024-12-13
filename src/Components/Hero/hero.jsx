import React from 'react';
import img1 from '../../assets/Man1.png';
import img2 from '../../assets/Man1bg.png';

const Hero = () => {
  return (
    <div className="relative flex flex-col xl:flex-row items-center justify-center min-h-screen p-6 xl:p-12 space-y-2 xl:space-y-0">

      {/* Text Section */}
      <div className="flex flex-col items-center xl:items-start text-center xl:text-left space-y-2 order-2 xl:order-none xl:w-1/2 px-6 sm:px-8 md:px-12 lg:ml-0 xl:ml-[9rem]">
        <h1 className="text-[#6AB5E4] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-Press leading-tight">
          Hello! I Am Omkar
        </h1>
        <button className="bg-[#6AB5E4] text-[#000000] py-3 px-6 sm:py-4 sm:px-8 rounded transition duration-300 hover:bg-[#56A0D3]">
          Download Resume
        </button>
      </div>

      {/* Image Section */}
      <div className="relative w-full h-full flex justify-center xl:w-1/2 xl:px-0 sm:px-2 md:px-4">
        <div className="relative">
          <img
            src={img2}
            alt="Background"
            className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full sm:w-[80%] md:w-[90%] lg:w-[75%] xl:w-[100%] -z-5"
          />
          <img
            src={img1}
            alt="Foreground"
            className="relative w-[90%] sm:w-[70%] md:w-[85%] lg:w-[95%] xl:w-[100%] mx-auto"
          />
        </div>
      </div>

      {/* Additional Information */}
      <div className="flex flex-col items-center xl:items-start text-center xl:text-left space-y-2 xl:w-[70%] order-3 xl:order-none px-6 sm:px-8 md:px-12">
        <h2 className="text-[#DF6951] text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold font-Poppins uppercase">
          I'm excited to showcase my work as a frontend developer and UI designer
        </h2>
        <p className="text-[#B5C7C1] text-base sm:text-lg md:text-xl xl:text-[1.2rem] leading-relaxed">
          I'm here to bring your digital ideas to life.
        </p>
      </div>

    </div>
  );
};

export default Hero;
