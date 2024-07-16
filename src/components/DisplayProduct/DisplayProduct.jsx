import React, { useEffect, useState } from "react";
import axiosInstance from "../../utils/axiosInstance";
import ProductCard from "../ProductCard";
import FiltersButton from "./FiltersButton";

const DisplayProduct = () => {
    const [product, setProduct] = useState([]);

    const getProducts = async () => {
        try {
            const response = await axiosInstance.get("/product");
            console.log('Response from API:', response);

            if (response.data && response.data.products) {
                setProduct(response.data.products);
            }
        } catch (err) {
            console.log('get product :', err);
        }
    }

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <div>
            <div className="max-w-[1024px] mx-auto mt-40">
                <div className="w-full">
                    <FiltersButton />
                </div>
                <div className="w-full mb-16">
                    <h2 className="text-2xl font-bold mb-4">In Stock</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
                        {product.map((card, index) => (
                            <div key={index}>
                                <ProductCard
                                    name={card.name}
                                    img={card.img.url}
                                    price={card.price}
                                    describe={card.description}
                                    product_id={card._id}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DisplayProduct;
