"use client"

import { createContext, useState, useEffect, useContext } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    
    const getCart = async () => {
        const cart = await fetch("/api/cart");
        const cartData = await cart.json();
        setCart(cartData);
    }
    const addToCart = (product) => {
        setCart([...cart, product]);
    }

    const removeFromCart = (productId) => {
        setCart(cart.filter((product) => product.id !== productId));
    }

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