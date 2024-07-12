import React, { useState } from 'react';

function PaymentMethod() {
  const [selectedMethod, setSelectedMethod] = useState('');

  const handleSelectMethod = (method) => {
    setSelectedMethod(method);
  };

  return (
    <div className="bg-white p-4 rounded mb-4 text-sm md:text-base">
      <h2 className="font-bold mb-2 text-base md:text-lg">Payment Method</h2>
      <div className="flex flex-col md:flex-row md:space-x-4 space-y-2 md:space-y-0">
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={selectedMethod === 'Mobile Banking'}
            onChange={() => handleSelectMethod('Mobile Banking')}
            className="mr-2"
          />
          Mobile Banking
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={selectedMethod === 'Credit Card'}
            onChange={() => handleSelectMethod('Credit Card')}
            className="mr-2"
          />
          Credit Card
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={selectedMethod === 'Google Pay'}
            onChange={() => handleSelectMethod('Google Pay')}
            className="mr-2"
          />
          Google Pay
        </label>
      </div>
    </div>
  );
}

export default PaymentMethod;






