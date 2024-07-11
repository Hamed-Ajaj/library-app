"use client"


import { createContext, useState, useEffect, useContext } from "react";
// import { Query } from "appwrite";
import db from "@/app/database";
const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(null);
    const [loading,setLoading] = useState(null)
    const getCart = async () => {
        try {
            setLoading(true)
            const response = await db.cart.list();
            setCart(response.documents);
            setLoading(false)
        } catch (error) {
            console.error("The id is not available")
            setLoading(false)
        }
       
    }
    const addToCart = (product) => {
        try {
            const item = cart.find((item) => item.id === product.id);
            if (item) {
                item.quantity += 1;
                db.cart.update(item.$id, item);
                setCart([...cart]);
            } else {
                db.cart.create(product);
                setCart([...cart, product]);
            }
        } catch (error) {
            console.error("The id is not available")
        }
        
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