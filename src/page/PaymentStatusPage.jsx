import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom"; // นำเข้า Link มาใช้งาน
import NavbarSection from "@/components/NavbarSection";
import FooterSection from "@/components/FooterSection";
import AddressSection from "@/components/CheckOut/AddressSection";
import OrderList from "@/components/CheckOut/OrderList";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import SummarySection from "@/components/CheckOut/SummarySection";
import OrderDetails from "@/components/PaymentStatus/OrderDetails";
import axiosInstance from "@/utils/axiosInstance";

function PaymentStatusPage() {
  const location = useLocation();
  const selectedItems = location.state?.selectedItems || [];
  const [products, setProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);

  useEffect(() => {
    getcheckout();
  }, []);

  useEffect(() => {
    const total = products.reduce(
      (acc, item) => {
        acc.totalPrice += item.price * item.quantity;
        acc.totalQuantity += item.quantity;
        return acc;
      },
      { totalPrice: 0, totalQuantity: 0 }
    );

    setTotalPrice(total.totalPrice);
    setTotalQuantity(total.totalQuantity);
  }, [products]);

  const getcheckout = async () => {
    try {
      const response = await axiosInstance.get("/checkout");
      setProducts(response.data.checkouts[0].items);
    } catch (err) {
      console.log(err);
    }
  };

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
        <div className="flex-col flex items-center justify-center p-6">
          <IoCheckmarkCircleOutline className="text-5xl" />
          <h1 className="text-lg md:text-2xl font-bold mb-4">
            Your Order has been Placed Successfully
          </h1>
        </div>
        <AddressSection address={address} />
        <OrderList products={products} />
        <SummarySection
          totalPrice={totalPrice.toFixed(2)}
          totalQuantity={totalQuantity}
        />
        <OrderDetails />
        <div className="flex justify-center my-4">
          <Link
            to="/"
            className="bg-black text-white py-2 px-4  rounded-lg hover:bg-black/80 text-xl "
          >
            Back to Home
          </Link>
        </div>
      </div>
      <FooterSection />
    </div>
  );
}

export default PaymentStatusPage;
