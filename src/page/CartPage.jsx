import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FooterSection from '@/components/FooterSection';
import NavbarSection from '@/components/NavbarSection';

function CartPage({ cart }) {
  const [selectedItems, setSelectedItems] = useState({});

  const handleCheckboxChange = (item) => {
    setSelectedItems(prevSelectedItems => ({
      ...prevSelectedItems,
      [item.name]: !prevSelectedItems[item.name]
    }));
  };

  const getSelectedItems = () => {
    return cart.filter(item => selectedItems[item.name]);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <NavbarSection />
      <div className="container mx-auto mt-10 flex-grow">
        <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div>
            <ul>
              {cart.map((item, index) => (
                <li key={index} className="mb-4 flex items-center">
                  <input
                    type="checkbox"
                    checked={!!selectedItems[item.name]}
                    onChange={() => handleCheckboxChange(item)}
                  />
                  <img src={item.img} alt={item.name} className="w-16 h-16 mr-4" />
                  <div className="inline-block">
                    <p className="font-semibold">{item.name}</p>
                    <p>Quantity: {item.quantity}</p>
                    <p>Price: {item.price}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="flex justify-end mt-4">
              <Link
                to="/checkout"
                state={{ selectedItems: getSelectedItems() }}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Check Out
              </Link>
            </div>
          </div>
        )}
      </div>
      <FooterSection />
    </div>
  );
}

export default CartPage;











