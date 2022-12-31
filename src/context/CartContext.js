import React from "react";
import { useState, createContext } from "react";

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addItem = (itemToAdd) => {
        if(!isInCart(itemToAdd.id)) {
            setCart([...cart, itemToAdd])
        }
    }

    const isInCart = (id) => {
        return cart.some(item => item.id === id)
    }

    const removeItem = (id) => {
        const updatedCart = cart.filter(item => item.id !== id)
        setCart(updatedCart)
    }

    return (
        <CartContext.Provider value ={{ cart, addItem, removeItem, isInCart }}>
            {children}
        </CartContext.Provider>

        
    )

}