import { ShoppingBag } from "lucide-react"
import { useCart } from "@/utils/CartContext"
const BookCard = ({book}) => {
  const {addToCart} = useCart()
  return (
    <div key={book.id} className='flex flex-col  justify-center items-center p-4 gap-[40px] w-[400px] border-2 rounded-md'>
              <div className='w-[200px] '>
                <img src={book.img} alt={book.bookName} className='object-fill w-[150px] h-[225px]'/>
              </div>
              <div className='space-y-6'>
                <h1 className='text-[35px]'>{book.bookName}</h1>
                <h4 className='text-gray-500'>{book.author}</h4>
                <p className='text-[14px] text-[#DEDEDE] mb-4 h-[70px]'>{book.desc}</p>
                <p className='text-green-400 font-semibold'>$ {book.price}</p>
              </div>
              <div className='flex w-full justify-between flex-col md:flex-row gap-6'>
                <button className=' border-[#FF971D] text-[#FF971D]  font-medium  border-2 hover:bg-[#f3b875] hover:text-white duration-150  flex justify-center items-center md:w-[150px] rounded-lg space-x-2 py-2 ' onClick = {() =>addToCart(book)}><ShoppingBag className="mr-2"/> Add To Cart</button>
                <button className=' border-[#FF971D] text-[#FF971D]  font-medium border-2 hover:bg-[#f3b875] hover:text-white duration-150  flex justify-center items-center md:w-[150px] rounded-lg px-4 py-2'>By Item</button>
              </div>
    </div> 
  )
}

export default BookCard
