import React, { useState } from "react";
import CreditCardCard from "./CreditCardCard";
import AddCreditCardForm from "./AddCreditCardForm";

function CrediCardList() {
  const [creditCard, setCreditCard] = useState([
    {
      id: "c1",
      number1: "1234",
      number2: "1234",
      number3: "1234",
      number4: "1234",
      type: "Visa",
    },
  ]);
  const [toggleCardForm, setToggleCardForm] = useState(false);

  const addCard = (newCard) => {
    setCreditCard([
      ...creditCard,
      { ...newCard, id: `c${creditCard.length + 1}` },
    ]);
  };

  const handleToggle = (e) => {
    e.preventDefault();
    setToggleCardForm(!toggleCardForm);
  };

  const deleteCard = (id) => {
    const updatedCard = creditCard.filter((card) => card.id !== id);
    setCreditCard(updatedCard);
  };

  return (
    <div>
      <div className="w-auto mb-[50px]">
        <h2 className="text-4xl font-bold pb-3">Your Account</h2>
        <div className="lg:w-[700px] w-[500px] md:h-[450px] border-[1px] border-black rounded-xl h-[450px] overflow-auto px-4">
          <div className="w-full flex justify-between items-center h-[60px] sticky top-0 bg-white">
            <h3 className="text-2xl font-semibold my-3">
              Manage your Credit/Debit Card
            </h3>
            <button
              onClick={handleToggle}
              className="px-3 h-10 border rounded-lg font-medium bg-black text-white"
            >
              Add More
            </button>
          </div>
          <div>
            {creditCard.map((card) => (
              <CreditCardCard
                key={card.id}
                card={card}
                deleteCard={deleteCard}
              />
            ))}
          </div>
        </div>
      </div>
      {toggleCardForm && (
        <AddCreditCardForm addCard={addCard} handleToggle={handleToggle} />
      )}
    </div>
  );
}

export default CrediCardList;
