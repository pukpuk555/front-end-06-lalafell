import React from 'react';
import KeyboardCard from './KeyboardCard';
import KeyCapCard from './KeyCapCard';
import SwitchesCard from './SwitchesCard';
import FiltersPrice from './FiltersPrice';


const ProductList = ({ whatNewArray, keyCap, switches, isSelected, search }) => {

    const filterProduct = (products) => {
        return products.filter(product => 
            product.name.toLowerCase().includes(search.toLowerCase())
        );
    };
    
    return (
        <div className=''>
            <h2 className='text-2xl font-bold mb-4'>In Stock</h2>
            <div>
                {isSelected === 1 && <KeyboardCard whatNewArray={filterProduct(whatNewArray)} />}
                {isSelected === 2 && <KeyCapCard keyCap={filterProduct(keyCap)} />}
                {isSelected === 3 && <SwitchesCard switches={filterProduct(switches)} />}
                {isSelected === 0 && (
                    <div>
                        <KeyboardCard whatNewArray={filterProduct(whatNewArray)} />
                        <KeyCapCard keyCap={filterProduct(keyCap)} />
                        <SwitchesCard switches={filterProduct(switches)} />
                    </div>
                    )
                }
            </div>
        </div>
    );
}

export default ProductList;
