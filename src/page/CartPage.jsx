import React, { useState } from "react";
import { Link } from "react-router-dom";
import FooterSection from "@/components/FooterSection";
import NavbarSection from "@/components/NavbarSection";

function CartPage({ cart, removeFromCart }) {
  const [cartItems, setCartItems] = useState(cart); // State to manage cart items
  const [selectedItems, setSelectedItems] = useState({}); // State to manage selected items

  // Ensure the price is a number
  const parsePrice = (price) => {
    const parsedPrice = parseFloat(price);
    return isNaN(parsedPrice) ? 0 : parsedPrice;
  };

  // Function to handle quantity change
  const handleQuantityChange = (item, newQuantity) => {
    const updatedCart = cartItems.map((cartItem) =>
      cartItem.name === item.name
        ? { ...cartItem, quantity: newQuantity }
        : cartItem
    );
    setCartItems(updatedCart);
  };

  const handleDelete = (item) => {
    const updatedCart = removeFromCart(item);
    setCartItems(updatedCart);
    setSelectedItems((prevSelectedItems) => {
      const newSelectedItems = { ...prevSelectedItems };
      delete newSelectedItems[item.name];
      return newSelectedItems;
    });
  };

  const handleSelectItem = (item) => {
    setSelectedItems((prevSelectedItems) => ({
      ...prevSelectedItems,
      [item.name]: !prevSelectedItems[item.name],
    }));
  };

  // Calculate total price for selected items
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      if (selectedItems[item.name]) {
        const itemPrice = parsePrice(item.price);
        return total + itemPrice * item.quantity;
      }
      return total;
    }, 0);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <NavbarSection />
      <div className="container mx-auto mt-[100px] md:mt-[130px] flex-grow">
        <h1 className="text-5xl font-bold mb-4">Cart</h1>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div>
            <div className="overflow-x-auto">
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
                  {cartItems.map((item, index) => (
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
                            onClick={() => handleDelete(item)}
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
            <div className="flex flex-col md:flex-row justify-end mt-4 items-center">
              <div className="flex flex-col items-center justify-center w-[300px] gap-3">
                <p className="font-bold text-xl">
                  Total: ${getTotalPrice().toFixed(2)}
                </p>
                <Link
                  to="/checkout"
                  state={{
                    cartItems: cartItems.filter(
                      (item) => selectedItems[item.name]
                    ),
                  }}
                  className={`bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded ${
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
