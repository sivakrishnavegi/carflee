'use client'
import { manufacturers } from '@/core/constants';
import { Combobox, Transition } from '@headlessui/react';
import Image from 'next/image';
import { Fragment, useState } from 'react';
import { SearchManufacturerProps } from './types';

const SearchManufacturer = ({ manufacturer, setManufacturer }:SearchManufacturerProps) => {
    const [searchQuery, setSearchQuery] = useState('');
    let [isShowing, setIsShowing] = useState(true)

    const filteredManufacturer =  searchQuery === '' ? manufacturers : manufacturers.filter((item) =>  item.toLowerCase().replace(/s+/g, '').includes(searchQuery.toLowerCase().replace(/\s+/g, '')))

  return (
    <div className='search-manufacturer'>
        <Combobox>
            <div className='relative w-full'>
                <Combobox.Button className="absolute top-[14px]">
                  <Image src='/car-logo.svg' 
                  className='ml-4'
                  width={20}
                  height={20}
                  alt='logo' />
                </Combobox.Button>
                <Combobox.Input 
                  className='search-manufacturer__input'
                  placeholder='Volkswagen'
                  displayValue={(manufacturer :string)=> manufacturer}
                  onChange={(e) => setSearchQuery(e.target.value)}
                 />
                  <Transition
          as={Fragment}
          show={isShowing}
          enter="transform transition duration-[400ms]"
          enterFrom="opacity-0 rotate-[-120deg] scale-50"
          enterTo="opacity-100 rotate-0 scale-100"
          leave="transform duration-200 transition ease-in-out"
          leaveFrom="opacity-100 rotate-0 scale-100 "
          leaveTo="opacity-0 scale-95"
        >

                  <Combobox.Options>
                     {filteredManufacturer.length === 0 && searchQuery !== '' 
                     ?
                      (<Combobox.Option
                       value={searchQuery}
                       className='search-manufacturer__option'
                       >
                       </Combobox.Option>) : (
                        filteredManufacturer.map((item)=> (
                            <Combobox.Option
                            key={item}
                            className={({ active }) =>
                      `relative search-manufacturer__option ${
                        active ? "bg-primary-blue text-white" : "text-gray-900"
                      }`
                    }
                    value={item}>
                         {({ selected, active }) => (
                      <>
                        <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`}>
                          {item}
                        </span>

                        {/* Show an active blue background color if the option is selected */}
                        {selected ? (
                          <span className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active? "text-white": "text-pribg-primary-purple"}`}
                          ></span>
                        ) : null}
                      </>
                    )}
                    </Combobox.Option>
                            ))
                        )}
                  </Combobox.Options>
                 </Transition>
            </div>
        </Combobox>
    </div>
  )
}

export default SearchManufacturer