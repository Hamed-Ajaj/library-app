"use client"
import { useCart } from "@/utils/CartContext"
import { useEffect } from "react";
const Cart = () => {

  
  useEffect(() => {
    getCart();
  },[])
  
  const { cart, removeFromCart,getCart } = useCart();

  return (
    
    <section className="mt-20 p-8">
        <div className="flex flex-col gap-8 justify-center items-center">
            <h1 className="text-4xl">Cart</h1>
            <div className="flex flex-col gap-4">
                {cart?.map((product) => (
                    <div key={product.id} className="flex gap-4 items-center">
                        <img src={product.img} alt={product.bookName} className="w-20 h-20 object-cover rounded-lg"/>
                        <div>
                            <h2 className="text-xl">{product.bookName}</h2>
                            <p className="text-gray-400">{product.price}</p>
                        </div>
                        <button onClick={() => removeFromCart(product.id)} className="bg-red-500 text-white px-4 py-2 rounded-lg">Remove</button>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Cart
