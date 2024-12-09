import React, { useState } from 'react';
import { RiMenu4Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const navItems = [
    { label: "Home", href: "#" },
    { label: "About", href: "#" },
    { label: "Projects", href: "#" },
    { label: "Contact", href: "#" },
  ];

  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <div className="absolute top-[1rem] left-0 w-full z-50">
      <nav className="py-4 ">
        <div className="container px-4 mx-auto">
          <div className="flex justify-between items-center">
            {/* Brand Name */}
            <div>
              <a href="#" className="text-[#D84910] text-4xl font-Great">
                Omkar
              </a>
            </div>

            {/* Desktop Navigation */}
            <ul className="hidden lg:flex text-white text-base font-medium space-x-8">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Mobile Menu Toggle */}
            <div className="lg:hidden text-white text-2xl">
              <button onClick={toggleNavbar} aria-label="Toggle navigation">
                {mobileDrawerOpen ? <IoMdClose /> : <RiMenu4Fill />}
              </button>
            </div>
          </div>

          {/* Mobile Drawer */}
          {mobileDrawerOpen && (
            <div className="fixed top-20 left-0 w-full bg-[#141922] text-white p-6 flex flex-col items-center lg:hidden">
              <ul className="space-y-6 text-lg">
                {navItems.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.href}
                      className="hover:text-[#D84910] transition-colors"
                      onClick={toggleNavbar}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
