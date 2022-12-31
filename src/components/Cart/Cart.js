import React from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const Cart = () => {

    const { cart } = useContext(CartContext)

    return (
        <div>
            { cart.map(item => {
                return (
                    <div>
                        <h1>{item.title}</h1>
                    </div>
                )
            })}
        </div>

    )
}

export default Cart