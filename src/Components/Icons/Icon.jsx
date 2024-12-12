import React from "react";
import img1 from "../../assets/icons/react.png";
import img2 from "../../assets/icons/html.png";
import img3 from "../../assets/icons/css.png";
import img4 from "../../assets/icons/js.png";
import img5 from "../../assets/icons/nextjs.png";
import img6 from "../../assets/icons/tailwind.png";
import img7 from "../../assets/icons/tailwind.png";
import img8 from "../../assets/icons/tailwind.png";

const Icon = () => {
  const icons = [
    { name: "React", src: img1 },
    { name: "HTML", src: img2 },
    { name: "CSS", src: img3 },
    { name: "JavaScript", src: img4 },
    { name: "Next.js", src: img5 },
    { name: "Tailwind CSS", src: img6 },
    { name: "MongoDB", src: img7 },
    { name: "Redux", src: img8 },
  ];

  return (
    <div className="absolute inset-0 flex justify-center items-center mt-[56.5rem] sm:mt-[50rem] md:mt-[52rem] lg:mt-[55rem] xl:mt-[35rem]">
      <div className="flex flex-wrap gap-5 justify-center">
        {icons.map((icon, index) => (
          <div
            key={index}
            className="w-16 h-16 sm:w-14 sm:h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20 bg-[#251C31] flex items-center justify-center rounded-full shadow-lg hover:scale-105 transition-transform"
          >
            <img
              src={icon.src}
              alt={icon.name}
              className="w-10 h-10 sm:w-8 sm:h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Icon;
