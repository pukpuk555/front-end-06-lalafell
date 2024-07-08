import React from "react";
import ProductCard from "../ProductCard";

function getRandomProducts(products, count, excludeName) {
  const result = [];
  const length = products.length;

  while (result.length < count) {
    const randomIndex = Math.floor(Math.random() * length);
    const randomProduct = products[randomIndex];

    // Check that the random product's name is not the same as excludeName
    if (randomProduct.name !== excludeName && !result.find(item => item.name === randomProduct.name)) {
      result.push(randomProduct);
    }
  }

  return result;
}

function YouMayAlsoLike({ whatNewArray, excludeName }) {
  const relatedProducts = getRandomProducts(whatNewArray, 3, excludeName);

  return (
    <div className="flex justify-center w-screen md:ml-0 md:w-auto">
      <div className="w-screen md:w-[1024px] mx-5 lg:mx-0">
        <h3 className="text-2xl md:text-3xl font-bold ml-4 md:ml-0 my-4">You May Also Like</h3>
        <div className="flex md:justify-center">
          <div className="carousel carousel-center gap-5 p-4 md:grid md:grid-cols-3 md:grid-rows-1 md:mx-6 w-auto">
            {relatedProducts.map((card, index) => (
              <div key={index} className="carousel-item md:flex md:justify-center">
                <ProductCard
                  id={card.id}
                  name={card.name}
                  img={card.img}
                  price={card.price}
                  describe={card.description}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default YouMayAlsoLike;


