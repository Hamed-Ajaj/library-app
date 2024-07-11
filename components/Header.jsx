"use client"
import React, { useState } from 'react'
import MyButton from './MyButton'
import { useAuth } from '@/utils/AuthContext'
import { ShoppingBag } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useProfile } from '@/utils/ProfileContext'
import { useMotionValueEvent, useScroll } from "framer-motion"
import { links } from '@/utils/constants'



const Header = () => {
  const [headerBg, setHeaderBg] = useState(null)
  const { scrollY } = useScroll()
    useMotionValueEvent(scrollY, "change", (latest) => {
      if (latest > 0) {
        setHeaderBg('bg-slate-300 shadow-md')
      } else {
        setHeaderBg(null)
      }
  })

  const pathname = usePathname()
  const {user,logoutUser} = useAuth()
  const {profile} = useProfile()
  return (
    <div className={`flex bg-[#FF971D]  fixed top-0 right-0 left-0 justify-between items-center gap-4 py-6 px-6 md:px-20 w-full min-h-20 z-[10]`}>
        <div className='flex gap-4 justify-center items-center'>
          <h1 className='text-2xl text-white font-bold'>
            <Link href={"/"}>My Books</Link>
          </h1>
        </div>
        <div className='flex gap-6 justify-center items-center '>
        <div className={`hidden md:flex gap-10 text-white text-[1.05rem] font-medium`}>
            {links.map((link) => (
              <Link key={link.id} href={link.url}>
                {link.name}
              </Link>
            ))}
        </div>
        {!user&&<MyButton link={"/login"}>Sign in</MyButton>}
          <div>
              <Link href={user?"/cart":"/login"} className='cursor-pointer'>
                <ShoppingBag size={30} className='text-white font-bold hover:text-gray-800 duration-150'/>
              </Link>
          </div>
          <div>
            <Link href={user?"/profile":"/login"}>
              <Avatar>
                {profile.img && <AvatarImage src={profile.img} />}
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </Link>
          </div>
        </div>
    </div>
  )
}

export default Header

