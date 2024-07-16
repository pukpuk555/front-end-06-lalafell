import React from "react";

function SummarySection({ totalPrice, totalQuantity }) {
  return (
    <div className="bg-white p-4 rounded mb-4 text-sm md:text-base">
      <h2 className="font-bold mb-2 text-base md:text-lg">Summary</h2>
      <div className="flex justify-between text-sm  md:text-base">
        <p>Quantity</p>
        <p>{totalQuantity}</p>
      </div>
      <div className="flex justify-between text-sm md:text-base">
        <p>Price</p>
        <p>{totalPrice} Bath</p>
      </div>
      <div className="flex justify-between font-bold text-sm md:text-base">
        <p>Total</p>
        <p>{totalPrice} Bath</p>
      </div>
    </div>
  );
}

export default SummarySection;
