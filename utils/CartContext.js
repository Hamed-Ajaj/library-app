"use client"


import { createContext, useState, useEffect, useContext } from "react";
// import { Query } from "appwrite";
import db from "@/app/database";
import { useAuth } from "./AuthContext";
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
                db.cart.create(product);
                setCart([...cart, {title:"no title",...product}]);
        } catch (error) {
            console.log("there is something")
        }
        
    }

    const addQuantity = async (productId) => {
        const item = await db.cart.get(productId);
        db.cart.update( productId, { quantity: item?.quantity + 1 })

        setCart(cart.map((product) => {
            if (product.$id === productId) {
                return { ...product, quantity: product.quantity + 1 };
            }
            return product;
        }));

    }

    const removeQuantity = async (productId) => {
        const item = await db.cart.get(productId);
        db.cart.update( productId, { quantity: item?.quantity - 1 })
        
        setCart(cart.map((product) => {
            if (product.$id === productId) {
                return { ...product, quantity: product.quantity - 1 };
            }
            return product;
        }));
    }

    const removeFromCart = async (productId) => {
        try {
            db.cart.delete(productId);
            setCart(cart.filter((product) => product.$id !== productId));
        } catch (error) {
            console.error("The id is not available")
        }
    }

    useEffect(() => {
        getCart();
    }, []);

    const contextData = {
        getCart,
        cart,
        addToCart,
        addQuantity,
        removeQuantity,
        removeFromCart
    }

    return (
        <CartContext.Provider value={contextData}>
            {children}
        </CartContext.Provider>
    );
}

export const useCart = () => useContext(CartContext);