import { useState } from "react"
import { Link } from "react-router-dom"
import Button from "../Button/Button"
import Item from "../Item/Item"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"



// const InputCount = ({onConfirm, stock, initial= 1}) => {

//     const [count, setCount] = useState(initial)

//     const handleOnChange = (e) => {
//         if(e.target.value <= stock){
//             setCount(e.target.value)
//         }
//     }

//     return (
//         <div>
//             <input type="number" onChange={handleOnChange} value={count} />
//             <button onClick={() => onConfirm(count)}>Agregar al carrito</button>
//         </div>
//     )

// }

// const ButtonCount = ({onConfirm, stock, initial= 1}) => {
//     const [count, setCount] = useState(initial)

//     const increment = () =>{
//         if(count < stock) {
//             setCount(count + 1)
//         }
    
//     }

//     const decrement = () => {
//         setCount(count - 1)

//     }

//     return (
//         <div>
//             <p>{count}</p>
//             <button onClick={decrement} />
//             <button onClick={increment} />
//             <button onClick={() => onConfirm(count)}>Agregar al carrito</button>
//         </div>
//     )
// }


const ItemDetail = ( {id, title, img, description, price, stock } ) => {

    const { addItem } = useContext(CartContext)

    const [inputType, setInputType] = useState('button')
    const [quantityToAdd, setQuantityToAdd] = useState(0)

    const handleOnAdd = (quantity) => {
        console.log('agregue al carrito' + quantity)
        setQuantityToAdd(quantity)

        addItem ({ id, title, price, quantity })
    }

    const Count = inputType === 'button' ? ButtonCount : InputCount

    return (
        <article>
            <button onClick={() => setInputType(inputType === 'button' ? 'input' : 'button')}>{inputType === 'button' ? 'pasar a input' : 'pasar a button'}</button>
            <header>
                <h2>
                    {title}
                </h2>
            </header>
            <picture>
                <img src={img} alt={title}/>
            </picture>
            <section>
                <p>
                    Categoria:{category}
                </p>
                <p>
                    Precio:{price}
                </p>
            </section>
            <footer>
                {
                    quantityToAdd === 0 ? (
                        <Count onConfirm={handleOnAdd} stock={stock}/>
                    ) : (
                        <Link to='/cart'>Finalizar compra</Link>
                    )
                }
            </footer>
        </article>
    )
}

export default ItemDetail





