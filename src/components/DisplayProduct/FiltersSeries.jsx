import React, { useState } from 'react'

const FiltersSeries = ({ setSelectedBrand }) => {
    const [selectedTypeBrand, setSelectedTypeBrand] = useState(0);

    const handleSelectedTypeBrand = (brand) => {
        setSelectedTypeBrand(brand)
    }
    return (
        <div className='mt-8'>
            <h3 className='text-xl font-bold'>Series</h3>
            <div className='mt-4 mb-4'>
                <input
                    type="radio"
                    name="Series"
                    onClick={() => setIsSelected(1)}
                    className='w-4 h-4 mr-4'
                />
                <label htmlFor='Series' className='text-xl'>
                    G-Pro Series
                </label>
            </div>
            <div className='my-5'>
                <input
                    type="radio"
                    name="Series"
                    onClick={() => setIsSelected(2)}
                    className='w-4 h-4 mr-4'
                />
                <label htmlFor='Series' className='text-xl'>
                    G-Series
                </label>
            </div>
            <div className='my-5'>
                <input
                    type="radio"
                    name="Series"
                    onClick={() => setIsSelected(3)}
                    className='w-4 h-4 mr-4'
                />
                <label htmlFor='Series' className='text-xl'>
                    K-Series
                </label>
            </div>
            <div className='my-5'>
                <input
                    type="radio"
                    name="Series"
                    onClick={() => setIsSelected(0)}
                    className='w-4 h-4 mr-4'
                />
                <label htmlFor='Series' className='text-xl'>
                    Apex
                </label>
            </div>
        </div>
    )
}
export default FiltersSeries;