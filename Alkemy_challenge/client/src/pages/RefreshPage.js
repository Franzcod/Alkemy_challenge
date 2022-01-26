import React from 'react';
import style from '../css/refreshPage.module.css'
import loading from '../assets/loading-blue.gif'

const Refreshpage = () => {
    return (
        <div className={style.container}>
            
            <img src={loading} alt="loading"/>
            <h2>Loading...</h2>
        </div>
    );
}

export default Refreshpage;
