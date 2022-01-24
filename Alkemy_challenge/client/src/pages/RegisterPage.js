import React,{useState, useContext} from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthContext';

import Swal from 'sweetalert2';

const RegisterPage = () => {

	const {register} = useContext(AuthContext);

    const [form, setForm] = useState({
		name: '',
        email: '',
        password: '',
    });

	const onChange = ({target}) => {
        const {name, value} = target;
        setForm({
            ...form,
            [name]: value
        });
    }

	const onSubmit = async (e) => {
        e.preventDefault();
        

        const {name, email, password } = form;

        const msg = await register(name, email, password);

        if(msg !== true){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: msg,
            })
        }
    }

	const todoOk = () => {
        return (
			form.email.length > 0 && 
			form.password.length > 0 &&
			form.name.length > 0
		) 
		? true 
		: false;
    }



    return (
        <form 
			className="login100-form validate-form flex-sb flex-w"
			onSubmit={onSubmit}
		>
			<span className="login100-form-title mb-3">
				Registro
			</span>

			<div className="wrap-input100 validate-input mb-3">
				<input 
					className="input100" 
					type="text" 
					name="name" 
					placeholder="Nombre"
					value={form.name}
					onChange={onChange}
				/>
				<span className="focus-input100"></span>
			</div>

			
			<div className="wrap-input100 validate-input mb-3">
				<input 
					className="input100" 
					type="email" 
					name="email" 
					placeholder="Email" 
					value={form.email}
					onChange={onChange}
					autoComplete='off'
				/>
				<span className="focus-input100"></span>
			</div>
			
			
			<div className="wrap-input100 validate-input mb-3">
				<input 
					className="input100" 
					type="password" 
					name="password" 
					placeholder="Password" 
					value={form.password}
					onChange={onChange}
				/>
				<span className="focus-input100"></span>
			</div>
			
			<div className="row mb-3">
				<div className="col text-right">
					<NavLink to='/auth/login' className="txt1">
						
							Ya tienes cuenta?
						
					</NavLink>
				</div>
			</div>

			<div className="container-login100-form-btn m-t-17">
				<button 
					className="login100-form-btn"
					type="submit"
                    disabled={!todoOk()}    
				>
					Crear cuenta
				</button>
			</div>

		</form>
    );
}

export default RegisterPage;
