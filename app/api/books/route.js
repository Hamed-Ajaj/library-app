import { NextResponse } from "next/server";
import { books } from "@/utils/constants";
import { ID } from "appwrite";
export async function GET() {
    return NextResponse.json(books)
}



export async function POST(req) {
    try {
      // Parse JSON data from the request body
      const { bookName, author, genre, price } = JSON.parse(req.body);
  
      // Create a new book object (you can replace this with actual database logic)
      const newBook = {
        id: ID.unique(), // Generate a unique ID
        bookName,
        author,
        genre,
        price
      };
  
      // Add the new book to your books array (again, replace with actual database logic)
      books.push(newBook);
  
      return new Response(JSON.stringify(newBook), {
        headers: {
          "Content-Type": "application/json"
        },
        status: 201
      });
    } catch (error) {
      console.error("Error adding book:", error);
      return NextResponse.error("Error adding book", 500);
    }
}

