import React, {useContext} from 'react';
// import Boton from '../boton/Boton';
import BotonBox from '../boton_box/BotonBox';
import style from './box.module.css'
import sum from '../../../assets/sum.png'
import rest from '../../../assets/rest.png'
import Swal from 'sweetalert2/src/sweetalert2.js'
import {DataContext} from '../../../../src/Contexts/DataContext';
import { AuthContext } from '../../../../src/Contexts/AuthContext';
import {fetchConToken } from '../../../helpers/fetch';

const Box = ({data}) => {

    // console.log(data)
    const {Data, getData, deleteForId} = useContext(DataContext);
    const {Auth} = useContext(AuthContext);

    // let styleEstadoCuenta = style.estadoPendiente;

    // if (data.type === 'activo') {
    //     styleEstadoCuenta = style.estadoFinalizado;
    // }

    const deletePost = () => {
        
        Swal.fire({
            title: 'Do you want to delete?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Delete',
            denyButtonText: `Don't delete`,
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                deleteForId(Auth.user.id, data.id);
                window.location.href = '/';
            } else if (result.isDenied) {
              Swal.fire('Canceled', '', 'info')
            }
          })
    }

    const update = () => {
        Swal.fire({
            title: 'Update',
            html: `<input type="text" id="concept" class="swal2-input" placeholder="Concept" value=${data.concept}>
                  <input type="text" id="amount" class="swal2-input" placeholder="Amount"  value=${data.amount}>
                  
                  <select id="category" class="swal2-input">
                  <option  value=${data.category}>${data.category}</option>
                    <option value="Auto">Auto</option>
                    <option value="Novia">Novia</option>
                    <option value="Trabajo">Trabajo</option>
                    <option value="Regalos">Regalos</option>
                    <option value="Pc">Pc</option>
                  </select>`,
            confirmButtonText: 'Save',
            focusConfirm: false,
            preConfirm: () => {
              const concept = Swal.getPopup().querySelector('#concept').value
              const amount = Swal.getPopup().querySelector('#amount').value
              const category = Swal.getPopup().querySelector('#category').value
              const id = data.id
              if (!concept || !amount  || !category) {
                Swal.showValidationMessage(`Please complete all the fields`)
              }
              return {id, concept, amount, type: data.type, category , userId: Auth.user.id}
            }
          }).then((res) => {
                console.log(res.value)
                fetchConToken('operations', res.value, 'PUT')
                getData(Auth["user"].id);
                window.location.href = '/';
          })
          .then((result) => {
            
            Swal.fire(`
              Saved successfully
            `.trim())
          })
    }

    let numero = data.id.split('-')[1];

    let fechaInit = data.createdAt.split('T')[0].split('-').reverse().join('-') + ' (' + data.updatedAt.split('T')[1].split('.')[0] + ')';
    


    return (
        <div className={style.boxCont}>
            <div className={style.cuenta_estado}>
                <p>Concepto: <span className={style.concepto}>{data.concept}</span></p>
                
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
                    <div onClick={update}>
                        <BotonBox text='Editar' stateColor={data.estadoDeudor === true ? 'true' : 'false'}/>
                    </div>
                    <div onClick={deletePost}>
                        <BotonBox text='Eliminar' stateColor={data.estadoPrestamista === true ? 'true' : 'false'}  />
                    </div>
                </div>

                
            </div>
                
            <div className={style.concepto_limite_cuota}>
              <p>id: {numero}</p>
              <p >Category: {data.category}</p> 
            </div>

        </div>
    );
}

export default Box;
