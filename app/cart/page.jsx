"use client"
import { useCart } from "@/utils/CartContext"
import CartItem from "@/components/CartItem";

const Cart = () => {
  const { cart } = useCart();
  
  if(cart?.length < 1) {
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
              <CartItem key={item.$id} item={item} />
            ))
          }
        </div>
    </section>
  )
}

export default Cart
