import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, Alert } from 'react-native';
import firebase from '../../../../services/firebase';

export default function ModeloListaReservaPessoal({ data }) {

    const handleDelete = async () => {
        await firebase.database().ref('reservasGeraisTransporte').child(data.id).remove()
    }

    const handleAlert = () => {
        Alert.alert(
            'Cancelar Reserva',
            `Você deseja cancelar essa reserva?`,
            [
                {
                    text: 'Não',
                    style: 'cancel'
                },
                {
                    text: 'Sim',
                    onPress: () => handleDelete()
                }
            ]
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.imagemView}>
                <Image
                    source={require('../../../../assets/carroimg.png')}
                    style={styles.imagem}
                />
            </View>
            <View style={styles.textosView}>
                <Text style={{ color: '#FFF' }}>
                    <Text style={styles.textoNegrito}>
                        Data:{' '}
                    </Text>
                    {data.dataReserva}
                </Text>
            </View>
            <View style={styles.textosView}>
                <Text style={{ color: '#FFF' }}>
                    <Text style={styles.textoNegrito}>
                        Hora Saida:{' '}
                    </Text>
                    {data.saidaReserva}
                </Text>
            </View>
            <View style={styles.textosView}>
                <Text style={{ color: '#FFF' }}>
                    <Text style={styles.textoNegrito}>
                        Hora Chegada:{' '}
                    </Text>
                    {data.chegadaReserva}
                </Text>
            </View>
            <View style={styles.textosView}>
                <Text style={{ color: '#FFF' }}>
                    <Text style={styles.textoNegrito}>
                        Placa do Transporte:{' '}
                    </Text>
                    {data.placaTransporteReserva}
                </Text>
            </View>
            <View style={styles.textosView}>
                <Text style={{ color: '#FFF' }}>
                    <Text style={styles.textoNegrito}>
                        Usuario:{' '}
                    </Text>
                    {data.userReserva}
                </Text>
            </View>
            <TouchableOpacity onPress={() => handleAlert()}>
                <Text style={styles.cancelar}>CANCELAR</Text>
            </TouchableOpacity>
        </View>


    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#172220',
        alignItems: 'center',
        marginBottom: 10,
        padding: 10,
        borderRadius: 5,
        borderWidth: 5,
        marginHorizontal: 15,
        marginTop: 5,
        borderColor: '#9ECEC5'
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
    },
    cancelar: {
        backgroundColor: '#b20000',
        borderWidth: 1,
        borderColor: '#9ECEC5',
        borderRadius: 10,
        padding: 5,
        marginTop: 10,
        paddingLeft: 50,
        paddingRight: 50,
        fontSize: 18
    }

});
