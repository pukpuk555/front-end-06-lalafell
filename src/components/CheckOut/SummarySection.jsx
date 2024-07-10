import React from 'react';

function SummarySection({ items }) {
  const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce((sum, item) => sum + item.quantity * item.price, 0).toFixed(2);

  return (
    <div className="bg-white p-4 rounded mb-4 text-sm md:text-base">
      <h2 className="font-bold mb-2 text-base md:text-lg">Summary</h2>
      <div className="flex justify-between text-sm  md:text-base">
        <p>Quantity</p>
        <p>{totalQuantity}</p>
      </div>
      <div className="flex justify-between text-sm md:text-base">
        <p>Price</p>
        <p>${totalPrice}</p>
      </div>
      <div className="flex justify-between font-bold text-sm md:text-base">
        <p>Total</p>
        <p>${totalPrice}</p>
      </div>
    </div>
  );
}

export default SummarySection;



