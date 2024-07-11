
import { useBooks } from '@/utils/BooksContext'
import BookCard from './BookCard';
import { useCart } from '@/utils/CartContext';
import { ShoppingBag } from 'lucide-react';
// import BooksGenre from './BooksGenre';


const Books = () => {
    const { books } = useBooks();
    const {addToCart} = useCart()
    const handleAddToCart = (item) =>{
      addToCart(item)
    }
    return (
    <div className='flex flex-col gap-8 items-center justify-center mb-20 mt-20' >
      {/* <BooksGenre /> */}
        <h1 className='text-[40px] font-bold '> Books</h1>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-8'>
            {books?.map((book) => (
              <div key={book.$id} className='flex flex-col  justify-between items-center p-4 gap-[40px] w-[400px] border-2 rounded-md'>
                <div className='w-[200px] '>
                  <img src={book?.CoverImage||"/no_cover.gif"} alt={book.title} className='object-fill w-[150px] h-[225px]'/>
                </div>
                <div className='space-y-6'>
                  <h1 className='text-[35px]'>{book.title}</h1>
                  <h4 className='text-gray-500'>{book?.authors}</h4>
                  <p className='text-[14px] text-[#DEDEDE] mb-4 h-[70px]'>{book.Description}</p>
                  <p className='text-green-400 font-semibold'>$ {book?.price}</p>
                </div>
                <div className='flex w-full justify-between flex-col md:flex-row gap-6'>
                  <button className=' border-[#FF971D] text-[#FF971D]  font-medium  border-2 hover:bg-[#f3b875] hover:text-white duration-150  flex justify-center items-center md:w-[150px] rounded-lg space-x-2 py-2 '> By Item</button>
                  <button className=' border-[#FF971D] text-[#FF971D]  font-medium border-2 hover:bg-[#f3b875] hover:text-white duration-150  flex justify-center items-center md:w-[150px] rounded-lg space-x-2 py-2'><ShoppingBag className="mr-2"/> Add To Cart</button>
                </div>
              </div> 
            ))}
          </div>
    </div>
  )
}

export default Books
