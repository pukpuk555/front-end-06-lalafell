import React, { useEffect, useState } from 'react';
import { CgSearch } from 'react-icons/cg';
import axiosInstance from '../../utils/axiosInstance';

const SearchBar = ({ search, setSearch }) => {
  const [products, setProducts] = useState([]);

  const handleInputChange = async (e) => {
    const query = e.target.value;

    if (query.length > 2) {
      try {
        const response = await axiosInstance.get(`/search?query=${query}`);
        const data = response.data.products;
        setProducts(data);
      } catch (err) {
        console.log('Error fetching products:', err);
        setProducts([]);
      }
    } else {
      setProducts([]);
    }

    setSearch(query);
  };

  useEffect(() => {
    console.log(products); // This will log the updated products whenever it changes.
  }, [products]);

  return (
    <div>
      <div className='flex bg-[#F2F5F8] rounded-md my-4 items-center'>
        <CgSearch className='w-4 h-6 ml-2' />
        <input
          type='text'
          value={search}
          onChange={handleInputChange}
          placeholder='Search products...'
          className='bg-transparent p-2 focus:outline-none'
          aria-label='Search products'
        />
      </div>
      {products.length > 0 && (
        <ul className='bg-white border rounded-md shadow-md mt-2'>
          {products.map((product) => (
            <li key={product._id} className='p-2 border-b last:border-0'>
              {product.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;