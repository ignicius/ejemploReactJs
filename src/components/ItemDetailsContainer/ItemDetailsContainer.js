import { useState, useEffect } from "react"
import React from "react"
import { useParams } from "react-router-dom"
import { getItemsById } from "../../asyncMock"


const ItemDetailsContainer =   () => {
    const [item, setItem] = useState ([])
    const [isLoading, setIsLoading] = useState(true)

    const itemId = useParams()

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

    return(
        <div>
            <img alt="img">{item.img}</img>
            <h1>{item.title}</h1>
            <h2>{item.price}</h2>
            <p>{item.category}</p>
        </div>
        )     
}

export default ItemDetailsContainer