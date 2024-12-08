import React from 'react';
import img1 from '../../assets/Man1.png';
import img2 from '../../assets/Man1bg.png';

const Hero = () => {
  return (
    <div className="relative flex flex-col lg:flex-row items-center justify-center min-h-screen p-4 lg:p-8 space-y-6 lg:space-y-0 lg:space-x-8">

      {/* Text Section */}
      <div className="flex flex-col items-center text-center space-y-4 order-2 lg:order-none lg:w-1/2 px-4 sm:px-6 md:px-8 lg:px-0 ml-0 lg:ml-[5rem]">
        <div>
          <h1 className="text-[#6AB5E4] text-2xl sm:text-4xl md:text-3xl lg:text-3xl font-Press leading-tight">
            Hello! I Am Omkar
          </h1>
        </div>
        <div>
          <button className="bg-[#6AB5E4] text-[#000000] py-2 px-4 sm:py-3 sm:px-6 rounded transition duration-300 hover:bg-blue-600">
            Download Resume
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="relative w-full flex justify-center order-1 lg:order-none lg:w-1/2">
        {/* Background Image */}
        <img
          src={img2}
          alt="Background"
          className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[100%] sm:w-[85%] md:w-[75%] lg:w-[60%] -z-10"
        />
        {/* Foreground Image */}
        <img
          src={img1}
          alt="Foreground"
          className="relative w-[90%] sm:w-[70%] md:w-[70%] lg:w-[90%]"
        />
      </div>

      {/* Additional Information */}
      <div className="flex flex-col items-center text-center space-y-4 order-3 xl:text-left lg:w-[80%] md:w-[70%] lg:px-6 px-4 sm:px-6 md:px-8">
        <h2 className="text-[#DF6951] text-[1rem] sm:text-1xl md:text-3xl lg:text-3xl font-semibold font-Poppins uppercase text-center md:text-left leading-tight">
          I'm excited to showcase my work as a frontend developer and UI designer
        </h2>
        <p className="text-[#B5C7C1] text-1xl sm:text-base md:text-lg text-center md:text-left leading-relaxed">
          I'm here to bring your digital ideas to life.
        </p>
      </div>
    </div>
  );
};

export default Hero;
