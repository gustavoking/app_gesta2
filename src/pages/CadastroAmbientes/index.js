import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Header from '../../components/Header';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../contexts/auth';

export default function CadastroAmbientes() {

    const { user } = useContext(AuthContext);

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Header titulo='Área de Ambientes' />

            <TouchableOpacity onPress={() => navigation.navigate('AreaReservasAmbientes')}>
                <Text style={styles.textbutton}>   Área de Reservas</Text>
            </TouchableOpacity>


            <TouchableOpacity onPress={() => navigation.navigate('ListaAmbiente')}>
                <Text style={styles.textbutton}>Lista de Ambientes</Text>
            </TouchableOpacity>

            {user.tipo === 'administrador' && (
                <TouchableOpacity onPress={() => navigation.navigate('AddAmbiente')}>
                    <Text style={styles.textbutton}>Adicionar Ambiente</Text>
                </TouchableOpacity>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3F5C57'
    },
    textbutton: {
        marginVertical: 15,
        fontSize: 23,
        marginTop: 45,
        marginLeft: '22%',
        color: '#9ECEC5',

    }
})
