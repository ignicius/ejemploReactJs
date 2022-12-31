import { useState, useEffect, useContext } from "react"
import React from "react"
import { useParams } from "react-router-dom"
import { getItemsById } from "../../asyncMock"
import { CartContext } from "../../context/CartContext"


const ItemDetailsContainer =   () => {
    const [item, setItem] = useState ([])
    const [isLoading, setIsLoading] = useState(true)

    const { addItem, isInCart, removeitem } = useContext(CartContext)

    const { itemId } = useParams()

    useEffect(() => {
        getItemsById(itemId)
            .then(response => {
                setItem(response)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }, [itemId])
    
    if (isLoading) {
        return <h1>Cargando Productos...</h1>
    }

    const isAdded = isInCart(item.id)

    
    const handleOnAdd = (item) => {
        addItem(item)
        
    }


    return(

        <div>
            <img src={item.img} alt="img"/>
            <h1>{item.title}</h1>
            <h2>{item.category}</h2>
            <p>{item.price}</p>
            <button
                onClick={() => {isAdded ? removeitem(item.id) : handleOnAdd(item)}}
                >
                    { isAdded ? 'Quitar del carrito' : 'Agregar al carrito' }
            </button>
        </div>

    )     
}

export default ItemDetailsContainer