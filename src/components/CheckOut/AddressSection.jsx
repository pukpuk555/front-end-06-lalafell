// src/components/CheckOut/AddressSection.js
import React from 'react';

function AddressSection({ address }) {
  return (
    <div className="bg-gray-100 p-4 rounded mb-4">
      <h2 className="font-bold mb-2 text-base md:text-lg">Your Address</h2>
      <div>
        <p>{address.name} Tel. {address.phone}</p>
        <p>{address.address}</p>
      </div>
      <div className="flex justify-end">
        <button className="text-blue-500 hover:underline text-sm md:text-base">Edit</button>
      </div>
    </div>
  );
}

export default AddressSection;








