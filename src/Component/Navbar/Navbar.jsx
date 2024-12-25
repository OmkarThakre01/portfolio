import React, { useState } from "react";
import { RiMenu4Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const navItems = [
    { label: "Home", href: "./Home" },
    { label: "About", href: "#" },
    { label: "Projects", href: "#" },
    { label: "Contact", href: "#" },
  ];

  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen((prevState) => !prevState);
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50"> {/* Changed to fixed */}
      <nav className="py-4 bg-[#d6eaff] "> {/* Adjusted padding and added bg color */}
        <div className="container px-4 mx-auto">
          <div className="flex justify-between items-center">
            {/* Brand Name */}
            <div>
              <a
                href="#"
                className="text-[#d4712f] text-4xl font-Bebas ml-[1rem] sm:ml-[3rem] lg:ml-[5rem] xl:ml-[10rem]"
              >
                OMKAR
              </a>
            </div>

            {/* Desktop Navigation */}
            <ul className="hidden lg:flex text-[#466cd3] text-base font-Parkinsans font-medium space-x-8 mr-40">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>

            {/* Mobile Menu Toggle */}
            <div className="lg:hidden text-black text-2xl cursor-pointer">
              <button onClick={toggleNavbar} aria-label="Toggle navigation">
                {mobileDrawerOpen ? <IoMdClose /> : <RiMenu4Fill />}
              </button>
            </div>
          </div>

          {/* Mobile Drawer */}
          {mobileDrawerOpen && (
            <div className="fixed top-[60px] left-0 w-full bg-[#c8d7ff] text-[#331811] p-6 flex flex-col items-center lg:hidden overflow-hidden"> {/* Adjusted top */}
              <ul className="space-y-6 text-lg">
                {navItems.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.href}
                      className=" transition-colors cursor-pointer"
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