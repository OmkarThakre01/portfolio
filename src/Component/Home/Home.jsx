import React from "react";
import "../Home/Home.css"; // Import CSS with the abstract brush styling
import { GrDownload } from "react-icons/gr";

const Home = () => {
  return (
    <section
      id="home"
      className="flex  justify-center h-screen text-center px-4 "
    >
      <div className="flex flex-col items-center justify-center  mt-[-5rem] w-full max-w-4xl  text-[#d3a646] text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Hello! I Am <span className="abstract-brush text-[#466cd3] font-Bebas">Omkar</span>
        </h1>
        <p className="font-semibold text-[#133644] mb-4 text-lg md:text-3xl w-full sm:w-[80%] md:w-[70%] lg:w-[70%]">
          I'M EXCITED TO SHOWCASE MY WORK AS A{" "}
          <span className="abstract-brush">
            FRONTEND 
          </span> DEVELOPER AND {" "}
          <span className="abstract-brush">
          UI DESIGNER         
           </span>
        </p>
        <p className=" md:text-md text-xl font font-bold text-blue-400 mb-8 w-full sm:w-[90%] md:w-[70%] lg:w-[60%]">
          I'm here to bring your digital ideas to life.
        </p>
        <button className="bg-[#466cd3] flex items-center justify-center gap-3 text-white px-4 md:px-6 py-4 md:py-3 rounded-sm text-sm md:text-lg font-medium  transition">
          Download Resume <GrDownload className="size-4" />
        </button>
      </div>
    </section>
  );
};

export default Home;
