import React, { useState, useEffect } from "react";

function ProductDetailCard({
  name,
  img,
  price,
  type,
  describe,
  spec,
  addToCart,
  navigate,
}) {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  useEffect(() => {
    setQuantity(1);
  }, [name]);

  const handleAddToCart = () => {
    addToCart({ name, img, price, type, describe, spec }, quantity);
  };

  return (
    <div className="flex justify-center py-4 mb-8 mt-[100px] md:mt-[120px]">
      <div className="w-screen md:w-[1024px] mx-5 lg:mx-0 flex items-center border border-gray-300 rounded-lg shadow-lg">
        <div className="w-full">
          <img
            src={img}
            alt={name}
            className="max-w-full h-auto rounded-l-lg"
          />
        </div>
        <div className="w-full px-6 py-4">
          <h1 className="text-3xl font-bold mb-4">{name}</h1>
          <p className="text-xl text-gray-500 mb-4">{type}</p>
          <p className="text-2xl font-semibold text-gray-900 mb-4">
            Price: {price}
          </p>
          <p className="text-lg text-gray-700 mb-4">{describe}</p>
          <p className="text-lg text-gray-700 mb-4">{spec}</p>
          <div className="flex items-center mb-4">
            <button
              className="bg-black text-white px-4 py-2 border border-gray-300 rounded-l-xl hover:bg-black/80"
              onClick={decreaseQuantity}
            >
              -
            </button>
            <span className="px-4 py-2 border border-gray-300">{quantity}</span>
            <button
              className="bg-black text-white px-4 py-2 border border-gray-300 rounded-r-xl hover:bg-black/80"
              onClick={increaseQuantity}
            >
              +
            </button>
          </div>
          <button
            className="bg-black text-white font-bold py-2 px-4 rounded w-full hover:bg-black/80 transition duration-300 ease-in-out"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailCard;
