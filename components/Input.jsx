"use client"
// import { useBooks } from '@/utils/BooksContext'
import { useState } from 'react'
const Input = () => {
    const [term, setTerm] = useState('')
    // const {setQuery} = useBooks()

    // const searchBook = (e) =>{
    //     e.preventDefault()
    //     setQuery(term)
    //     setTerm('')
    // }

  
return(
    <div>
      <form >
        <input type="text" name="search" 
        placeholder='Search Book' 
        onChange={(e) => setTerm(e.target.value)}
        value={term}
        className='bg-[#F5F6F8] h-[60px] px-4 pl-10 rounded-lg'/>
      </form>
    </div>
  )
}

export default Input
