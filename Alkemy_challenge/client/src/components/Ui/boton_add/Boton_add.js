import React,{useContext} from 'react';
import style from './boton_add.module.css';

export default function Boton_add( {data} ) {

    // console.log(data.user.id)


    // const agregar = () => {
    //     Swal.fire({
    //         title: 'Add',
    //         html: `<input type="text" id="concept" class="swal2-input" placeholder="Concept">
    //                 <input type="text" id="amount" class="swal2-input" placeholder="Amount">
    //                 <input type="text" id="type" class="swal2-input" placeholder="Type">
    //                 <input type="text" id="category" class="swal2-input" placeholder="Category">`,
    //         confirmButtonText: 'Save',
    //         focusConfirm: false,
    //         preConfirm: () => {
    //           const concept = Swal.getPopup().querySelector('#concept').value
    //           const amount = Swal.getPopup().querySelector('#amount').value
    //           const type = Swal.getPopup().querySelector('#type').value
    //           const category = Swal.getPopup().querySelector('#category').value
    //           if (!concept || !amount || !type || !category) {
    //             Swal.showValidationMessage(`Please complete all the fields`)
    //           }
    //           return { concept, amount, type, category , userId: data.user.id}
    //         }
    //       }).then((res) => {
    //             console.log(res.value)
    //             fetchConToken('operations', res.value, 'POST')
    //       })
    //       .then((result) => {
    //         Swal.fire(`
    //           Saved successfully
    //         `.trim())
    //       })
    // }
    


  return <div className={style.container}>
  
        <div className={style.contBtn}>
            <button 
                className={style.boton_add} 
                
            >
                <h2>Agregar</h2>
            </button>
        </div>
  
    </div>;
}
