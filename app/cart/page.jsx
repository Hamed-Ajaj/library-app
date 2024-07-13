"use client"
import { useCart } from "@/utils/CartContext"
import { useEffect, useState } from "react";
import { X } from "lucide-react";

const Cart = () => {

  
  const { cart, removeFromCart,addQuantity,removeQuantity } = useCart();
  if(cart.length < 1) {
    return (
      <section className="flex-center h-[80vh]">
        <h1 className="text-center text-[30px] font-semibold">Cart is empty</h1>
      </section>
    )
  }
  return (
    
    <section className="mt-20 p-8">
        <h1 className="text-center text-[30px] font-semibold mb-5">Cart Items ({cart?.length} items) </h1>
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-4 md:gap-8 border-b border-spacing-4">
            <div className="flex-center">items</div>
            <div className="flex-center">price</div>
            <div className="flex-center">quantity</div>
            <div className="flex-center">total</div>
          </div>
          {
            cart?.map((item) => (
              <div key={item.$id} className="grid grid-cols-4 md:gap-10 mb-4 py-4 border-b">
                <div className="flex items-center gap-4">
                  <img src={item.coverImg} alt={item.title} className="flex items-center w-32 h-32 object-contain" />
                  <div className="flex flex-col gap-4 w-[40%]">
                    <h1 className="w-full font-bold">{item.title}</h1>
                    <p className="text-nowrap text-gray-400 font-light">{item.description}</p>
                  </div>
                </div>
                <div className="flex-center p-6">$ {item.price}</div>
                <div className="flex items-center justify-center ">
                  <div className="border rounded-lg h-12 flex items-center">
                    <button className="p-4" onClick={()=>addQuantity(item.$id)}>+</button>
                      <span className="p-4 border w-full h-full flex-center">
                        {item.quantity}
                      </span>
                    <button className="p-4" onClick={() => removeQuantity(item.$id)}>-</button>
                  </div>
                </div>
                <div className="flex-center gap-5">
                    $ {item.price * item.quantity}
                  <button onClick={() => removeFromCart(item.$id)} className="text-red-500">
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
