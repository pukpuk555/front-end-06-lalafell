import React from "react";

function ProductCard({ name, img, price, describe }) {
    return (
        <a href="#">
            <div className="h-auto min-h-40 md:h-[300px]  transition duration-500 hover:scale-110 ">
                <div>
                    <img
                        className="rounded-md h-[150px] md:h-[200px] md:w-[250px] md:object-cover"
                        //for test
                        src={img}
                    />
                </div>
                <div className="flex flex-col justify-between h-[60px] md:h-[100px]">
                    <div className="w-[150px] md:w-[250px] flex flex-nowrap">
                        <h4 className="md:text-xl font-bold text-sm">
                            {/* for test */}
                            {name}
                        </h4>
                    </div>
                    <p className="text-m hidden md:flex">
                        {/*for test*/}
                        {describe}
                    </p>
                    {/* for test */}
                    <h5 className="md:text-l font-semibold text-sm">{price}</h5>
                </div>
            </div>
        </a>
    );
}

export default ProductCard;
