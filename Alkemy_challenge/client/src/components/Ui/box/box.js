import React from 'react';
// import Boton from '../boton/Boton';
import BotonBox from '../boton_box/BotonBox';
import style from './box.module.css'
import sum from '../../../assets/sum.png'
import rest from '../../../assets/rest.png'

const Box = ({data}) => {

    // console.log(data)

    let styleEstadoCuenta = style.estadoPendiente;

    if (data.type === 'activo') {
        styleEstadoCuenta = style.estadoFinalizado;
    }

    let numero = data.id.split('-')[1];

    let fechaInit = data.createdAt.split('T')[0].split('-').reverse().join('-') + ' (' + data.updatedAt.split('T')[1].split('.')[0] + ')';
    let fechaUpdate = data.updatedAt.split('T')[0].split('-').reverse().join('-') + ' (' + data.updatedAt.split('T')[1].split('.')[0] + ')';


    return (
        <div className={style.boxCont}>
            <div className={style.cuenta_estado}>
                <p>id: {numero}</p>
                <p>Fecha de inicio: {fechaInit}</p>
                 {/*<span className={styleEstadoCuenta}>{data.type === 'pasivo' ? '-' : '+' }</span>*/}
                 {
                        data.type === 'activo' 
                            ? <img className={style.iconoImgSum} src={sum} alt="sum" width="40"/>
                            : <img className={style.iconoImgRest} src={rest} alt="sum" width="40"/>
                 }
            </div>

            <div className={style.monto_partes_boton}>

                <div className={style.contMonto}>
                    <p>Monto</p>
                    <p className={style.plata}>$ {data.amount}</p> 
                </div>


                <div className={style.contBotones}>
                    <BotonBox text='Editar' stateColor={data.estadoDeudor === true ? 'true' : 'false'}/>
                    <BotonBox text='Eliminar' stateColor={data.estadoPrestamista === true ? 'true' : 'false'}/>
                </div>

                
            </div>
                
            <div className={style.concepto_limite_cuota}>
                <p>Concepto: <span className={style.concepto}>{data.concept}</span></p>
                <p>Ult. modif: {fechaUpdate}</p>
            </div>

        </div>
    );
}

export default Box;
