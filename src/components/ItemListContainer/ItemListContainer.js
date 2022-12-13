import { useState, useEffect } from "react"
import ItemList from '../ItemList/ItemList'
import { getItems } from "../../asyncMock"

const ItemListContainer =   () => {
    const [items, setItems] = useState ([])

    useEffect(() => {
        getItems()
            .then(response => {
                setItems(response)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])
    
    return(
        <div>
            <h1>Productos</h1>
            <ItemList />
        </div>
        )     
}

export default ItemListContainer