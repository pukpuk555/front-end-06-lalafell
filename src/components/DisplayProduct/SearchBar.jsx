import React, { useEffect } from 'react';
import { CgSearch } from 'react-icons/cg';
import axiosInstance from '../../utils/axiosInstance';

const SearchBar = ({ search, setSearch, setFilterProduct, filterProduct }) => {


  const handleInputChange = async (e) => {
    const query = e.target.value;

    if (query.length > 2) {
      try {
        const response = await axiosInstance.get(`/search?query=${query}`);
        const data = response.data.products;
        setFilterProduct(data);
      } catch (err) {
        console.log('Error fetching products:', err);
        setFilterProduct([]);
      }
    } else {
      setFilterProduct([]);
    }

    setSearch(query);
  };


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
      {filterProduct.length > 0 && (
        <ul className='bg-white border rounded-md shadow-md mt-2'>
          {filterProduct.map((product) => (
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