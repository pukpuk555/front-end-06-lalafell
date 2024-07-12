import React from 'react';
import { useLocation, Link } from 'react-router-dom'; // นำเข้า Link มาใช้งาน
import NavbarSection from '@/components/NavbarSection';
import FooterSection from '@/components/FooterSection';
import AddressSection from '@/components/CheckOut/AddressSection';
import OrderList from '@/components/CheckOut/OrderList';
import PaymentMethod from '@/components/CheckOut/PaymentMethod';
import SummarySection from '@/components/CheckOut/SummarySection';

function CheckoutPage() {
  const location = useLocation();
  const selectedItems = location.state?.selectedItems || [];

/*   const handlePurchase = async () => {
    const response = await fetch('', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        items: selectedItems,
        // Add other necessary data like user ID, payment method, etc.
      }),
    });

    if (response.ok) {
      console.log('Purchase successful!');
    } else {
      console.error('Purchase failed');
    }
  };
 */
  const address = {
    name: "John Doe",
    phone: "0123456789",
    address: "123 Colony 7, Space Colony Side 1, Zone Mars, 030210"
  };

  return (
    <div className="flex flex-col min-h-screen">
      <NavbarSection />
      <div className="h-[80px] md:h-[100px]"></div>
      <div className="container mx-auto mt-6 flex-grow px-4 md:px-0 max-w-screen-lg">
        <h1 className="text-lg md:text-2xl font-bold mb-4">Checkout</h1>
        <AddressSection address={address}/>
        <OrderList items={selectedItems} />
        <PaymentMethod />
        <SummarySection items={selectedItems} />
        <div className="flex justify-center md:justify-end my-4">
          <Link to="/status">
            <button /* onClick={handlePurchase} */ className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded w-full md:w-auto">
              Purchase
            </button>
          </Link>
        </div>
      </div>
      <FooterSection />
    </div>
  );
}

export default CheckoutPage;

















