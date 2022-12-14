import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getItemsById } from "../../asyncMock"


const ItemDetailsContainer =   () => {
    const [items, setItems] = useState ([])
    const [isLoading, setIsLoading] = useState(true)

    const params = useParams()
    console.log(params)

    useEffect(() => {
        getItemsById(params.itemId)
            .then(response => {
                setItems(response)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }, [])
    
    if (isLoading) {
        return <h1>Cargando Productos...</h1>
    }
    return(
        <div>
            <h1>Productos</h1>
            <ItemList items={items} />
        </div>
        )     
}

export default ItemDetailsContainer