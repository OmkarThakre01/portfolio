import React from "react";
import Img from "../../assets/Img.png";
import Img1 from "../../assets/Img1.png";
import { GrDownload } from "react-icons/gr";

const Home = () => {
  return (
    <section
      id="home"
      className="flex flex-col lg:flex-row justify-center items-center h-screen text-center px-4 bg-cover bg-center"
      style={{
        backgroundImage: `url(${Img})`,
      }}
    >
      {/* Left Content Section */}
      <div className="flex flex-col items-center lg:items-start justify-center w-full lg:w-1/2 max-w-4xl text-[#d3a646] text-center lg:text-left mt-12 sm:mt-[15rem] md:mt-[10rem] lg:mt-0  lg:ml-[8.7rem]">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
          Hello! I Am{" "}
          <span className="abstract-brush text-[#466cd3] font-Bebas">
            Omkar
          </span>
        </h1>
        <p className="font-semibold text-[#133644] mb-4 text-lg sm:text-xl md:text-2xl lg:text-3xl w-full sm:w-[85%] md:w-[75%] lg:w-[90%] ">
          I'M EXCITED TO SHOWCASE MY WORK AS A{" "}
          <span className="abstract-brush">FRONTEND</span> DEVELOPER AND{" "}
          <span className="abstract-brush">UI DESIGNER</span>
        </p>
        <p className="text-blue-400 mb-8 text-base sm:text-lg md:text-xl font-bold w-full sm:w-[90%] md:w-[80%] lg:w-[90%]">
          I'm here to bring your digital ideas to life.
        </p>
        <button className="bg-[#466cd3] flex items-center justify-center gap-3 text-white px-4 sm:px-5 md:px-6 py-3 sm:py-4 rounded-md text-sm sm:text-base md:text-lg font-medium hover:bg-[#3b5db2] transition">
          Download Resume <GrDownload className="size-4" />
        </button>
      </div>

      {/* Right Image Section */}
      <div className="w-full lg:w-1/2 flex justify-center items-center mt-8 sm:mt-12 md:mt-16 lg:mt-0 lg:mr-20">
        <img
          src={Img1}
          alt="Omkar UI Design Showcase"
          className="w-[90%] sm:w-[90%] md:w-[50%] lg:w-[90%] max-w-lg ml-4 sm:ml-6 md:ml-8 lg:ml-12"
        />
      </div>
    </section>
  );
};

export default Home;
