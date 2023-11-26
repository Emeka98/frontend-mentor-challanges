import React from 'react'
import Button from '../Button'

function Hero() {
  return (
    <div className='w-full h-[405px] bg-[#f3603c]'>
     <div className='flex flex-col gap-7 w-full h-full justify-center items-center md:flex-row md:justify-between md:container md:mx-auto '>
        <h3 className='text-white text-[40px] font-bold leading-normal tracking-[-1px] text-center md:text-start md:w-[445px] '>Simplify how your team works today.</h3>
        <Button className="w-[137px] text-[#f3603c] bg-white" >Get Started</Button>
     </div>
    </div>
  )
}

export default Hero
