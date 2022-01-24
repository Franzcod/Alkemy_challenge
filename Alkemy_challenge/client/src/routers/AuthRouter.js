import React from 'react'
import { Routes, Route } from "react-router-dom"
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'

import '../css/login-register.css';
import NotFoundPage404 from '../pages/NotFoundPage404';
 
export const AuthRouter = () => {
  return (

	<div className="limiter">
		<div className="container-login100">
      <div className="contTitulo">
        <h1 className='titulo'>aPay</h1>
        <p>¿Tienes tus cuentas claras? Prueba con aPay.</p>
      </div>
			<div className="wrap-login100 p-t-50 p-b-90">
                <Routes>
                    {/* en AppRouter tenemos /auth/* que va manejar las rutas anidadas */}
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="*" element={<NotFoundPage404/>} />
                </Routes>
            </div>
        </div>
    </div>

  )
}