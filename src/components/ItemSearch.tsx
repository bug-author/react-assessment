import React from 'react';
import { FaSearch } from 'react-icons/fa';

const ItemSearch: React.FC = () => {
  return (
    <div className='relative mb-4 w-1/5'>
      <FaSearch className='absolute top-1/2 left-2 transform -translate-y-1/2' />
      <input
        type='text'
        placeholder='Search items'
        className='border rounded p-2 pl-8 w-full'
      />
    </div>
  );
};

export default ItemSearch;
