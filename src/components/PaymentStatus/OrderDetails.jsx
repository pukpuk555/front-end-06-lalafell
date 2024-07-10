import React, { useEffect, useState } from 'react';

function OrderDetails() {
  const [orderID, setOrderID] = useState('');
  const [orderTime, setOrderTime] = useState('');
  const [paymentTime, setPaymentTime] = useState('');

  useEffect(() => {
    const generateOrderID = () => {
      const date = new Date();
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
      const day = String(date.getDate()).padStart(2, '0');
      const sequence = String(1).padStart(5, '0'); // Incremental sequence, start with 00001
      return `${year}${month}${day}-${sequence}`;
    };

    const formatDate = (date) => {
      return date.toLocaleString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      });
    };

    const currentDate = new Date();
    setOrderID(generateOrderID());
    setOrderTime(formatDate(currentDate));
    setPaymentTime(formatDate(currentDate));
  }, []);

  return (
    <div className="border p-4">
      <h2 className="text-lg font-bold mb-2">Order Details</h2>
      <p>Order ID: {orderID}</p>
      <p>Order Time: {orderTime}</p>
      <p>Payment Time: {paymentTime}</p>
    </div>
  );
}

export default OrderDetails;
