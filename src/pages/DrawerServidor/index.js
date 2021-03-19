import React from 'react';
import CustomDrawer from '../../components/CustomDrawer';

import { createDrawerNavigator, DrawerItem } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack'

import Home from '../Home/index';
import Profile from '../Profile/index';
import Sobre from '../Sobre/index';
import SobreAplicativo from '../Sobre/SobreAplicativo/index';
import SobreArthur from '../Sobre/SobreArthur/index';
import SobreCaio from '../Sobre/SobreCaio';
import SobreGustavo from '../Sobre/SobreGustavo';

import CadastroTransportes from '../CadastroTransportes/index';
import ListaTransporte from '../CadastroTransportes/ListaTransporte';
import ListaMotorista from '../CadastroTransportes/ListaMotorista';
import AreaReservasTransportes from '../CadastroTransportes/AreaReservasTransportes';
import Reservar from '../CadastroTransportes/AreaReservasTransportes/Reservar';
import Cancelar from '../CadastroTransportes/AreaReservasTransportes/Cancelar';
import Confirmar from '../CadastroTransportes/AreaReservasTransportes/Confirmar';
import ReservaTransporte from '../CadastroTransportes/AreaReservasTransportes/ReservaTransporte'


import CadastroAmbientes from '../CadastroAmbientes/index';
import ListaAmbiente from '../CadastroAmbientes/ListaAmbiente';

const Stack = createStackNavigator();

function AmbienteRoutes() {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="CadastroAmbientes" component={CadastroAmbientes} />
            <Stack.Screen name="ListaAmbiente" component={ListaAmbiente} />
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

function StackRoutes() {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="CadastroTrans" component={CadastroTransportes} />
            <Stack.Screen name="ListaTransporte" component={ListaTransporte} />
            <Stack.Screen name="ListaMotorista" component={ListaMotorista} />
            <Stack.Screen name="AreaReservasTransportes" component={AreaReservasTransportes} />
            <Stack.Screen name="Reservar" component={Reservar} />
            <Stack.Screen name="Cancelar" component={Cancelar} />
            <Stack.Screen name="Confirmar" component={Confirmar} />
            <Stack.Screen name="ReservaTransporte" component={ReservaTransporte} />
        </Stack.Navigator>
    )
}

export default function DrawerServidor() {

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
                name="Inicio"
                component={Home}
            />

            <AppDrawer.Screen
                name="Área de Ambientes"
                component={AmbienteRoutes}
            />
            <AppDrawer.Screen
                name="Área de Transportes"
                component={StackRoutes}
            />
            <AppDrawer.Screen
                name="Perfil"
                component={Profile}
            />
            <AppDrawer.Screen
                name="Sobre"
                component={SobreRoutes}
            />
        </AppDrawer.Navigator>
    );

}