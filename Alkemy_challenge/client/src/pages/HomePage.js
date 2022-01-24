import React,{useEffect, useState, useContext} from 'react';
import Header from '../components/Header';
import Box from '../components/Ui/box/box';
import style from '../css/homePage.module.css'
import {DataContext} from '../Contexts/DataContext';
import { AuthContext } from '../Contexts/AuthContext';


const HomePage =  () => {

    const {Data, getData} = useContext(DataContext);
    const {Auth} = useContext(AuthContext);

    useEffect(() => {
        
        getData(Auth["user"].id);
    }, []);


    let datos = Data.data

    return (
        <div className={style.container}>
            <Header/>
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
