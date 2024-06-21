import React from 'react';
import { CgSearch } from 'react-icons/cg';

const SearchBar = ({ search, setSearch }) => {
  const handleInputChange = (e) => {
    setSearch(e.target.value); 
  };

  return (
    <div className='md:flex bg-[#F2F5F8] rounded-md my-4 items-center'>
      <CgSearch className='w-6 h-6 ml-2' /> {/* แสดงไอคอนค้นหา */}
      <input
        type='text'
        value={search}
        onChange={handleInputChange}
        placeholder='Search products...'
        className='bg-transparent p-2 focus:outline-none w-full' 
        aria-label='Search products'
      />
    </div>
  );
};

export default SearchBar;
