import React from 'react'

const Button = (props) => {
    return <button onClick={props.func} style={{ color: props.colorText, backgroundColor: "black"}}>{props.children}</button>
}

export default Button