import React from "react";
import myLogo from "../assests/logo.jpg";

const Navbar = () => {
  return (
    <div>
      {/* Combined Slogan and Navbar, fixed to the top */}
      <div className="fixed top-0 left-0 w-full z-50 bg-basebg text-letter">
        {/* Top Slogan Bar */}
        <div className="bg-slogan text-center py-0.2 text-sm font-semibold">
          WELCOME TO BELMIO PIZZA SHOP
        </div>

        {/* Main Navigation Bar */}
        <nav className="text-letter py-2 font-roboto">
          <div className="max-w-screen-xl mx-auto flex items-center justify-between px-24">
            {/* Logo */}
            <div className="flex items-center space-x-4">
              <img
                src={myLogo} // Your logo path
                alt="Logo"
                className="h-12 w-12 rounded-full object-cover"
              />
            </div>

            {/* Navigation Links */}
            <ul className="hidden md:flex items-center space-x-24 text-xs">
              <li>
                <a href="#" className="hover:text-gray-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Menu <span className="inline-block">&#9662;</span>
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Service <span className="inline-block">&#9662;</span>
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  About Us
                </a>
              </li>
            </ul>

            {/* Right Section */}
            <div className="flex items-center space-x-24 text-sm">
              {/* Cart */}
              <div className="relative">
                <a href="#" className="text-white hover:text-gray-300">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.38 2.4a1 1 0 00-.12.6v1a1 1 0 001 1h12a1 1 0 001-1v-1a1 1 0 00-.12-.6L17 13M7 13l4-8M17 13l-4-8M6 21h.01M18 21h.01"
                    ></path>
                  </svg>
                </a>
                <span className="absolute -top-2 -right-2 bg-white text-black text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center border-2 border-gray-300">
                  2
                </span>
              </div>

              {/* Login / Sign Up */}
              <div className="flex items-center space-x-2 text-sm">
                <button className="text-white bg-transparent px-4 py-2 rounded border-2 border-transparent hover:border-white transition duration-300">
                  LOGIN
                </button>

                <button
                  type="button"
                  className="text-white bg-gradient-to-br from-pink-500 to-orange-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-sm  px-5 py-2 text-center"
                >
                  Sign Up Now!
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
