import React, {useContext} from 'react';
import {SocketContext} from '../../src/context/socketContext';
import style from './connectionInfo.module.css'

const Connectioninfo = () => {

    const {socket} = useContext(SocketContext);

    console.log('socketUser: ', socket.connected);

    return (
        <div className={style.connectionCont}>
            <h6>Socket connect state</h6>
            {
                socket.connected 
                    ? <div className={style.luzNeonOn}></div> 
                    : <div className={style.luzNeonOff}></div>
            }
        </div>
        
    );
}

export default Connectioninfo;
