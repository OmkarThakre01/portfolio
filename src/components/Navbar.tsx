
import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`sticky top-0 z-10 transition-all duration-300 ${isScrolled ? 'bg-white shadow-sm' : 'bg-transparent'}`}>
      <div className="container flex items-center justify-between py-4">
        <div className="font-bold text-lg">KeyCode</div>
        
        <div className="hidden md:flex items-center space-x-10">
          <a href="#home" className="nav-link active">Home</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#blog" className="nav-link">Blog</a>
          <a href="#testimonials" className="nav-link">Testimonials</a>
        </div>
        
        <button className="p-2 rounded-full hover:bg-secondary transition-colors">
          <Moon className="h-5 w-5" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
