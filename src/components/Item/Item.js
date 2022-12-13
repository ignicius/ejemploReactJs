
const Item = ({ item }) => {
    return (
        <div>
            <h2>{item.title}</h2>
            <h3>{item.description}</h3>
            <p>{item.price}</p>
            <img>{item.src}</img>
        </div>

    )
}

export default Item