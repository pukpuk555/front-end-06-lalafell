import React, { useState } from "react";
import AddressCard from "./AddressCard";
import AddAddressForm from "./AddAddressForm";

function AddressBook() {
  const [mogAddress, setMogAddress] = useState([
    {
      id: "a1",
      name: "John",
      lastName: "Doe",
      tel: "0123456789",
      address: "123 Moo 4",
      subDistrict: "Mueng",
      district: "Mueng",
      province: "Surin",
      postal: "1234",
    },
    {
      id: "a2",
      name: "Jane",
      lastName: "Doe",
      tel: "0987654321",
      address: "432 Moo 1",
      subDistrict: "Mueng",
      district: "Mueng",
      province: "Surin",
      postal: "1234",
    },
  ]);
  const [toggleForm, setToggleForm] = useState(false);
  console.log(mogAddress);

  const addAddress = (newAddress) => {
    setMogAddress([
      ...mogAddress,
      {
        ...newAddress,
        id: `a${mogAddress.length + 1}`,
      },
    ]);
  };

  const deleteAddress = (id) => {
    const updatedAddress = mogAddress.filter((mog) => mog.id !== id);
    setMogAddress(updatedAddress);
  };

  const handleToggle = (e) => {
    e.preventDefault();
    setToggleForm(!toggleForm);
  };

  return (
    <div>
      <div className="w-auto mb-[50px]">
        <h2 className="text-4xl font-bold pb-3">Your Account</h2>
        <div className="lg:w-[700px] w-[500px] md:h-[450px] border-[1px] border-black rounded-xl h-[450px] px-4 overflow-auto">
          <div className="w-full flex justify-between items-center h-[60px] sticky top-0 bg-white">
            <h3 className="text-2xl font-semibold my-3">
              Manage your address book
            </h3>
            <button
              onClick={handleToggle}
              className="px-3 h-10 border rounded-lg font-medium bg-black text-white"
            >
              Add More
            </button>
          </div>
          <div>
            {mogAddress.map((address) => (
              <AddressCard
                key={address.id}
                id={address.id}
                name={address.name}
                lastName={address.lastName}
                tel={address.tel}
                address={address.address}
                sub={address.subDistrict}
                district={address.district}
                province={address.province}
                postal={address.postal}
                deleteAddress={deleteAddress}
              />
            ))}
          </div>
        </div>
      </div>
      {toggleForm && (
        <AddAddressForm handleToggle={handleToggle} addAddress={addAddress} />
      )}
    </div>
  );
}

export default AddressBook;
