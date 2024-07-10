import React from "react";
import { Link } from "react-router-dom";

function AccountNav() {
  return (
    <div className="border-[1px] border-black rounded-xl w-1/4 hidden md:flex">
      <div className="m-3">
        <h2 className="text-2xl font-bold">Your Account</h2>
        <div className="m-3 flex flex-col">
          <Link
            to="/account/profile"
            className="text-xl font-medium py-3 pl-1 rounded-lg transition duration-300 hover:bg-gray-400"
          >
            Your Profile
          </Link>
          <Link
            to="/account/address"
            className="text-xl font-medium py-3 pl-1 rounded-lg transition duration-300 hover:bg-gray-400"
          >
            Manage Addressbook
          </Link>
          <Link
            to="/account/payment"
            className="text-xl font-medium py-3 pl-1 rounded-lg transition duration-300 hover:bg-gray-400"
          >
            Credit/Debit Card
          </Link>
          <Link
            to="/account/order"
            className="text-xl font-medium py-3 pl-1 rounded-lg transition duration-300 hover:bg-gray-400"
          >
            Your Order
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AccountNav;
