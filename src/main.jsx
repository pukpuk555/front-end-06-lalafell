import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import AccountPage from "./page/AccountPage";
import OurProduct from "./page/OurProduct.jsx";
import AddNewProduct from "./components/Admin/AddNewProduct.jsx";
import ProductPage from "./page/ProductPage.jsx";
import CartPage from "./page/CartPage.jsx";
import CheckoutPage from "./page/CheckOutPage.jsx";
import SignInPage from "./page/SignInPage.jsx";
import SignUpPage from "./page/SignUpPage.jsx";
import ForgotEmailorPassword from "./components/SignIn/ForgotEmailorPassword.jsx";
import PaymentStatusPage from "./page/PaymentStatusPage.jsx";
import ProfileCard from "./components/MyAccount/ProfileCard.jsx";
import AddressBook from "./components/MyAccount/AddressBook.jsx";
import CrediCardList from "./components/MyAccount/CrediCardList.jsx";
import OrderHistory from "./components/MyAccount/OrderHistory.jsx";
import SignIn from "./page/SignInPage.jsx";
import AdminDashboard from "./components/Admin/AdminDashboard.jsx"

const whatNewArray = [
  {
    name: "Kimetsu no Yaiba Custom",
    type: "Custom Keyboard",
    description: "Reference from popular animation",
    spec: "Spec: \n Keycap  \n Switch Tactile with RGB \n Conection Wireless",
    img: "/kimetsu_no.png",
    price: "10.99",
  },
  {
    name: "Lupan The 3rd Custom",
    type: "Custom Keyboard",
    description: "Reference from popular animation",
    spec: "Spec:\n Keycap \n Switch Tactile with RGB \n Conection Wireless",
    img: "/lupin.png",
    price: "10.99",
  },
  {
    name: "Doreaman Custom",
    type: "Custom Keyboard",
    description: "Reference from popular animation",
    spec: "Spec:\n Keycap \n Switch Tactile with RGB \n Conection Wireless",
    img: "/doremon.png",
    price: "10.99",
  },
  {
    name: "Harry Poster Custom",
    type: "Custom Keyboard",
    description: "Reference from popular animation",
    spec: "Spec:\n Keycap \n Switch Tactile with RGB \n Conection Wireless",
    img: "/harry.png",
    price: "10.99",
  },
  {
    name: "Jin-Chan Custom",
    type: "Custom Keyboard",
    description: "Reference from popular animation",
    spec: "Spec:\n Keycap \n Switch Tactile with RGB \n Conection Wireless",
    img: "/chinchan.png",
    price: "10.99",
  },
  {
    name: "Pokeman Custom",
    type: "Custom Keyboard",
    description: "Reference from popular animation",
    spec: "Spec:\n Keycap \n Switch Tactile with RGB \n Conection Wireless",
    img: "/pokemon.png",
    price: "10.99",
  },
];

const AppWrapper = () => {
  const [cart, setCart] = useState([]);
  const addToCart = (product, quantity) => {
    // Check if the product already exists in the cart
    const index = cart.findIndex((item) => item.name === product.name);

    if (index !== -1) {
      // Product already exists in cart, update its quantity
      const updatedCart = [...cart];
      updatedCart[index].quantity += quantity;
      setCart(updatedCart);
    } else {
      // Product doesn't exist in cart, add it with the specified quantity
      setCart((prevCart) => [...prevCart, { ...product, quantity }]);
    }
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<App whatNewArray={whatNewArray} />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route
          path="/ForgotEmailorPassword"
          element={<ForgotEmailorPassword />}
        />
        <Route
          path="/productlist"
          element={<OurProduct whatNewArray={whatNewArray} />}
        />
        <Route path="/account" element={<AccountPage />}>
          <Route path="profile" element={<ProfileCard />} />
          <Route path="address" element={<AddressBook />} />
          <Route path="payment" element={<CrediCardList />} />
          <Route path="order" element={<OrderHistory />} />
        </Route>
        <Route
          path="/product/:productName"
          element={
            <ProductPage whatNewArray={whatNewArray} addToCart={addToCart} />
          }
        />
        <Route
          path="/cart"
          element={<CartPage cart={cart} setCart={setCart} />}
        />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/status" element={<PaymentStatusPage />} />
        <Route path="/admin" element={<AdminDashboard />}>
          <Route path="add-new-product" element={<AddNewProduct />} />
        </Route>
      </Routes>
    </Router>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<AppWrapper />);
