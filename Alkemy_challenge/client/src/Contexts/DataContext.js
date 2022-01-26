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

    const filterData = async (userId,filter) => {
      

        if(filter === 'all') {
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
        else {
            const resp = await fetchConToken('operations', {}, 'GET')
        

            if(resp) {
                const newData = resp.filter(data => data.userId === userId)
                const newData2 = newData.filter(data => data.type === filter)
                
                setData({
                    data : newData2
                });
                return Data
            }
            return [];
        }
    }
    

    return (
        <DataContext.Provider value={{
            Data,
            getData,
            deleteForId,
            filterData
        }}>
            {children}
        </DataContext.Provider>
    );
}

