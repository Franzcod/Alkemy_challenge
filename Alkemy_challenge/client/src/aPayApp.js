import React from 'react';
import {AppRouter} from './routers/AppRouter';
import {AuthProvider} from './Contexts/AuthContext';
import {DataProvider} from './Contexts/DataContext';

const ApayApp = () => {
    return (
        <AuthProvider>
            
            <DataProvider>
                <AppRouter />
            </DataProvider>
        </AuthProvider>
    );
}

export default ApayApp;
