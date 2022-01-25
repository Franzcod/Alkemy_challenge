import React,{useEffect, useState, useContext} from 'react';
import Header from '../components/Header';
import Box from '../components/Ui/box/box';
import style from '../css/homePage.module.css'
import {DataContext} from '../Contexts/DataContext';
import { AuthContext } from '../Contexts/AuthContext';
import Boton_add from '../components/Ui/boton_add/Boton_add';
import Swal from 'sweetalert2/src/sweetalert2.js'

const HomePage =  () => {

    const {Data, getData} = useContext(DataContext);
    const {Auth} = useContext(AuthContext);

    const Toast = Swal.mixin({
        toast: true,
        position: 'bottom-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      

    useEffect(() => {
        
        getData(Auth["user"].id);
        Toast.fire({
            icon: 'info',
            title: `Signed in successfully ${Auth["user"].name}`
          })
          
          
    }, []);


    let datos = Data.data

    return (
        <div className={style.container}>
            <Header/>
            <Boton_add data={Auth}/>
            <div className={style.contBoxs}>
                
                {
                    datos && datos.map( (item, index) => {
                        return (
                            <Box 
                                key={index}
                                data={item}
                            />
                        )
                    })
                }
            </div>
        </div>
    );
}

export default HomePage;
