import React,{useEffect, useState, useContext} from 'react';
import Header from '../components/Header';
import Box from '../components/Ui/box/box';
import style from '../css/homePage.module.css'
import {DataContext} from '../Contexts/DataContext';
import { AuthContext } from '../Contexts/AuthContext';
import Boton_add from '../components/Ui/boton_add/Boton_add';
import {fetchConToken} from '../helpers/fetch';
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


      const agregar = () => {
        Swal.fire({
            title: 'Add',
            html: `<input type="text" id="concept" class="swal2-input" placeholder="Concept">
                    <input type="text" id="amount" class="swal2-input" placeholder="Amount">
                    <input type="text" id="type" class="swal2-input" placeholder="Type">
                    <input type="text" id="category" class="swal2-input" placeholder="Category">`,
            confirmButtonText: 'Save',
            focusConfirm: false,
            preConfirm: () => {
              const concept = Swal.getPopup().querySelector('#concept').value
              const amount = Swal.getPopup().querySelector('#amount').value
              const type = Swal.getPopup().querySelector('#type').value
              const category = Swal.getPopup().querySelector('#category').value
              if (!concept || !amount || !type || !category) {
                Swal.showValidationMessage(`Please complete all the fields`)
              }
              return { concept, amount, type, category , userId: Auth.user.id}
            }
          }).then((res) => {
                console.log(res.value)
                fetchConToken('operations', res.value, 'POST')
                getData(Auth["user"].id);
          })
          .then((result) => {
            
            Swal.fire(`
              Saved successfully
            `.trim())
          })
    }
      

    useEffect(() => {
        // console.log(Auth)
        getData(Auth["user"].id);
        Toast.fire({
            icon: 'info',
            title: `Signed in successfully ${Auth["user"].name}`
          })
    }, [Auth]);


    let datos = Data.data

    return (
        <div className={style.container}>
            <Header/>
            <div onClick={agregar}>
                <Boton_add  />
            </div>
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
