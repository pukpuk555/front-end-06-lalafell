import React, { useEffect, useState } from "react";

function AddAddressForm({ handleToggle, addAddress }) {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [tel, setTel] = useState("");
  const [address, setAddress] = useState("");
  const [subDistrict, setSubDistrict] = useState("");
  const [district, setDistrict] = useState("");
  const [province, setProvince] = useState("");
  const [postal, setPostal] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newAddress = {
      name,
      lastName,
      tel,
      address,
      subDistrict,
      district,
      province,
      postal,
    };
    addAddress(newAddress);
    setName("");
    setLastName("");
    setTel("");
    setAddress("");
    setSubDistrict("");
    setDistrict("");
    setProvince("");
    setPostal("");
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md relative">
        <div className="flex justify-between p-3 bg-black rounded-t-lg">
          <h3 className="font-bold text-xl text-white">Add Address</h3>
          <button
            onClick={handleToggle}
            className="font-bold text-xl text-white"
          >
            Close
          </button>
        </div>
        <form onSubmit={handleSubmit} className="p-3">
          <div className="flex gap-3">
            <div>
              <label htmlFor="name" className="font-medium text-lg">
                Name
              </label>
              <br />
              <input
                id="name"
                name="name"
                required
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 mb-2 rounded-md border-[1px] border-black w-[200px] h-[30px]"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="font-medium text-lg">
                Last Name
              </label>
              <br />
              <input
                id="lastName"
                name="lastName"
                required
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="mt-1 mb-2 rounded-md border-[1px] border-black w-[200px] h-[30px]"
              />
            </div>
          </div>
          <div>
            <label htmlFor="tel" className="font-medium text-lg">
              Tel
            </label>
            <br />
            <input
              id="tel"
              name="tel"
              required
              type="text"
              value={tel}
              onChange={(e) => setTel(e.target.value)}
              className="mt-1 mb-2 rounded-md border-[1px] border-black w-[200px] h-[30px]"
            />
            <div>
              <label htmlFor="sub" className="font-medium text-lg">
                Address
              </label>
              <br />
              <input
                id="address"
                name="address"
                required
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="mt-1 mb-2 rounded-md border-[1px] border-black w-[330px] h-[30px]"
              />
            </div>
            <div className="flex gap-3">
              <div>
                <label htmlFor="subDistrict" className="font-medium text-lg">
                  Sub District
                </label>
                <br />
                <input
                  id="subDistrict"
                  name="subDistrict"
                  required
                  type="text"
                  value={subDistrict}
                  onChange={(e) => setSubDistrict(e.target.value)}
                  className="mt-1 mb-2 rounded-md border-[1px] border-black w-[200px] h-[30px]"
                />
              </div>
              <div>
                <label htmlFor="district" className="font-medium text-lg">
                  District
                </label>
                <br />
                <input
                  id="district"
                  name="district"
                  required
                  type="text"
                  value={district}
                  onChange={(e) => setDistrict(e.target.value)}
                  className="mt-1 mb-2 rounded-md border-[1px] border-black w-[200px] h-[30px]"
                />
              </div>
            </div>
            <div className="flex gap-3">
              <div>
                <label htmlFor="province" className="font-medium text-lg">
                  Province
                </label>
                <br />
                <input
                  id="province"
                  name="province"
                  required
                  type="text"
                  value={province}
                  onChange={(e) => setProvince(e.target.value)}
                  className="mt-1 mb-2 rounded-md border-[1px] border-black w-[200px] h-[30px]"
                />
              </div>
              <div>
                <label htmlFor="postal" className="font-medium text-lg">
                  Postal Code
                </label>
                <br />
                <input
                  id="postal"
                  name="postal"
                  required
                  type="text"
                  value={postal}
                  onChange={(e) => setPostal(e.target.value)}
                  className="mt-1 mb-2 rounded-md border-[1px] border-black w-[200px] h-[30px]"
                />
              </div>
            </div>
          </div>
          <button
            type="submit"
            class="Frame w-32 h-12 px-6 py-3.5 bg-black rounded-lg shadow justify-center items-center gap-2 inline-flex mt-5"
          >
            <div className="Change text-white text-base font-medium font-['Inter'] leading-normal">
              Submit
            </div>
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddAddressForm;
