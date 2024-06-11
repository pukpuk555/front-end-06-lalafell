import React from "react";
import ProductCard from "./ProductCard";

function WhatsNewSection() {
  //for test
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

  return (
    <div className="flex justify-center w-screen">
      <div className="w-screen md:w-[1024px]">
        <h3 className="text-xl md:text-3xl font-bold">What's New</h3>
        <div className="flex md:justify-center">
          <div className="carousel carousel-center gap-5 p-4 md:grid md:grid-cols-3 md:grid-row-2 md:mx-6 w-auto">
            {whatNewArray.map((card, index) => (
              <div
                key={index}
                className="carousel-item md:flex md:justify-center"
              >
                {/* for test */}
                <ProductCard
                  name={card.name}
                  img={card.img}
                  price={card.price}
                  describe={card.describtion}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhatsNewSection;
