import React, { useState } from "react";
import { Link } from "react-router-dom";
import FooterSection from "@/components/FooterSection";
import NavbarSection from "@/components/NavbarSection";

function CartPage({ cart, setCart }) {
  const [selectedItems, setSelectedItems] = useState({}); // State to manage selected items

  // Ensure the price is a number
  const parsePrice = (price) => {
    const parsedPrice = parseFloat(price);
    return isNaN(parsedPrice) ? 0 : parsedPrice;
  };

  // Function to handle quantity change
  const handleQuantityChange = (item, newQuantity) => {
    const updatedCart = cart.map((cartItem) =>
      cartItem.name === item.name
        ? { ...cartItem, quantity: newQuantity }
        : cartItem
    );
    setCart(updatedCart);
  };

  const removeFromCart = (product) => {
    // Filter out the item to be removed based on its name
    const updatedCart = cart.filter((item) => {
      return item.name !== product.name;
    });
    setCart(updatedCart);
  };

  const handleSelectItem = (item) => {
    setSelectedItems((prevSelectedItems) => ({
      ...prevSelectedItems,
      [item.name]: !prevSelectedItems[item.name],
    }));
  };

  // Calculate total price for selected items
  const getTotalPrice = () => {
    return cart.reduce((total, item) => {
      if (selectedItems[item.name]) {
        const itemPrice = parsePrice(item.price);
        return total + itemPrice * item.quantity;
      }
      return total;
    }, 0);
  };

  return (
    <div className="flex flex-col min-h-screen ">
      <NavbarSection />
      <div className="container mx-auto mt-[100px] md:mt-[130px] flex-grow max-w-screen-lg">
        <h1 className="text-5xl font-bold mb-4">Cart</h1>
        {cart.length === 0 ? (
          <div>
            <p className="text-2xl">Your cart is empty.</p>
          </div>
        ) : (
          <div>
            <div className="overflow-x-auto md:block hidden">
              <table className="min-w-full">
                <thead>
                  <tr>
                    <th className="px-4 py-2">Select</th>
                    <th className="px-4 py-2">Product</th>
                    <th className="px-4 py-2">Quantity</th>
                    <th className="px-4 py-2">Price</th>
                    <th className="px-4 py-2">Total Price</th>
                    <th className="px-4 py-2">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item, index) => (
                    <tr key={index} className="border-t">
                      <td className="px-4 py-2">
                        <div className="flex justify-center">
                          <input
                            type="checkbox"
                            checked={selectedItems[item.name] || false}
                            onChange={() => handleSelectItem(item)}
                          />
                        </div>
                      </td>
                      <td className="px-4 py-2 flex items-center">
                        <img
                          src={item.img}
                          alt={item.name}
                          className="w-16 h-16 mr-4"
                        />
                        <p className="md:font-bold md:text-xl font-semibold">
                          {item.name}
                        </p>
                      </td>
                      <td className="px-4 py-2">
                        <div className="flex justify-center">
                          <button
                            onClick={() =>
                              handleQuantityChange(item, item.quantity - 1)
                            }
                            className="border px-2 font-bold text-white bg-black rounded-l-md"
                            disabled={item.quantity <= 1}
                          >
                            -
                          </button>
                          <p className="border md:px-4 px-1 font-bold">
                            {item.quantity}
                          </p>
                          <button
                            onClick={() =>
                              handleQuantityChange(item, item.quantity + 1)
                            }
                            className="border px-2 font-bold text-white bg-black rounded-r-md"
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td className="px-4 py-2">
                        <div className="flex justify-center">
                          ${parsePrice(item.price).toFixed(2)}
                        </div>
                      </td>
                      <td className="px-4 py-2">
                        <div className="flex justify-center">
                          ${(parsePrice(item.price) * item.quantity).toFixed(2)}
                        </div>
                      </td>
                      <td className="px-4 py-2">
                        <div className="flex justify-center">
                          <button
                            onClick={() => removeFromCart(item)}
                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="md:hidden block">
              {cart.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between border-t border-b py-2 w-full"
                >
                  <div className="flex items-center w-full">
                    <div className="flex justify-center p-3">
                      <input
                        type="checkbox"
                        checked={selectedItems[item.name] || false}
                        onChange={() => handleSelectItem(item)}
                      />
                    </div>
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-20 h-20 mr-4"
                    />
                    <div className="flex justify-between w-full items-center">
                      <div className="flex flex-col gap-3">
                        <p className="font-bold text-lg">{item.name}</p>
                        <p className="font-bold">{item.description}</p>
                        <div className="flex">
                          <button
                            onClick={() =>
                              handleQuantityChange(item, item.quantity - 1)
                            }
                            className="border px-2 font-bold text-white bg-black rounded-l-md"
                            disabled={item.quantity <= 1}
                          >
                            -
                          </button>
                          <p className="border md:px-4 px-1 font-bold">
                            {item.quantity}
                          </p>
                          <button
                            onClick={() =>
                              handleQuantityChange(item, item.quantity + 1)
                            }
                            className="border px-2 font-bold text-white bg-black rounded-r-md"
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="flex flex-col gap-3 justify-between py-3">
                        <button
                          onClick={() => removeFromCart(item)}
                          className="bg-red-500 hover:bg-red-700 text-white text-sm font-semibold px-4 rounded"
                        >
                          Delete
                        </button>
                        <p className="font-semibold">
                          ${parsePrice(item.price).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col md:flex-row justify-end mt-4 items-center">
              <div className="flex flex-col items-center justify-center w-[300px] gap-3">
                <p className="font-bold text-xl">
                  Total: ${getTotalPrice().toFixed(2)}
                </p>
                <Link
                  to="/checkout"
                  state={{
                    cart: cart.filter((item) => selectedItems[item.name]),
                  }}
                  className={`bg-black hover:bg-gray-800 text-white font-bold text-xl py-2 px-4 w-full flex justify-center rounded ${
                    Object.keys(selectedItems).length === 0
                      ? "opacity-50 cursor-not-allowed"
                      : ""
                  }`}
                  disabled={Object.keys(selectedItems).length === 0}
                >
                  Check Out
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
      <FooterSection />
    </div>
  );
}

export default CartPage;
