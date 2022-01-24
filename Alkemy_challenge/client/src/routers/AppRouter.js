import React, {useContext, useEffect} from 'react'
import { BrowserRouter, Routes, Route , Navigate} from "react-router-dom"
import { AuthContext } from '../Contexts/AuthContext'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'

 
export const AppRouter = () => {


  const {Auth, verificarToken} = useContext(AuthContext);

  // console.log('AppRouter Auth>> ',Auth)


  useEffect(() => {
    verificarToken(); 
  } , [verificarToken]);


  // if(Auth.user){
  //   return <h1>Carganding...</h1>
  // }



  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/auth/*"
          element={<PublicRoute isAuthenticated={Auth.user ? true : false} />}
        />
        <Route
          path="/"
          element={<PrivateRoute  isAuthenticated={Auth.user ? true : false}/>}
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  )
}