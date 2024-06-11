import React from "react";
import ProductCard from "./ProductCard";

function WhatsNewSection() {
  //for test
  const whatNewArray = [
    { ProductCard },
    { ProductCard },
    { ProductCard },
    { ProductCard },
    { ProductCard },
    { ProductCard },
  ];

  return (
    <div className="flex justify-center w-screen">
      <div className="w-[1024px]">
        <h3 className="text-xl md:text-3xl font-bold">What's New</h3>
        <div className="flex md:justify-center">
          <div className="carousel carousel-center p-4 space-x-4 md:grid md:grid-cols-3 md:grid-row-2 md:gap-5 md:mx-6 md:mt-4">
            {whatNewArray.map((card) => (
              <div
                key={card.id}
                className="carousel-item md:flex md:justify-center"
              >
                {/* for test */}
                <ProductCard />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhatsNewSection;
