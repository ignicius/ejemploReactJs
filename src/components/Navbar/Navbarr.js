import React, { useContext } from 'react'
import './Navbar.css'
import Button from '../Button/Button'
import CartWidget from '../CartWidget/CartWidget'
import Counter from '../Counter/Counter'
import { NavLink, Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'


const Navbar = () => {

   const { cart } = useContext(CartContext)
    return (
        <div className='grid-nav'>
            <nav className='navbar'>
                <img src='./images/logoiphni.jpg' alt='logo' width='150px'/>
                <h1>iPhnicius</h1>
                <section className='products'>
                    <NavLink to='/'>Todo</NavLink>
                    <NavLink to='/category/iPhone'>iPhones</NavLink>
                    <NavLink to='/category/iPad'>iPad</NavLink>
                    <NavLink to='/category/MacBook'>MacBook</NavLink>
                    
                        <Link to='/cart'>
                            Cart: {cart.length}
                        </Link>
                    
                    
                    <Link to='/login'>Login</Link>
                    
                    <div>                    
                        <Button><CartWidget/></Button>
                        <Counter initial={0} stock={15}/>
                    </div>
                </section>
            </nav>
        </div>
    )
}

export default Navbar;