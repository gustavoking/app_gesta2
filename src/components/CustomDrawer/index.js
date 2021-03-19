import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { AuthContext } from '../../contexts/auth';

export default function CustomDrawer(props) {

    const { user, signOut } = useContext(AuthContext);

    return (
        <DrawerContentScrollView {...props} >
            <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 25 }}>
                <Text style={{ color: '#FFF', fontSize: 18, marginTop: 5 }}>
                    Bem Vindo
                </Text>
                <Text style={{ color: '#FFF', fontSize: 17, fontWeight: 'bold', paddingBottom: 25 }}>
                    {user && user.nome}
                </Text>
            </View>

            <DrawerItemList
                {...props}
            />
            <DrawerItem
                {...props}
                label="Sair"
                inactiveBackgroundColor="#3F5C57"
                onPress={() => signOut()}
            />
        </DrawerContentScrollView>
    );
}