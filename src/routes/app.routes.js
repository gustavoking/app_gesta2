import React, { useContext } from 'react';
//import { createDrawerNavigator } from '@react-navigation/drawer'
//import CustomDrawer from '../components/CustomDrawer/index';
import { AuthContext } from '../contexts/auth';

import DrawerMonitor from '../pages/DrawerMonitor';
import DrawerServidor from '../pages/DrawerServidor';
import DrawerAdm from '../pages/DrawerAdm';


function AppRoutes() {

    const { user } = useContext(AuthContext);

    if (user.tipo === 'servidor') {
        return (
            <DrawerServidor />
        )
    }
    if (user.tipo === 'monitor') {
        return (
            <DrawerMonitor />
        )
    }
    if (user.tipo === 'administrador') {
        return (
            <DrawerAdm />
        )
    }

}


export default AppRoutes;