import React, { useState } from 'react';
// import ProductList from './ProductList';
import FiltersProductType from './FiltersProductType';
import FiltersButton from './FiltersButton';
import SearchBar from './SearchBar';
import FiltersPrice from './FiltersPrice';
import ProductCard from './ProductCard';

const DisplayProduct = ({ whatNewArray }) => {
    const [search, setSearch] = useState(''); 

    const filterProduct = (products) => {
        return products.filter(product =>
            product.name.toLowerCase().includes(search.toLowerCase())
        );
    };

    return (
        <div className="flex flex-col justify-center min-h-screen py-4 mb-8 mt-[100px] md:mt-[120px]">
            <div className="max-w-[1024px] mx-auto flex justify-center">
                <div className="w-full md:w-1/3 pr-4 hidden lg:block ">
                    <FiltersButton />
                    <SearchBar search={search} setSearch={setSearch} /> {/* ส่งค่า search และ setSearch ไปยัง SearchBar */}
                    <FiltersProductType />
                    <FiltersPrice />
                </div>
                <div className="w-full ml-10">
                    <h2 className='text-2xl font-bold mb-4'>In Stock</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {filterProduct(whatNewArray).map((card, index) => (
                            <div key={index} className="bg-white rounded shadow-md p-2">
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
};

export default DisplayProduct;