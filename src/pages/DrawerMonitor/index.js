import React from 'react';

import CustomDrawer from '../../components/CustomDrawer';
import QrCode from '../../components/QrCode';

import { createDrawerNavigator } from '@react-navigation/drawer'
import { createStackNavigator } from '@react-navigation/stack'

import Home from '../Home/index';
import Profile from '../Profile/index';
import Sobre from '../Sobre/index';
import SobreAplicativo from '../Sobre/SobreAplicativo/index';
import SobreArthur from '../Sobre/SobreArthur/index';
import SobreCaio from '../Sobre/SobreCaio';
import SobreGustavo from '../Sobre/SobreGustavo';

import CadastroAmbientes from '../CadastroAmbientes/index';
import ListaAmbiente from '../CadastroAmbientes/ListaAmbiente';
import AreaReservasAmbientes from '../CadastroAmbientes/AreaReservasAmbientes';
import ReservarA from '../CadastroAmbientes/AreaReservasAmbientes/ReservarA';
import CancelarA from '../CadastroAmbientes/AreaReservasAmbientes/CancelarA';
import ConfirmarA from '../CadastroAmbientes/AreaReservasAmbientes/ConfirmarA';
import DevolverA from '../CadastroAmbientes/AreaReservasAmbientes/DevolverA';
import ReservaAmbiente from '../CadastroAmbientes/AreaReservasAmbientes/ReservaAmbiente';
import QrCodeCancelarA from '../CadastroAmbientes/AreaReservasAmbientes/QrCodeCancelarA'
import QrCodeConfirmarA from '../CadastroAmbientes/AreaReservasAmbientes/QrCodeConfirmarA'

const Stack = createStackNavigator();

function AmbienteRoutes() {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="CadastroAmbientes" component={CadastroAmbientes} />
            <Stack.Screen name="ListaAmbiente" component={ListaAmbiente} />
            <Stack.Screen name="AreaReservasAmbientes" component={AreaReservasAmbientes} />
            <Stack.Screen name="ReservarA" component={ReservarA} />
            <Stack.Screen name="CancelarA" component={CancelarA} />
            <Stack.Screen name="ConfirmarA" component={ConfirmarA} />
            <Stack.Screen name="DevolverA" component={DevolverA} />
            <Stack.Screen name="ReservaAmbiente" component={ReservaAmbiente} />
            <Stack.Screen name="QrCode" component={QrCode} />
            <Stack.Screen name="QrCodeCancelarA" component={QrCodeCancelarA} />
            <Stack.Screen name="QrCodeConfirmarA" component={QrCodeConfirmarA} />

        </Stack.Navigator>
    )
}

function SobreRoutes() {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="Sobre" component={Sobre} />
            <Stack.Screen name="SobreAplicativo" component={SobreAplicativo} />
            <Stack.Screen name="SobreArthur" component={SobreArthur} />
            <Stack.Screen name="SobreCaio" component={SobreCaio} />
            <Stack.Screen name="SobreGustavo" component={SobreGustavo} />
        </Stack.Navigator>
    )
}

export default function DrawerMonitor() {

    const AppDrawer = createDrawerNavigator();

    return (
        <AppDrawer.Navigator
            drawerContent={props => <CustomDrawer {...props} />}
            drawerStyle={{
                backgroundColor: '#3F5C57',
                marginTop: 50,
                width: 250,

            }}
            drawerContentOptions={{
                labelStyle: {
                    fontSize: 16,
                    marginLeft: 15

                },
                activeTintColor: '#FFF',
                activeBackgroundColor: '#FECEA5',
                inactiveTintColor: '#DDD',
            }}
        >
            <AppDrawer.Screen
                name="Home"
                component={Home}
            />
            <AppDrawer.Screen
                name="Perfil"
                component={Profile}
            />
            <AppDrawer.Screen
                name="Sobre"
                component={SobreRoutes}
            />
            <AppDrawer.Screen
                name="Área de Ambientes"
                component={AmbienteRoutes}
            />
        </AppDrawer.Navigator>

    );

}