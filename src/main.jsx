import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AccountPage from "./page/AccountPage";
import OurProduct from "./page/OurProduct.jsx";
import AddNewProduct from "./components/Admin/AddNewProduct.jsx";

const whatNewArray = [
  {
    name: "Kimetsu no Yaiba Custom",
    describtion: "Reference from popular animation",
    img: "/kimetsu_no.png",
    price: "$10.99",
  },
  {
    name: "Lupan The 3rd Custom",
    describtion: "Reference from popular animation",
    img: "/lupin.png",
    price: "$10.99",
  },
  {
    name: "Doreaman Custom",
    describtion: "Reference from popular animation",
    img: "/doremon.png",
    price: "$10.99",
  },
  {
    name: "Harry Poster Custom",
    describtion: "Reference from popular animation",
    img: "/harry.png",
    price: "$10.99",
  },
  {
    name: "Jin-Chan Custom",
    describtion: "Reference from popular animation",
    img: "/chinchan.png",
    price: "$10.99",
  },
  {
    name: "Pokeman Custom",
    describtion: "Reference from popular animation",
    img: "/pokemon.png",
    price: "$10.99",
  },
];

const router = createBrowserRouter([
  {
    path: "/",
    element: <App whatNewArray={whatNewArray} />,
  },
  {
    path: "/productlist",
    element: <OurProduct whatNewArray={whatNewArray} />,
  },
  {
    path: "/account",
    element: <AccountPage />,
  },
  {
    path: "/admin",
    element: <AddNewProduct />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
