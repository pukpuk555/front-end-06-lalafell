import React from "react";
import ProductCard from "./ProductCard";

function WhatsNewSection({ whatNewArray }) {
  return (
    <div className="flex justify-center">
      <div className="w-screen md:w-[1024px] mx-5 lg:mx-0">
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
