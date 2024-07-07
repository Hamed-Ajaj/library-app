import { genres } from "@/utils/constants"
import { useState } from "react"
import { useBooks } from "@/utils/BooksContext"
const BooksGenre = () => {
  const { genre,handleGenreChange } = useBooks()
  return (
    <div className="mb-10">
      <h1 className="text-center text-[30px] font-semibold mb-5">Genres</h1>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
        {
          genres.map((genreItem) => (
            <div 
            key={genreItem.id} 
            className="flex-center flex-col gap-2 p-4 border border-gray-200 rounded cursor-pointer hover:bg-slate-100 duration-150"
            onClick={() => handleGenreChange(genreItem.name)}
            >
              <h1>{genreItem.name}</h1>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default BooksGenre
