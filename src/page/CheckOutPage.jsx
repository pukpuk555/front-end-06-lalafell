import React from 'react';
import { useLocation } from 'react-router-dom';
import FooterSection from '@/components/FooterSection';
import NavbarSection from '@/components/NavbarSection';

function CheckoutPage() {
  const location = useLocation();
  const selectedItems = location.state?.selectedItems || [];

  return (
    <div className="flex flex-col min-h-screen">
      <NavbarSection />
      <div className="container mx-auto mt-10 flex-grow">
        <h1 className="text-3xl font-bold mb-4">Checkout</h1>
        {selectedItems.length === 0 ? (
          <p>No items selected for checkout.</p>
        ) : (
          <div>
            <ul>
              {selectedItems.map((item, index) => (
                <li key={index} className="mb-4 flex items-center">
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
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Proceed to Payment
              </button>
            </div>
          </div>
        )}
      </div>
      <FooterSection />
    </div>
  );
}

export default CheckoutPage;






