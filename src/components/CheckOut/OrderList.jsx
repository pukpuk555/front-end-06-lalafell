import React, { useState } from "react";

const OrderList = ({ products }) => {
  return (
    <div>
      <div className="overflow-x-auto md:block">
        <table className="w-full mb-2">
          <thead>
            <tr>
              <th className="text-center">Product</th>
              <th className="text-center">Quantity</th>
              <th className="text-center">Price</th>
              <th className="text-center">Total</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index} className="border-b">
                <td className="flex items-center gap-4">
                  <img
                    src={product.productId.img.url}
                    alt={product.productId.name}
                    className="w-20 h-20 object-cover"
                  />
                  <p className="font-bold">{product.productId.name}</p>
                </td>
                <td className="text-sm md:text-base text-center">
                  <p>{product.quantity}</p>
                </td>
                <td className="text-sm md:text-base text-center">
                  <p className="font-semibold">{product.price} Bath</p>
                </td>
                <td className="font-bold text-sm md:text-base text-center">
                  <p>{(product.price * product.quantity).toFixed(2)} Bath</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderList;
