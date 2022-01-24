import React from 'react';
import {Link} from 'react-router-dom';
import style from './navigation.module.css'



const Navegation = () => {
    return (
        <div className={style.Nav}>
            <Link to="/" className={style.links}>Inicio</Link>
            <Link to="/cuentas"  className={style.links}>Cuentas</Link>
            <Link to="/crear-cuenta"  className={style.links}>Nueva cuenta</Link>
        </div>
    );
}

export default Navegation;
