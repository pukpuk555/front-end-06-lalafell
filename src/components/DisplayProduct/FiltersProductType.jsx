import React from 'react'

const FiltersProductType = ({ setIsSelected }) => {
    return (
        <div >
            <h3 className='text-xl font-bold'>Product type</h3>
            <div className='mt-4 mb-4'>
                <input
                    type="radio"
                    name="productType"
                    onClick={() => setIsSelected(1)}
                    className='w-4 h-4 mr-4'
                />
                <label htmlFor='proproductType' className='text-xl'>
                    Custom Keyboard
                </label>
            </div>
            <div className='my-4'>
                <input
                    type="radio"
                    name="productType"
                    onClick={() => setIsSelected(2)}
                    className='w-4 h-4 mr-4'
                />
                <label htmlFor='proproductType' className='text-xl'>
                    Keycaps
                </label>
            </div>
            <div className='my-4'>
                <input
                    type="radio"
                    name="productType"
                    onClick={() => setIsSelected(3)}
                    className='w-4 h-4 mr-4'
                />
                <label htmlFor='proproductType' className='text-xl'>
                    Switches
                </label>
            </div>
            <div className='my-4'>
                <input
                    type="radio"
                    name="productType"
                    onClick={() => setIsSelected(0)}
                    className='w-4 h-4 mr-4'
                />
                <label htmlFor='proproductType' className='text-xl'>
                    All
                </label>
            </div>
        </div>
    )
}

export default FiltersProductType