import React, { useState } from "react";

function AddCreditCardForm({ addCard, handleToggle }) {
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [number3, setNumber3] = useState("");
  const [number4, setNumber4] = useState("");
  const [type, setType] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCard = { number1, number2, number3, number4, type };
    addCard(newCard);
    setNumber1("");
    setNumber2("");
    setNumber3("");
    setNumber4("");
    setType("");
  };

  const handleTypeChange = (e) => {
    setType(e.target.value);
  };

  const handleInputChange = (setter) => (e) => {
    if (e.target.value.length <= 4) {
      setter(e.target.value);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md relative">
        <div className="flex justify-between p-3 bg-black rounded-t-lg">
          <h3 className="font-bold text-xl text-white">
            Add Credit/debit Card
          </h3>
          <button
            onClick={handleToggle}
            className="font-bold text-xl text-white"
          >
            Close
          </button>
        </div>
        <form onSubmit={handleSubmit} className="p-3">
          <div className="mb-3">
            <select
              value={type}
              onChange={handleTypeChange}
              required
              className="select select-bordered w-full max-w-xs border-black"
            >
              <option value="" disabled selected className="text-black">
                Card Type
              </option>
              <option value="Visa" className="text-black">
                Visa
              </option>
              <option value="MasterCard" className="text-black">
                Master Card
              </option>
            </select>
          </div>
          <div className="mb-3">
            <h3 className="font-medium">Card Number</h3>
            <div className="flex gap-3">
              <input
                type="text"
                value={number1}
                required
                onChange={handleInputChange(setNumber1)}
                className="border-[1px] rounded-lg border-black w-14 flex justify-center"
              />
              <input
                type="text"
                value={number2}
                required
                onChange={handleInputChange(setNumber2)}
                className="border-[1px] rounded-lg border-black w-14 flex justify-center"
              />
              <input
                type="text"
                value={number3}
                required
                onChange={handleInputChange(setNumber3)}
                className="border-[1px] rounded-lg border-black w-14 flex justify-center"
              />
              <input
                type="text"
                value={number4}
                required
                onChange={handleInputChange(setNumber4)}
                className="border-[1px] rounded-lg border-black w-14 flex justify-center"
              />
            </div>
          </div>
          <div className="flex gap-3">
            <div>
              <h3 className="font-medium">Expire Date</h3>
              <input type="month" />
            </div>
            <div>
              <h3 className="font-medium">CCV</h3>
              <input
                type="num"
                maxlength="3"
                className="border-[1px] border-black w-10 rounded-lg"
              />
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

export default AddCreditCardForm;
