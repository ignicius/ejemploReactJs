import React from 'react'
import { useState } from 'react'

const Counter = ({initial, stock, onAdd}) => {
    const[count, setCount] = useState(initial)
    
    setTimeout(() =>{
    },2000)

    const increment = () => {
        if (count < stock){
        setCount(count + 1)
        }    
    }

    const decrease = () =>{
        if(count > initial)
        setCount(count - 1)
    }

    return(
        <div>
            <h2>{count}</h2>
            <button onClick= {() => increment()}>+</button>
            <button onClick= {() => decrease()}>-</button>
            <button onClick={() => onAdd(count)}>Agregar al carrito</button>

        </div>
    )
}

export default Counter

