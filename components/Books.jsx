"use client"
import React, { useEffect } from 'react'
import { useBooks } from '@/utils/BooksContext'
import BookCard from './BookCard';
import { usePathname } from 'next/navigation';

const Books = () => {
    const { books,getBooks,addBook,filterBooks } = useBooks();

    const pathname = usePathname();

    useEffect(() => {
        getBooks();
    },[])

    // const getSearchQuery = () => {
    //     const search = new URLSearchParams(window.location.search);
    //     return search.get('search');
    // }

    
    // console.log(getSearchQuery());
    //     const query = getSearchQuery();
    //     const filteredBooks =   filterBooks(books,query);

    
    return (
    <div className='flex flex-col gap-8 items-center justify-center mb-20 mt-20' >
        <h1 className='text-[40px] font-bold '>Books</h1>
        <div className='grid grid-cols-3 gap-x-4 gap-y-8'>
          {books && books?.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
    </div>
  )
}

export default Books
