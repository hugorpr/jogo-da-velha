import React from "react";
import './style.css'

const Sobre = (props) => {
    return (
        <a href='https://react.dev' className='sobre'>{props.label}</a>
    )
}

export default Sobre