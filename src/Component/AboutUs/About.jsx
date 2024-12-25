import React from "react";
import Img2 from "../../assets/Img2.png";

const About = () => {
  return (
    <section className="py-16 px-4 sm:px-8 md:px-16 lg:px-32 mt-[-4rem] sm:mt-12 md:mt-16 lg:mt-0">
      
      <h1 className="text-4xl font-bold mb-6 text-center">About Us</h1>
      <div className="flex flex-col lg:flex-row justify-center items-center px-4 lg:px-10 py-10">
        {/* Left Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <img
            src={Img2}
            alt="Omkar UI Design Showcase"
            className="w-[80%] sm:w-[90%] md:w-[80%] lg:w-[90%] max-w-lg"
          />
        </div>

        {/* Right Text Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left flex flex-col justify-center items-center lg:items-start mt-8 lg:mt-0">
          <p className="text-[#333] text-base sm:text-lg md:text-xl lg:text-lg mb-6 leading-relaxed">
            Hi, I’m Omkar, a passionate Frontend Developer and UI/UX Designer. I specialize in creating interactive and responsive web pages using HTML, CSS, JavaScript, along with React.js, Next.js, and Tailwind CSS. My goal is to build websites that are not only visually appealing but also provide a seamless and engaging user experience.
            <br />
            As a beginner in the industry, I’m eager to expand my skills and take on new challenges.
          </p>
          <button className="bg-[#7a5cf3] text-white px-6 py-3 rounded-md hover:bg-[#6445c2] transition-all duration-300">
            View More
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
