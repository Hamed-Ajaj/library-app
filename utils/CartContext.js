"use client"

import { DELETE } from "@/app/api/cart/route";
import { createContext, useState, useEffect, useContext } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(null);
    const [loading,setLoading] = useState(null)
    const getCart = async () => {
        setLoading(true)
        const cart = await fetch("http://localhost:3000/api/cart");
        const cartData = await cart.json();
        setCart(cartData);
        setLoading(false)
    }
    const addToCart = (product) => {
        setCart([...cart, product]);
    }

    const removeFromCart = async (productId) => {
        // const removeItem = await DELETE("http://localhost:3000/api/cart", { id: productId }, "DELETE");
        // if (!removeItem.ok) {
        //     throw new Error("Failed to remove item from cart");
        // }
        setCart(cart.filter((product) => product.id !== productId));
    }

    useEffect(() => {
        getCart();
    }, []);

    const contextData = {
        getCart,
        cart,
        addToCart,
        removeFromCart,
    }

    return (
        <CartContext.Provider value={contextData}>
            {children}
        </CartContext.Provider>
    );
}

export const useCart = () => useContext(CartContext);