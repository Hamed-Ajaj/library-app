"use client"
import { useBooks } from '@/utils/BooksContext'
import { useState } from 'react'
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
const Input = () => {
    const [term, setTerm] = useState('')
    const {setBooks,filterBooks,books} = useBooks()
    const [searchParams] = useSearchParams()
    const router = useRouter()
    const {pathname} = usePathname()


  
return(
    <div>
      <form >
        <input type="text" name="search" 
        placeholder='Search Book' 
        onChange={(e) => setTerm(e.target.value)}
        // defaultValue={searchParams.get('query')?.toString()}
        className='bg-[#F5F6F8] h-[60px] px-4 pl-10 rounded-lg'/>
      </form>
    </div>
  )
}

export default Input
