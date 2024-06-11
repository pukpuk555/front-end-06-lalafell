import React from "react";

function ProductCard() {
  return (
    <a href="#">
      <div className="h-auto min-h-40 md:h-[300px]  transition duration-500 hover:scale-110">
        <div>
          <img
            className="rounded-md h-[150px] md:h-[200px] md:w-[250px] md:object-cover"
            //for test
            src="/kimetsu_no.png"
          />
        </div>
        <div className="flex flex-col justify-between md:h-[100px]">
          <h4 className="md:text-xl font-bold text-sm">
            {/* for test */}
            Kimetsu no Yaiba Custom
          </h4>
          <p className="text-m hidden md:flex">
            {/*for test*/}
            Reference from popular animation
          </p>
          {/* for test */}
          <h5 className="md:text-l font-semibold text-sm">$10.99</h5>
        </div>
      </div>
    </a>
  );
}

export default ProductCard;
