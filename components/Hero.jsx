import React from 'react'
import { Search } from 'lucide-react'
import Input from './Input'
const Hero = () => {
  return (
    <section className='py-20 mt-10 px-14 flex  relative'>
        <div className='flex flex-col w-1/2 items-start justify-center gap-y-10'>
            <h1 className='uppercase w-full font-bold text-[95px] leading-[1.3]'>read and add <br /> your insight</h1>
            <p className='text-[25px] font-[400]'>Find Your Favorite Book and Read it Here for Free</p>
            <div className='relative'>   
                <Search className='absolute top-4 left-2'/>
                <Input />
            </div>
        </div>
        <div className='absolute -top-10 right-0 z-[-1] object-fill'>
            <img src="/hero.svg" alt="hero" />
            <img src="/square.svg" alt="square" className='z-0 absolute top-20 right-10' />
            <img src="/square.svg" alt="square" className='z-0 absolute bottom-32 left-52' />
        </div>
    </section>
  )
}

export default Hero
