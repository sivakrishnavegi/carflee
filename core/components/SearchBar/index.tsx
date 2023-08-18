'use client'
import React, { useState } from 'react'
import SearchManufacturer from './SearchManufacturer'
import { SearchBarProps } from './types';

const SearchBar = ({ searchString ='' }: SearchBarProps) => {
    const [manufacturer, setManufacturer] = useState('')
  const handleSearch = () => {}
    return (
    <form className='searchbar' onSubmit={handleSearch}>
      <div className='searchbar__item'>
        <SearchManufacturer
            manufacturer={manufacturer}
            setManufacturer={setManufacturer}
         />
      </div>
    </form> 
  )
};


export default SearchBar