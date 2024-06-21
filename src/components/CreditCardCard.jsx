import React from "react";

function CreditCardCard({ card, deleteCard }) {
  return (
    <div className="w-full h-[100px] rounded-xl border-[1px] border-black py-2 px-6 mb-3">
      <div className="flex items-center justify-between h-full">
        <div className="flex items-center gap-3">
          <h4 className="text-lg font-medium">card logo</h4>
          <p className="text-sm">{card.type}</p>
          <p>{`${card.number1} ${card.number2} ${card.number3} ${card.number4}`}</p>
        </div>
        <div className="flex gap-3">
          <button onClick={() => deleteCard(card.id)}>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default CreditCardCard;
