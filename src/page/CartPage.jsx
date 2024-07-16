import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import FooterSection from "@/components/FooterSection";
import NavbarSection from "@/components/NavbarSection";
import axiosInstance from "@/utils/axiosInstance";
import PropTypes from "prop-types";

function CartPage({ cart, setCart }) {
  const [selectedItems, setSelectedItems] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    getCarts();
  }, []);

  const parsePrice = (price) => {
    const parsedPrice = parseFloat(price);
    return isNaN(parsedPrice) ? 0 : parsedPrice;
  };

  const handleQuantityChange = async (item, newQuantity) => {
    try {
      await axiosInstance.put(`/cart/${item.product._id}`, { quantity: newQuantity });
      const updatedCart = cart.map((cartItem) =>
        cartItem.product._id === item.product._id
          ? { ...cartItem, quantity: newQuantity }
          : cartItem
      );
      setCart(updatedCart);
    } catch (error) {
      console.error('Error updating cart item quantity:', error);
    }
  };

  const removeFromCart = async (productToRemove) => {
    try {
      await axiosInstance.delete(`/cart/${productToRemove.product._id}`);
      const updatedCart = cart.filter((item) => item.product._id !== productToRemove.product._id);
      setCart(updatedCart);
    } catch (error) {
      console.error('Error removing product from cart:', error);
    }
  };

  const handleSelectItem = (item) => {
    setSelectedItems((prevSelectedItems) => ({
      ...prevSelectedItems,
      [item.product._id]: !prevSelectedItems[item.product._id],
    }));
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => {
      if (selectedItems[item.product._id]) {
        const itemPrice = parsePrice(item.price);
        return total + itemPrice * item.quantity;
      }
      return total;
    }, 0);
  };

  const getCarts = async () => {
    try {
      const response = await axiosInstance("/cart");
      setCart(response.data.carts.product);
    } catch (err) {
      console.log(err);
    }
  };

  const handleCheckout = async () => {
    const selectedCartItems = cart.filter((item) => selectedItems[item.product._id]);

    const items = selectedCartItems.map((item) => ({
      productId: item.product._id,
      productName: item.product.name,
      quantity: item.quantity,
      price: item.price,
      img: item.product.img.url,
    }));

    const total = getTotalPrice();

    const checkoutData = {
      items,
      total,
      paymentMethod: "credit_card",
      address: "Your delivery address here",
    };

    try {
      const response = await axiosInstance.post("/checkout", checkoutData);
      if (response.status === 201) {
        navigate("/checkout", { state: { selectedItems: items } });
      } else {
        console.error("Checkout creation failed");
      }
    } catch (error) {
      console.error("Error creating checkout:", error);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <NavbarSection />
      <div className="container mx-auto mt-[100px] md:mt-[130px] flex-grow max-w-screen-lg">
        <h1 className="text-4xl font-bold mb-4">Cart</h1>
        {cart.length === 0 ? (
          <div>
            <p className="text-xl">Your cart is empty.</p>
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
                            checked={selectedItems[item.product._id] || false}
                            onChange={() => handleSelectItem(item)}
                          />
                        </div>
                      </td>
                      <td className="px-4 py-2 flex items-center">
                        <img
                          src={item.product.img.url}
                          alt={item.product.name}
                          className="w-16 h-16 mr-4"
                        />
                        <p className="font-semibold text-lg">{item.product.name}</p>
                      </td>
                      <td className="px-4 py-2">
                        <div className="flex justify-center">
                          <button
                            onClick={() => handleQuantityChange(item, item.quantity - 1)}
                            className="border px-2 font-bold text-white bg-black rounded-l-md"
                            disabled={item.quantity <= 1}
                          >
                            -
                          </button>
                          <input
                            type="text"
                            value={item.quantity}
                            readOnly
                            className="border text-center w-12"
                          />
                          <button
                            onClick={() => handleQuantityChange(item, item.quantity + 1)}
                            className="border px-2 font-bold text-white bg-black rounded-r-md"
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td className="px-4 py-2 text-center">
                        <p className="font-semibold text-lg">
                          {parsePrice(item.price).toLocaleString()} THB
                        </p>
                      </td>
                      <td className="px-4 py-2 text-center">
                        <p className="font-semibold text-lg">
                          {(parsePrice(item.price) * item.quantity).toLocaleString()} THB
                        </p>
                      </td>
                      <td className="px-4 py-2">
                        <div className="flex justify-center">
                          <button
                            onClick={() => removeFromCart(item)}
                            className="border bg-red-600 text-white px-2 rounded-md"
                          >
                            Remove
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
                <div key={index} className="border-t py-4">
                  <div className="flex items-center mb-4">
                    <input
                      type="checkbox"
                      checked={selectedItems[item.product._id] || false}
                      onChange={() => handleSelectItem(item)}
                    />
                    <img
                      src={item.product.img.url}
                      alt={item.product.name}
                      className="w-16 h-16 mx-4"
                    />
                    <p className="font-semibold text-lg">{item.product.name}</p>
                  </div>
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center">
                      <button
                        onClick={() => handleQuantityChange(item, item.quantity - 1)}
                        className="border px-2 font-bold text-white bg-black rounded-l-md"
                        disabled={item.quantity <= 1}
                      >
                        -
                      </button>
                      <input
                        type="text"
                        value={item.quantity}
                        readOnly
                        className="border text-center w-12 mx-2"
                      />
                      <button
                        onClick={() => handleQuantityChange(item, item.quantity + 1)}
                        className="border px-2 font-bold text-white bg-black rounded-r-md"
                      >
                        +
                      </button>
                    </div>
                    <div className="text-center">
                      <p className="font-semibold text-lg">
                        {parsePrice(item.price).toLocaleString()} THB
                      </p>
                      <p className="font-semibold text-lg">
                        {(parsePrice(item.price) * item.quantity).toLocaleString()} THB
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <button
                      onClick={() => removeFromCart(item)}
                      className="border bg-red-600 text-white px-2 rounded-md"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4">
              <div className="flex flex-col items-center md:items-end">
                <p className="text-lg md:text-xl mb-2 md:mb-0">
                  Total Price:{" "}
                  <span className="font-bold">
                    {getTotalPrice().toLocaleString()} THB
                  </span>
                </p>
                <button
                  onClick={handleCheckout}
                  className={`bg-black hover:bg-gray-800 text-white font-bold text-xl py-2 px-4 my-4 w-full md:w-[300px] rounded ${Object.keys(selectedItems).length === 0 ? "opacity-50 cursor-not-allowed" : ""}`}
                  disabled={getTotalPrice() === 0}
                  style={{ maxWidth: "100%" }}
                >
                  Check Out
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <FooterSection />
    </div>
  );
}

CartPage.propTypes = {
  cart: PropTypes.array.isRequired,
  setCart: PropTypes.func.isRequired,
};

export default CartPage;
