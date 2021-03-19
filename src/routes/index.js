import React, { useContext } from 'react';
import { View, ActivityIndicator } from 'react-native';
import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';
import { AuthContext } from '../contexts/auth';

function Routes() {

    const { signed, loading } = useContext(AuthContext);

    if (loading) {
        return (
            <View style={{ backgroundColor: "#3F5C57", flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color='#FECEA5' />
            </View>
        )
    }

    return (
        signed ? <AppRoutes /> : <AuthRoutes />
    )
}

export default Routes;