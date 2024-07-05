"use client"
import { useCart } from "@/utils/CartContext"
import { useEffect } from "react";
import { X } from "lucide-react";
const Cart = () => {

  
  useEffect(() => {
    getCart();
  },[])
  
  const { cart, removeFromCart,getCart } = useCart();

  return (
    
    <section className="mt-20 p-8">
        <h1 className="text-center text-[30px] font-semibold">Cart Items ({cart?.length})</h1>
        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-4 md:gap-8 border-b border-spacing-4">
            <div className="flex-center">items</div>
            <div className="flex-center">price</div>
            <div className="flex-center">quantity</div>
            <div className="flex-center">total</div>
          </div>
          {
            cart.map((item) => (
              <div key={item.id} className="grid grid-cols-4 md:gap-10 mb-4 py-4 border-b">
                <div className="flex items-center gap-4">
                  <img src={item.img} alt={item.name} className="flex items-center w-32 h-32 object-cover" />
                  <div className="flex-center">
                    <h1>{item.bookName}</h1>
                    <p>{item.desc}</p>
                  </div>
                </div>
                <div className="flex-center">{item.price}</div>
                <div className="flex-center">{item.quantity}</div>
                <div className="flex-center gap-5">
                  {item.price * item.quantity}
                  <button onClick={() => removeFromCart(item.id)} className="text-red-500">
                    <X size={24} />
                  </button>  
                </div>
              </div>
            ))
          }
        </div>
    </section>
  )
}

export default Cart
