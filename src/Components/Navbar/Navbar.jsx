import React from 'react';

const Navbar = () => {
  const navItems = [
    { label: "Home", href: "#" },
    { label: "About", href: "#" },
    { label: "Projects", href: "#" },
    { label: "Contact", href: "#" },
  ];

  return (
    <div className="absolute top-0 left-0 w-full z-50  bg-opacity-75">
      <nav className="py-4">
        <div className="container px-4 mx-auto">
          <div className="flex justify-between items-center">
            {/* Brand Name */}
            <div className="text-[#D84910] text-3xl font-Great">
              <a href="#">Omkar</a>
            </div>

            {/* Hamburger Menu for Mobile */}
            <div className="lg:hidden">
              <button className="text-white focus:outline-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </div>

            {/* Navigation Links */}
            <ul className="hidden lg:flex text-white text-base font-medium space-x-8">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="hover:text-[#D84910] transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
