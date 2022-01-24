import React, {createContext, useState, useCallback} from 'react';
import {fetchConToken,  fetchSinToken } from '../helpers/fetch';

export const AuthContext = createContext();


const initialState = {
    user : null
}


export const AuthProvider = ({children}) => {

    const [Auth, setAuth] = useState(initialState);

    const login = async (email, password) => {
        const resp = await fetchSinToken('user/login', {email, password}, 'POST')

        // console.log('login -',resp)

        if(resp["User Data"]) {
            localStorage.setItem('token', resp["Token"]);

            // const usuario = resp["User Data"];
            
            setAuth({
                user : resp["User Data"],
            });
            // console.log('Autenticado! > ', Auth)
            return true
        }
        return resp["User Data"];
    }

    const register = async (name, email, password) => {
        const resp = await fetchSinToken('user/register', {name, email, password}, 'POST')
        // console.log(resp["User Data"])
        if(resp["User Data"]) {
            localStorage.setItem('token', resp["Token"]);

            const usuario = resp["User Data"];
            
            setAuth({
                user : usuario,
            });;
            console.log('Autenticado! > ', Auth)
            return true
        }
        return resp.msg;
        
    }

    const verificarToken = useCallback( async () => {
        const token = localStorage.getItem('token');
        // Si el token no existe
        if(!token) {
            return setAuth({
                user :null
            });
        }

        const resp = await fetchConToken('user/renew');

        if(resp["User Data"]) {
            localStorage.setItem('token', resp.token);

           
            
            setAuth({
                user : resp[
                    "User Data"
                ]
            });
            console.log('Autenticado!')
            return true
        } else {
             setAuth({
                user : null
            });
            return false;
        }

    }, [])



    const logout = () => {
        localStorage.removeItem('token');
        setAuth({
            user : null
        });
    }

    return (
        <AuthContext.Provider value={{
            Auth,
            login,
            register,
            logout,
            verificarToken,
        }}>
            {children}
        </AuthContext.Provider>
    );
}
