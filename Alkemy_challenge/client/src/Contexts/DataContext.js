import React, {createContext, useState, useCallback} from 'react';
import {fetchConToken,  fetchSinToken } from '../helpers/fetch';

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
    

    return (
        <DataContext.Provider value={{
            Data,
            getData
        }}>
            {children}
        </DataContext.Provider>
    );
}

