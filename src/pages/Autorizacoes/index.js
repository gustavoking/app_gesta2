import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Header from '../../components/Header';
import { useNavigation } from '@react-navigation/native';

export default function Autorizacoes() {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Header titulo='Autorizações' />
            <TouchableOpacity onPress={() => navigation.navigate('ListaAutorizacoes')}>
                <Text style={styles.textbutton}>
                    Autorizações de Transportes
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text style={styles.textbutton}>
                    Voltar
                </Text>
            </TouchableOpacity>

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
        marginTop: 50,
        color: '#9ECEC5',
        textAlign: 'center'
    }
})