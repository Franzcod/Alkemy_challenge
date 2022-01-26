import React, {createContext, useState} from 'react';
import {fetchConToken } from '../helpers/fetch';

export const DataContext = createContext();


const initialState = []


export const DataProvider = ({children}) => {

    const [Data, setData] = useState(initialState);


    const getData = async (userId) => {
        const resp = await fetchConToken('operations', {}, 'GET')
        

        if(resp) {
            
            const newData = resp.filter(data => data.userId === userId)
            
            setData({
                data : newData
            });
            return Data
        }
        return [];
    }

    const deleteForId = async (userId, postId) => {
        try {
            const resp = await fetchConToken('operations', {postId}, 'DELETE')
            // console.log('<<resp=>> ',resp)

            if(resp) {
            
                const newData = resp.filter(data => data.userId === userId)
                
                setData({
                    data : newData
                });
                return Data
            }
            return [];
        } catch (error) {
            console.log(error.message)
        }
    }
    

    return (
        <DataContext.Provider value={{
            Data,
            getData,
            deleteForId
        }}>
            {children}
        </DataContext.Provider>
    );
}

