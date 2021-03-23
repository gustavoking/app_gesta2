import React from 'react';
import { View } from 'react-native';
import Header from '../Header';

export default function QrCode({ route }) {

    const { verify, sala, bloco,
        qtdPessoas, placa, ano, modelo } = route.params;

    return (
        <View>
            <Header titulo={verify} />
        </View>
    );
}