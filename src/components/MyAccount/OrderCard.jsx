import React from "react";

function OrderCard({ name, des, price, img, status }) {
  return (
    <div className=" h-[100px] rounded-xl border-[1px] border-black py-2 px-6 mb-3 mx-4">
      <div className="flex items-center justify-between h-full">
        <div className="flex items-center gap-3 m-3">
          <div className="w-[80px] h-[80px]">
            <img src={img} alt={name} />
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold">{name}</h3>
            <p>{des}</p>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div>
            <h2 className="font-bold text-xl">{status}</h2>
          </div>
          <div>
            <p>Price: ${price} </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderCard;
