"use client"
import MyButton from './MyButton'
import { useAuth } from '@/utils/AuthContext'
import { ShoppingBag } from 'lucide-react'
import Link from 'next/link'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useProfile } from '@/utils/ProfileContext'
import { links } from '@/utils/constants'
import { useRouter } from 'next/navigation'
import { useCart } from '@/utils/CartContext'
import { IconFidgetSpinner } from '@tabler/icons-react'

const Header = () => {

  const {user} = useAuth()
  const {profile} = useProfile()
  const {cart,loading} = useCart()
  
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
              <Link key={link.id} href={link.url} >
                {link.name}
              </Link>
            ))}
        </div>
        {!user&&<MyButton link={"/login"}>Sign in</MyButton>}
          <div className='relative'>
              <div className='absolute -top-2 -right-2 bg-white text-black text-xs font-bold rounded-full h-4 w-4 flex justify-center items-center'>
                {cart?.length}
              </div>
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

