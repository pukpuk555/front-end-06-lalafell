import React, { useState } from 'react';
import ReactSlider from 'react-slider';
import ProductList from './ProductList';

const FiltersPrice = () => {
    const [priceRange, setPriceRange] = useState([0, 100]);

    const handleChange = (values) => {
        setPriceRange(values);
    };

    return (
        <div className='mt-8'>
            <h3 className='text-xl font-bold mt-4'>Price</h3>
            <div className='flex justify-between'>
                <span className='flex items-center space-x-3 w-1/2'>
                    <label htmlFor="min">Min</label>
                    <input
                        type="number"
                        min='0'
                        value={priceRange[0]}
                        onChange={(e) => handleChange([(e.target.value), priceRange[0]])}
                        className='bg-gray-100 rounded-md py-2 px-2 my-4 text-lg text-gray-800 outline-none w-full'
                    />
                </span>
                <span className='flex items-center space-x-3 w-1/2'>
                    <label htmlFor="max">Max</label>
                    <input
                        type="number"
                        max='100'
                        value={priceRange[1]}
                        onChange={(e) => handleChange([Number(e.target.value), priceRange[0]])}
                        className='bg-gray-100 rounded-md py-2 px-2 my-4 text-lg text-gray-800 outline-none w-full'
                    />
                </span>
            </div>
            <ReactSlider
                className="w-full h-2 mt-4 rounded-full"
                thumbClassName="w-5 h-5 bg-white active:bg-black border-2 border-black rounded-full cursor-pointer transform -translate-y-1/4"
                trackClassName="top-0 bottom-0 bg-black rounded-full"
                min={0}
                max={100}
                value={priceRange}
                onChange={handleChange}
            />
            <p className="mt-2">Price Range: ${priceRange[0]} - ${priceRange[1]}</p>
        </div>
    );
};

export default FiltersPrice;

