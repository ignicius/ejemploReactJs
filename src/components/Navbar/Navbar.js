import './Navbar.css'
import Button from '../Button/Button'


const Navbar = (props) =>{
    console.log(props)
    return(
        <nav className='navbar'>
            <h1 style ={{ color: props.colorTitle}}>MyApp</h1>
            <Button text='Home' />
            <Button text='About'/>
            <Button text='Contact'/>
        </nav>
    )
}

export default Navbar