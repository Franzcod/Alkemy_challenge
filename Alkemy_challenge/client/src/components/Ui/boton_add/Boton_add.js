import React from 'react';
import style from './boton_add.module.css';

export default function Boton_add() {


    const agregar = () => {
        console.log("agregar")
    }
    


  return <div className={style.container}>
  
        <div className={style.contBtn}>
            <button 
                className={style.boton_add} 
                onClick={ agregar }
            >
                <h2>Agregar</h2>
            </button>
        </div>
  
    </div>;
}
