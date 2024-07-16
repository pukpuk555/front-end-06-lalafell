import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import NavbarSection from "@/components/NavbarSection";
import FooterSection from "@/components/FooterSection";
import AddressSection from "@/components/CheckOut/AddressSection";
import OrderList from "@/components/CheckOut/OrderList";
import PaymentMethod from "@/components/CheckOut/PaymentMethod";
import SummarySection from "@/components/CheckOut/SummarySection";
import axiosInstance from "@/utils/axiosInstance";

function CheckoutPage() {
  const location = useLocation();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getcheckout();
  }, []);

  const getcheckout = async () => {
    try {
      const response = await axiosInstance.get("/checkout");
      setProducts(response.data.checkouts[0].items);
    } catch (err) {
      console.log(err);
    }
  };

  // Ensure total calculation is after products state is set
  const total = products.reduce(
    (acc, item) => {
      acc.totalPrice += item.price * item.quantity;
      acc.totalQuantity += item.quantity;
      return acc;
    },
    { totalPrice: 0, totalQuantity: 0 }
  );

  const totalPrice = total.totalPrice.toFixed(2);
  const totalQuantity = total.totalQuantity;

  const address = {
    name: "John Doe",
    phone: "0123456789",
    address: "123 Colony 7, Space Colony Side 1, Zone Mars, 030210",
  };

  return (
    <div className="flex flex-col min-h-screen">
      <NavbarSection />
      <div className="h-[80px] md:h-[100px]"></div>
      <div className="container mx-auto mt-6 flex-grow px-4 md:px-0 max-w-screen-lg">
        <h1 className="text-lg md:text-2xl font-bold mb-4">Checkout</h1>
        <AddressSection address={address} />
        <OrderList products={products} />
        <PaymentMethod />
        <SummarySection totalPrice={totalPrice} totalQuantity={totalQuantity} />
        <div className="flex justify-center md:justify-end my-4">
          <Link to="/status">
            <button className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded w-full md:w-auto">
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
