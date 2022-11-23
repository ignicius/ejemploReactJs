const ItemListContainer = ({greeting}) => {
    // const {greeting} = props // se desestructura y se pone greetings como variable --- sin llaves no seria desestrcturado, sino seria una variable y no arrojaria mismo resultado.
    
    return <h1>{greeting}</h1>     
}

export default ItemListContainer