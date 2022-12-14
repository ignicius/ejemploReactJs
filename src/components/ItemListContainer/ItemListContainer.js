import { useState, useEffect} from "react"
import React from "react"
import ItemList from '../ItemList/ItemList'
import { getItems, getItemsByCategory } from "../../asyncMock"
import { useParams } from "react-router-dom"

const ItemListContainer =   () => {
    const [items, setItems] = useState ([])

    const { categoryId } = useParams()
    console.log(categoryId)

    useEffect(() => {
        if(!categoryId) {
            getItems()
                .then(response => {
                    setItems(response)
                })
                .catch(error => {
                    console.log(error)
                })
    }   else{
            getItemsByCategory(categoryId)
                .then(response => {
                    setItems(response)
                })
                .catch(error =>{
                    console.log(error)
                })
            }
    }, [categoryId])
    
    return (
        <div>
            <h1>Productos</h1>
            <ItemList items={items} />
        </div>
        )     
}

export default ItemListContainer