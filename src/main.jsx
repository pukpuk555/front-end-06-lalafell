import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import AccountPage from "./page/AccountPage";
import OurProduct from "./page/OurProduct.jsx";
import ProductPage from "./page/ProductPage.jsx";
import CartPage from "./page/CartPage.jsx";
import CheckoutPage from "./page/CheckOutPage.jsx";
import SignInPage from "./page/SignInPage.jsx";
import SignUpPage from "./page/SignUpPage.jsx";
import ForgotEmailorPassword from "./components/SignIn/ForgotEmailorPassword.jsx";
import PaymentStatusPage from "./page/PaymentStatusPage.jsx";


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
    setCart((prevCart) => [...prevCart, { ...product, quantity }]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<App whatNewArray={whatNewArray} />} />
        <Route path="/productlist" element={<OurProduct whatNewArray={whatNewArray} />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/signin" element={<SignInPage/>} />
        <Route path="/signup" element={<SignUpPage/>} />
        <Route path="/ForgotEmailorPassword" element={<ForgotEmailorPassword/>} />
        <Route
          path="/product/:productName"
          element={<ProductPage whatNewArray={whatNewArray} addToCart={addToCart} />}
        />
        <Route path="/cart" element={<CartPage cart={cart} />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/status"element={<PaymentStatusPage />} />

      </Routes>
    </Router>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<AppWrapper />);