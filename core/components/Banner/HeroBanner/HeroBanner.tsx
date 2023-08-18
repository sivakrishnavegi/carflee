'use client'
import { CustomButton } from "@/core/UI"
import Image from "next/image"

const HeroBanner = () => {
  const handleScroll = () => {
  }
  return (
    <div className='hero'>
      <div className='flex-1 pt-36 padding-x'>
        <h1 className='hero__title'>
        Eat Read Sleep !
        </h1>
        <p className="hero__subtitle">
        Knowledge is a seed that grows when you read.
        </p>
        <CustomButton
         title={'hit me up'}
         containerStyles="bg-amber-500 py-2 px-3 text-white rounded-full mt-10"
         handleClick={handleScroll}
          />
      </div>
      <div className='hero__image-container'>
        <div className="hero__image">
          <Image />
        </div>
      </div>
    </div>
  ) 
}

export default HeroBanner