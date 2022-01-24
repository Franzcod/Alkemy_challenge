import React, {useContext} from 'react';
import Boton from './Ui/boton/Boton';
import style from './header.module.css';

import Navegation from './Navegation';
import {Link} from 'react-router-dom';

import { AuthContext } from '../Contexts/AuthContext';



const Header = () => {


    const {Auth, logout} = useContext(AuthContext);
    // console.log('header: ',Auth)

    const usuario = Auth.user;


    return (
        <div className={style.ContenedorHeader}>
                <div className={style.contLogoNav}>
                    <div className={style.Logo}>aPay</div>
                    {/*<Navegation/>*/}
                </div>
                <div className={style.ContBotons}>
                    {
                        usuario ? (
                            <>
                                <div className={style.contInfo}>
                                    <p>User: {Auth.user.name}</p>
                                    <p>Email: {Auth.user.email}</p>
                                </div>
                                 <Boton 
                                    bgColor='true' 
                                    text='Cerrar sesion'
                                    onClick={logout}
                                />
                                     
                                
                            
                            </>
                        ) : (
                            <>
                                <Link to='/auth/login'>

                                    <Boton bgColor='true' text='Login'></Boton>
                                </Link>

                                <Link to='/auth/register'>
                                    <Boton text='Crear Cuenta'></Boton>
                                </Link>
                            </>
                        )
                    }
                    
                </div>

            
        </div>
    );
}

export default Header;
