import React from "react";
import {
  FaHome,
  FaSearch,
  FaShoppingCart,
  FaBell,
  FaUserCircle,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const NavbarSection = () => {
  return (
    <div className="shadow-lg fixed top-0 w-screen bg-white z-50">
      <nav className="lg:w-[1024px] w-screen mx-auto">
        <div className="flex h-[80px] md:h-[100px] mx-4 lg:mx-0 md:justify-between justify-center items-center">
          <Link
            to="/"
            className="text-3xl md:text-4xl font-bold ml-2 md:ml-0 text-center"
          >
            Lalafell Keyboard
          </Link>
          <div className="hidden md:flex md:justify-end text-xl md:text-2xl  space-x-4 md:space-x-6 lg:space-x-8">
            <Link to="/productlist" className="py-2 rounded-lg hover:underline">
              Our Product
            </Link>
            <a href="#" className="py-2 rounded-lg hover:underline">
              Cart
            </a>
            <a href="#" className="py-2 rounded-lg hover:underline">
              Contact Us
            </a>
            <Link to="/account" className="bg-black text-white py-2 px-4  rounded-lg hover:bg-black/80">
              Sign In
            </Link>
          </div>
        </div>
      </nav>
      {/* for mobile */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-300 shadow-lg z-50">
        <ul className="flex justify-around py-4">
          <a href="#">
            <FaHome className="h-6 w-6" />
          </a>
          <a href="#">
            <FaSearch className="h-6 w-6" />
          </a>
          <a href="#">
            <FaShoppingCart className="h-6 w-6" />
          </a>
          <a href="#">
            <FaBell className="h-6 w-6" />
          </a>
          <a href="#">
            <FaUserCircle className="h-6 w-6" />
          </a>
        </ul>
      </nav>
    </div>
  );
};

export default NavbarSection;
