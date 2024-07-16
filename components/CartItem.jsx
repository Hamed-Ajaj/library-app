import { useCart } from '@/utils/CartContext';
import { X } from 'lucide-react';
import React from 'react'

function CartItem({item}) {
  const { removeFromCart,addQuantity,removeQuantity } = useCart();

  return (
            <div  className="grid grid-cols-4 md:gap-10 mb-4 py-4 border-b">
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
  )
}

export default CartItem