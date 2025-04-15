
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="hero-gradient py-20 md:py-28">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Hi, I'm Omkar </h1>
          <h2 className="text-xl md:text-2xl font-medium text-foreground/80 mb-6">UI/UX Designer & Full-Stack Developer</h2>
          <p className="text-foreground/70 mb-8">
            Specialized in creating beautiful, functional websites and mobile apps. With expertise in React, React Native, and modern web technologies.
          </p>
          <a href="#projects" className="btn-primary inline-flex items-center">
            View Projects <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
        <div className="relative">
          <img 
            src="https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_1280.jpg" 
            alt="Developer workspace" 
            className="rounded-lg shadow-lg w-full"
          />
          <div className="absolute -top-4 -left-4 p-2 bg-white/80 backdrop-blur rounded-lg shadow">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-10 h-10" />
          </div>
          <div className="absolute top-1/4 -right-4 p-2 bg-white/80 backdrop-blur rounded-lg shadow">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" className="w-10 h-10" />
          </div>
          <div className="absolute bottom-10 left-1/3 p-2 bg-white/80 backdrop-blur rounded-lg shadow">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="Figma" className="w-10 h-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
