import React from 'react'
import { IconBrandInstagram } from '@tabler/icons-react'
import { IconBrandGithub } from '@tabler/icons-react'
import { IconBrandTwitter } from '@tabler/icons-react'
const Footer = () => {
  return (
    <div className='flex h-auto text-white bg-[#FF971D] flex-col md:flex-row md:h-[90px] py-8 px-8 w-full justify-between items-center mt-8 md:mt-20 '>
        <div>
            <h1 className='text-[30px] font-bold'>My Logo</h1>
        </div>
        <div className='font-medium text-[1.2rem]'>Copyright &#169; 2024 Created By Hamed Ajaj</div>
        <div>
            <ul className='flex gap-8'>
                <li><IconBrandInstagram size={35}  className='cursor-pointer hover:text-slate-300 duration-100'/></li>
                <li><IconBrandGithub size={35} className='cursor-pointer hover:text-slate-300 duration-100'/></li>
                <li><IconBrandTwitter size={35} className='cursor-pointer hover:text-slate-300 duration-100'/></li>
            </ul>
        </div>
    </div>
  )
}

export default Footer
