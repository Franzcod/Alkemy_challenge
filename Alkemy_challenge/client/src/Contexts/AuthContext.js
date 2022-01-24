import React, {createContext, useState, useCallback} from 'react';
import {fetchConToken,  fetchSinToken } from '../helpers/fetch';

export const AuthContext = createContext();


const initialState = {
    user : null,
    checking: true,
    loggedIn: false,
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
                checking: false,
                loggedIn: true,
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
                checking: false,
                loggedIn: true,
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
                user :null,
                checking: false,
                loggedIn: false,
            });
        }

        const resp = await fetchConToken('user/renew');



        if(resp["User Data"]) {
            // console.log('token renovado > ',resp["Token"])
            localStorage.setItem('token', resp["Token"]);

           
            
            setAuth({
                user : resp[
                    "User Data"
                ],
                checking: false,
                loggedIn: true,
            });
            console.log('Autenticado!')
            return true
        } else {
             setAuth({
                user : null,
                checking: false,
                loggedIn: false,
            });
            return false;
        }

    }, [])



    const logout = () => {
        localStorage.removeItem('token');
        setAuth({
            user : null,
            checking: false,
            loggedIn: false,
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
