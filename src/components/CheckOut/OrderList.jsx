import React from 'react';
import PropTypes from 'prop-types';

const OrderList = ({ items }) => {
  const parsePrice = (price) => {
    const parsedPrice = parseFloat(price);
    return isNaN(parsedPrice) ? 0 : parsedPrice;
  };

  return (
    <div>
      <div className="overflow-x-auto md:block hidden">
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">Product</th>
              <th className="px-4 py-2">Quantity</th>
              <th className="px-4 py-2">Price</th>
              <th className="px-4 py-2">Total Price</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index} className="border-t">
                <td className="px-4 py-2 flex items-center">
                  <img
                    src={item.img}
                    alt={item.productName}
                    className="w-16 h-16 mr-4"
                  />
                  <p className="md:font-bold md:text-xl font-semibold">
                    {item.productName}
                  </p>
                </td>
                <td className="px-4 py-2 text-center">
                  <p className="md:font-bold md:text-xl font-semibold">
                    {item.quantity}
                  </p>
                </td>
                <td className="px-4 py-2 text-center">
                  <p className="md:font-bold md:text-xl font-semibold">
                    {parsePrice(item.price).toLocaleString()} THB
                  </p>
                </td>
                <td className="px-4 py-2 text-center">
                  <p className="md:font-bold md:text-xl font-semibold">
                    {(parsePrice(item.price) * item.quantity).toLocaleString()} THB
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="md:hidden block">
        {items.map((item, index) => (
          <div key={index} className="border-t py-4">
            <div className="flex items-center mb-4">
              <img
                src={item.img}
                alt={item.productName}
                className="w-16 h-16 mx-4"
              />
              <p className="md:font-bold md:text-xl font-semibold">
                {item.productName}
              </p>
            </div>
            <div className="flex justify-between items-center mb-4">
              <div className="text-center">
                <p className="md:font-bold md:text-xl font-semibold">
                  {parsePrice(item.price).toLocaleString()} THB
                </p>
                <p className="md:font-bold md:text-xl font-semibold">
                  {(parsePrice(item.price) * item.quantity).toLocaleString()} THB
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

OrderList.propTypes = {
  items: PropTypes.array.isRequired,
};

export default OrderList;








