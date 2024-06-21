import React from "react";

function AccountNav() {
  return (
    <div className="border-[1px] border-black rounded-xl w-1/4 hidden md:flex">
      <div className="m-3">
        <h2 className="text-2xl font-bold">Your Account</h2>
        <div className="m-3 flex flex-col">
          <a
            href="#"
            className="text-xl font-medium py-3 pl-1 rounded-lg transition duration-300 hover:bg-gray-400"
          >
            Your Profile
          </a>
          <a
            href="#"
            className="text-xl font-medium py-3 pl-1 rounded-lg transition duration-300 hover:bg-gray-400"
          >
            Manage Addressbook
          </a>
          <a
            href="#"
            className="text-xl font-medium py-3 pl-1 rounded-lg transition duration-300 hover:bg-gray-400"
          >
            Credit/Debit Card
          </a>
          <a
            href="#"
            className="text-xl font-medium py-3 pl-1 rounded-lg transition duration-300 hover:bg-gray-400"
          >
            Your Order
          </a>
        </div>
      </div>
    </div>
  );
}

export default AccountNav;
