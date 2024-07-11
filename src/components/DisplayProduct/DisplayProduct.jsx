import React, { useState } from "react";
// import ProductList from "./ProductList";
import FiltersProductType from "./FiltersProductType";
import FiltersButton from "./FiltersButton";
import SearchBar from "./SearchBar";
import FiltersPrice from "./FiltersPrice";
import ProductCard from "../ProductCard";

const DisplayProduct = ({ whatNewArray }) => {
    console.log(whatNewArray);
    const [search, setSearch] = useState("");

    const filterProduct = (products) => {
        return products.filter((product) =>
            product.name.toLowerCase().includes(search.toLowerCase())
        );
    };

    return (
        <div className="flex flex-col justify-center py-4 mb-8 md:mt-20 mt-10 pt-10">
            <div className="max-w-[1024px] mx-auto flex justify-center">
                <div className="w-full md:w-1/3 pr-4">
                    <FiltersButton />
                    <SearchBar search={search} setSearch={setSearch} />{" "}
                    <FiltersProductType />
                    <FiltersPrice />
                </div>


                <div className="w-full ml-10">
                    <h2 className="text-2xl font-bold mb-4">In Stock</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {filterProduct(whatNewArray).map((card, index) => (
                            <div key={index} className="carousel-item md:flex md:justify-center">
                                <ProductCard
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
        </div >
    );
};

export default DisplayProduct;
