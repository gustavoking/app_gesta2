import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Header from '../../../components/Header';

export default function SobreAplicativo() {
    return (

        <View style={styles.container}>
            <Header titulo='Sobre' />
            <View style={styles.container2}>

                <Image style={styles.img}
                    source={require('../../../assets/icon_gesta.png')}
                />

                <Text style={styles.text}>O aplicativo</Text>
                <View style={{marginLeft: '10%', marginRight: '10%'}}>
                    <Text style={styles.text2}>Gestão de Transportes e Ambientes (GESTA)
                    como solução mobile para o gerenciamento dos veículos e espaços pedagógicos
                    do Instituto Federal de Santa Catarina (IFSC), câmpus Xanxerê.
                </Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#172220',
    },
    img: {
        height: '20%',
        width: '30%',
        marginTop: '5%',
        borderRadius: 120
    },
    container2: {
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#FFF',
        flex: 1
    },
    text: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 25,
        marginTop: '5%',
        textAlign: 'center'
    },
    text2: {
        marginTop: '10%',
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 23,
        textAlign: 'center'
    },
})
