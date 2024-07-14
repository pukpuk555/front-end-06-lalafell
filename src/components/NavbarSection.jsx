import axiosInstance from "@/utils/axiosInstance";
import React, { useEffect, useState } from "react";
import {
  FaHome,
  FaSearch,
  FaShoppingCart,
  FaBell,
  FaUserCircle,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const NavbarSection = () => {
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [admin, setAdmin] = useState(false);
  const isToken = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    try {
      const response = await axiosInstance.get("/profile");
      if (response.data) {
        setAdmin(response.data.myUser.isAdmin);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    console.log("User logged out");
    navigate("/");
  };

  const handleUserMenuToggle = () => {
    setUserMenuOpen(!userMenuOpen);
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
            {!isToken ? (
              <Link
                to="/signin"
                className="bg-black text-white py-2 px-4  rounded-lg hover:bg-black/80"
              >
                Sign In
              </Link>
            ) : (
              <Link
                to="/account/profile"
                className="bg-black text-white py-2 px-4  rounded-lg hover:bg-black/80"
              >
                Profile
              </Link>
            )}
            {admin && (
              <Link
                to="/admin"
                className="bg-black text-white py-2 px-4  rounded-lg hover:bg-black/80"
              >
                Admin
              </Link>
            )}
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
        <div
          className="fixed inset-0 bg-black bg-opacity-25 z-40"
          onClick={handleUserMenuToggle}
        ></div>
      )}
      <div
        className={`fixed right-0 bottom-20 bg-white shadow-lg rounded-lg p-4 z-50 ${userMenuOpen ? "block" : "hidden"
          }`}
      >
        <ul>
          {!isToken ? (
            <li>
              <Link
                to="/signin"
                className="block py-2"
                onClick={handleUserMenuToggle}
              >
                Sign In
              </Link>
            </li>
          ) : (
            <>
              <li>
                <Link
                  to="/account/profile"
                  className="block py-2"
                  onClick={handleUserMenuToggle}
                >
                  Your Profile
                </Link>
              </li>
              <li>
                <Link
                  to="/account/address"
                  className="block py-2"
                  onClick={handleUserMenuToggle}
                >
                  Manage Addressbook
                </Link>
              </li>
              <li>
                <Link
                  to="/account/payment"
                  className="block py-2"
                  onClick={handleUserMenuToggle}
                >
                  Credit/Debit Card
                </Link>
              </li>
              <li>
                <Link
                  to="/account/order"
                  className="block py-2"
                  onClick={handleUserMenuToggle}
                >
                  Your Order
                </Link>
              </li>
              <li>
                <button
                  onClick={handleLogout}
                  className="block py-2 w-full text-left"
                >
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
