import React, { useState } from "react";
import {
  FaHome,
  FaSearch,
  FaShoppingCart,
  FaBell,
  FaUserCircle,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const NavbarSection = () => {
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Replace with actual authentication logic

  const handleUserMenuToggle = () => {
    setUserMenuOpen(!userMenuOpen);
  };

  const handleLogout = () => {
    // Add your logout logic here
    // Example: Clear tokens, update authentication state
    setIsLoggedIn(false);
    setUserMenuOpen(false);
    console.log("User logged out");
  };

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
          <div className="hidden md:flex md:justify-end text-xl md:text-2xl space-x-4 md:space-x-6 lg:space-x-8">
            <Link to="/productlist" className="py-2 rounded-lg hover:underline">
              Our Product
            </Link>
            <Link to="/cart" className="py-2 rounded-lg hover:underline">
              Cart
            </Link>
            <Link to="#" className="py-2 rounded-lg hover:underline">
              Contact Us
            </Link>
            <Link
              to="/account/profile"
              className="bg-black text-white py-2 px-4  rounded-lg hover:bg-black/80"
            >
              Sign In
            </Link>
          </div>
        </div>
      </nav>
      {/* for mobile */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-300 shadow-lg z-50">
        <ul className="flex justify-around py-4">
          <Link to="/">
            <FaHome className="h-6 w-6" />
          </Link>
          <Link to="/productlist">
            <FaSearch className="h-6 w-6" />
          </Link>
          <Link to="/cart">
            <FaShoppingCart className="h-6 w-6" />
          </Link>
          <Link to="#">
            <FaBell className="h-6 w-6" />
          </Link>
          <button onClick={handleUserMenuToggle}>
            <FaUserCircle className="h-6 w-6" />
          </button>
        </ul>
      </nav>
      {userMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-25 z-40" onClick={handleUserMenuToggle}></div>
      )}
      <div
        className={`fixed right-0 bottom-20 bg-white shadow-lg rounded-lg p-4 z-50 ${
          userMenuOpen ? "block" : "hidden"
        }`}
      >
        <ul>
          {!isLoggedIn ? (
            <li>
              <Link to="/signin" className="block py-2" onClick={handleUserMenuToggle}>
                Sign In
              </Link>
            </li>
          ) : (
            <>
              <li>
                <Link to="/profile" className="block py-2" onClick={handleUserMenuToggle}>
                  Your Profile
                </Link>
              </li>
              <li>
                <Link to="/addressbook" className="block py-2" onClick={handleUserMenuToggle}>
                  Manage Addressbook
                </Link>
              </li>
              <li>
                <Link to="/creditcard" className="block py-2" onClick={handleUserMenuToggle}>
                  Credit/Debit Card
                </Link>
              </li>
              <li>
                <Link to="/orders" className="block py-2" onClick={handleUserMenuToggle}>
                  Your Order
                </Link>
              </li>
              <li>
                <button onClick={handleLogout} className="block py-2 w-full text-left">
                  Log Out
                </button>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default NavbarSection;


