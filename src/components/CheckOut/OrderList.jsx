// src/components/CheckOut/OrderList.js
import React from 'react';

function OrderList({ items }) {
  return (
    <div className="bg-white p-4 rounded mb-4 text-sm md:text-base">
      <h2 className="md:hidden font-bold mb-2 text-base md:text-lg">Product</h2>
      <div className="md:hidden">
        {items.map((item, index) => (
          <div key={index} className="flex items-center mb-4">
            <img src={item.img} alt={item.name} className="w-24 h-24 mr-4" />
            <div className="flex-grow">
              <p className="font-semibold text-sm d:text-base">{item.name}</p>
              <p className="text-sm md:text-base">{item.describe}</p>
              <p className="text-sm md:text-base">Quantity: {item.quantity}</p>
              <p className="text-sm md:text-base">Price: ${parseFloat(item.price).toFixed(2)}</p>
              <p className="text-sm md:text-base">Total: ${(item.quantity * parseFloat(item.price)).toFixed(2)}</p>  
            </div>
          </div>
        ))}
      </div>
      <div className="hidden md:block">
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left font-bold md:text-lg">Product</th>
              <th className="px-4 py-2 font-bold md:text-lg">Quantity</th>
              <th className="px-4 py-2 font-bold md:text-lg">Price</th>
              <th className="px-4 py-2 font-bold md:text-lg">Total Price</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index} className="border-t">
                <td className="px-4 py-2 flex items-center">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-16 h-16 mr-4"
                  />
                  <div>
                    <p className="md:font-semibold md:text-lg">
                      {item.name}
                    </p>
                    <p className="text-sm md:text-base">{item.describe}</p>
                  </div>
                </td>
                <td className="px-4 py-2">
                  <div className="flex justify-center">
                    <p className="md:px-4 px-1 font-bold">
                      {item.quantity}
                    </p>
                  </div>
                </td>
                <td className="px-4 py-2">
                  <div className="flex justify-center">
                    ${parseFloat(item.price).toFixed(2)}
                  </div>
                </td>
                <td className="px-4 py-2">
                  <div className="flex justify-center">
                    ${(item.quantity * parseFloat(item.price)).toFixed(2)}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default OrderList;







