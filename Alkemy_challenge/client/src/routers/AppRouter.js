import React, {useContext, useEffect} from 'react'
import { BrowserRouter, Routes, Route , Navigate} from "react-router-dom"
import { AuthContext } from '../Contexts/AuthContext'
import Refreshpage from '../pages/RefreshPage'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'
import RefreshPage from '../pages/RefreshPage'

 
export const AppRouter = () => {


  const {Auth, verificarToken} = useContext(AuthContext);

  console.log('AppRouter Auth>> ',Auth)


  useEffect(() => {
    verificarToken(); 
  } , [verificarToken]);


  if(Auth.checking){
    return <RefreshPage/>
  }



  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/auth/*"
          element={<PublicRoute isAuthenticated={Auth.loggedIn } />}
        />
        <Route
          path="/"
          element={<PrivateRoute  isAuthenticated={Auth.loggedIn}/>}
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  )
}