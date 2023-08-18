'use client'
import React from 'react'

import  CustomFilter  from '../CustomFilter'
import SearchBar from '../SearchBar'

const Catalog = () => {
  return (
    <div className='w-full mt-10 padding-x padding-y max-width' id="discover">
      <div className='home__text-container'>
        <h1 className='text-4xl font-extrabold'>Car Catalog</h1>
        <p>Explore Cars you might like</p>
      </div>
      <div className='home__filters'>
        <SearchBar searchString='d' />
      <div className='home__filter-container'>
        <CustomFilter title="fuel" />
        <CustomFilter title="year" />
      </div>
      </div>
    </div>
  )
}

export default Catalog