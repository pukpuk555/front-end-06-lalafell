import React from "react";

const Footer = () => {
  return (
    <footer className="container mx-auto max-w-5xl flex items-center justify-between text-sm pt-4 pb-20 md:py-4 md:bottom-0 mt-auto border-t-2 border-black  md:mb-0">
      <p className="flex-none text-gray-700 text-l">Lalafell Keyboard</p>
      <nav className="flex flex-grow justify-end">
        <ul className="flex flex-col text-gray-700 text-m">
          <li className="mb-2">
            <p className="font-bold">Email</p>
            <a
              href="mailto:lalafel.keyboard@gmail.com"
              className="hover:underline"
            >
              lalafel.keyboard@gmail.com
            </a>
          </li>
          <li>
            <p className="font-bold">Tel.</p>
            <a href="tel:0123133331" className="hover:underline">
              0123133331
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;