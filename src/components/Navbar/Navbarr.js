import './Navbar.css'
import Button from '../Button/Button'


const Navbar = (props) => {
    console.log(props)

    const handleOnClick = () =>{
        alert ('hice click')
    }

    const handleOnClick2 = () =>{
        alert ('hice otro click')
    }

    return (
        <nav className='navbar'>
            <h1 style ={{ color: props.colorTitle}}>iPhnicius</h1>
            <Button colorText='purple' func={handleOnClick}>iPhones</Button>
            <Button colorText='green' func={handleOnClick2}>iPads</Button>
            <Button>MacBooks</Button>
        </nav>
    )
}

export default Navbar;