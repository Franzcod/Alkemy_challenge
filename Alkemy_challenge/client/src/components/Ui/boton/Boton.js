import React from 'react';
import style from './boton.module.css';

const Boton = (props) => {


    let styleBoton = style.botonSinFondo;

    if (props.bgColor) {
        styleBoton = style.botonConFondo;
    }


    return (
        <div>
            <button className={styleBoton} onClick={props.onClick}>{props.text}</button>
        </div>
    );
}

export default Boton;
