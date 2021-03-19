import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

export default function Motorista({ data }) {
    return (
        <View style={styles.container}>
            <View style={styles.imagemView}>
                <Image
                    source={require('../../../assets/motoristaimg.png')}
                    style={styles.imagem}
                />
            </View>
            <View style={styles.textosView}>
                <Text style={{ color: '#FFF' }}>
                    <Text style={styles.textoNegrito}>
                        Nome:{' '}
                    </Text>
                    {data.nome}
                </Text>
                <Text style={{ color: '#FFF' }}>
                    <Text style={styles.textoNegrito}>
                        Numero:{' '}
                    </Text>
                    {data.numero}
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#172220',
        alignItems: 'center',
        marginBottom: 10,
        padding: 10,
        borderRadius: 5,
        borderWidth: 2,
        marginHorizontal: 15,
        marginTop: 5
    },
    textosView: {
        flex: 1,
        marginLeft: 10,
    },
    textoNegrito: {
        color: '#9ECEC5',
        fontWeight: 'bold',
    },
    imagem: {
        backgroundColor: 'white',
        width: 70,
        height: 70,
        resizeMode: "stretch"
    }
});
