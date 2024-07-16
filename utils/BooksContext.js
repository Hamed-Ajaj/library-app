"use client"

import { createContext, useState, useEffect, useContext, useMemo } from "react";
import db from "@/app/database";
const BooksContext = createContext();
import { Query } from "appwrite";

export const BooksProvider = ({ children }) => {
    const [books, setBooks] = useState(null);
    const [query, setQuery] = useState("");
    const [loading, setLoading] = useState(true);
    // const [genre, setGenre] = useState("All");
    // console.log(query)
    const handleGenreChange = (genre) =>{
        setGenre(genre)
    }
    
    const getBooks = async () => {
        try {
          setLoading(true);
          const response = await db.books.list();
          // Assuming response.documents is an array of books
          setBooks(response.documents);
        } catch (error) {
          console.error("Error fetching books:", error);
          // Show an error message to the user
          // setErrorMessage("Books are not available. Please try again later.");
        } finally {
          setLoading(false);
        }
      };

      const searchBooks = async (query) => {
        try {
          setLoading(true);
          const response = await db.books.list([
            Query.search("title", query!==""?query:getBooks())
          ]);
          setBooks(response.documents);
        } catch (error) {
          console.error("Error fetching books:", error);
          // Show an error message to the user
          // setErrorMessage("Books are not available. Please try again later.");
        } finally {
          setLoading(false);
        }
      }
    
    useEffect(() => {
        getBooks()
    },[])


    const contextData = {
        books,
        getBooks,
        searchBooks,
        setQuery
        // genre,
        // setQuery
    }

    
    return (
        <BooksContext.Provider value={contextData}>
            {loading?<h1>loading...</h1>:children}
        </BooksContext.Provider>
    );
}

export const useBooks = () => useContext(BooksContext);