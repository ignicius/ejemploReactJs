import React from 'react'
import { Link } from "react-router-dom"

const Item = ({ item }) => {
    return (
        <div>
            <img src={item.img} alt="Img" />
            <h2>{item.title}</h2>
            <h3>{item.description}</h3>
            <p>${item.price}</p>
            <Link to={`/item/${item.id}`}>Ver detalles</Link> 
        </div>

    )
}

export default Item