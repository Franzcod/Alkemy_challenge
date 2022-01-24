import React from 'react';
import style from './botonBox.module.css'

const BotonBox = (props) => {

    // console.log(props)
    
    
    let styleBoton = style.botonDesactivado;

    if (props.stateColor === 'true') {
        styleBoton = style.botonActivado;
    }
    
    return (
        <button className={styleBoton}>{props.text}</button>
    );
}

export default BotonBox;
