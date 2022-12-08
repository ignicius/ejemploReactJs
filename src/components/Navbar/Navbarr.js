import './Navbar.css'
import Button from '../Button/Button'
import CartWidget from '../CartWidget/CartWidget'
import Counter from '../Counter/Counter'


const Navbar = (props) => {
    console.log(props)

    const handleOnClick = () =>{
        alert ('Aqui se despliegan los iPhones')
    }

    const handleOnClick2 = () =>{
        alert ('Aqui se despliegan los iPads')
    }

    const handleOnClick3 = () =>{
        alert ('Aqui se despliegan las MacBooks')
    }

    const handleOnClick4 = () =>{
        alert ('Aqui se iria a nuestro carrito')
    }
    
    return (
        <div className='grid-nav'>
            <nav className='navbar'>
                <img src='./images/logoiphni.jpg' alt='logo' width='150px'/>
                <h1 style ={{ color: props.colorTitle}}>iPhnicius</h1>
                <section className='products'>
                    <Button colorText='purple' func={handleOnClick} >iPhones</Button>
                    <Button colorText='green' func={handleOnClick2}>iPads</Button>
                    <Button colorText='grey' func={handleOnClick3}>MacBooks</Button>
                    <div>
                        <Button func={handleOnClick4}><CartWidget/></Button>
                        <Counter initial={0} stock={15}/>
                    </div>
                </section>
            </nav>
        </div>
    )
}

export default Navbar;