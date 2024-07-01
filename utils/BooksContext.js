"use client"

import { createContext, useState, useEffect, useContext } from "react";

const BooksContext = createContext();


export const BooksProvider = ({ children }) => {
    const [books, setBooks] = useState(null);
    const [loading, setLoading] = useState(true);
    
    
    const getBooks = async () => {
        setLoading(true);
        const response = await fetch("http://localhost:3000/api/books");
        const data = await response.json();
        setBooks(data);
        setLoading(false);
    }

    const filterBooks = (books, query) => {
        return books.filter((book) => book.bookName.toLowerCase().includes(query));
    }

    const filterBooksByGenre = (books, genre) => {
        return books.filter((book) => book.genre.toLowerCase().includes(genre.toLowerCase()));
    }

    const addBook = async (book) => {
        fetch('http://localhost:3000/api/books', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title: 'Sample Book', author: 'John Doe', genre: 'Fiction', price: 200}),
          })
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((error) => console.error('Error:', error));
    }

    const contextData = {
        books,
        setBooks,
        getBooks,
        filterBooks,
        filterBooksByGenre,
        addBook,
    }

    useEffect(() => {
        getBooks();
    },[])
    
    return (
        <BooksContext.Provider value={contextData}>
            {children}
        </BooksContext.Provider>
    );
}

export const useBooks = () => useContext(BooksContext);