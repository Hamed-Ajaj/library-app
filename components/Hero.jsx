import React from 'react'
import { Search } from 'lucide-react'
import Input from './Input'
import { ComboboxDemo } from './ui/combox'
const Hero = () => {
  return (
    <section className='pt-20 mt-10 px-7 md:px-14 flex  relative'>
        <div className=' w-full flex flex-col md:w-1/2 md:items-start md:justify-center gap-y-6 md:gap-y-10'>
            <h1 className='uppercase w-full font-semibold text-[55px] md:font-bold md:text-[95px] leading-[1.3] '>read and add  your insight</h1>
            <p className='text-[1.1rem] md:text-[25px] font-[400]'>Find Your Favorite Book and Read it Here for Free</p>
            <div className='relative'>   
                <Search className=' absolute top-4 left-2 '/>
                <Input />
            </div>
            <div>
              
            </div>
        </div>
        <div className='hidden  md:absolute md:block -top-10 right-0 z-[-1] object-fill'>
            <img src="/hero.svg" alt="hero" />
            <img src="/square.svg" alt="square" className='z-0 absolute top-20 right-10' />
            <img src="/square.svg" alt="square" className='z-0 absolute bottom-32 left-52' />
        </div>
    </section>
  )
}

export default Hero
