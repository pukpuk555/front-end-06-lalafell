import React from "react";

const NavbarSection = () => {
  return (
    <div className="shadow-lg fixed top-0 w-screen content-center bg-white z-50 ">
      <nav className="max-w-5xl mx-auto">
        <div className="flex justify-between h-[80px] md:h-[100px] items-center lg:mx-0">
          <a
            href="#"
            className="text-xl md:text-3xl lg:text-4xl font-bold ml-2 md:ml-0"
          >
            Lalafell Keyboard
          </a>
          <div>
            <ul className="hidden md:flex md:justify-end text-lg md:text-xl lg:text-2xl space-x-4 md:space-x-6 lg:space-x-8">
              <li className="py-2 rounded-lg hover:underline">Our Product</li>
              <li className="py-2 rounded-lg hover:underline">Cart</li>
              <li className="py-2 rounded-lg hover:underline">Contact Us</li>
              <li className="rounded-lg">
                <button className="bg-black text-white py-2 px-4 lg:py-3 lg:px-6 rounded-lg hover:bg-black/80">
                  Sign In
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavbarSection;
