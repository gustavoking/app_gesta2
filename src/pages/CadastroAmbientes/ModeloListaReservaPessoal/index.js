import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, Alert } from 'react-native';
import firebase from '../../../services/firebase';

export default function ModeloListaReservaPessoal({ data }) {

    console.log(data)
    const handleDelete = async () => {
        await firebase.database().ref('reservasGeraisAmbiente').child(data.id).remove()
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
                    source={require('../../../assets/salaimg.png')}
                    style={styles.imagem}
                />
            </View>
            <View style={styles.textosView}>
                <Text style={{ color: '#FFF' }}>
                    <Text style={styles.textoNegrito}>
                        Data:{' '}
                    </Text>
                    {data.data}
                </Text>
            </View>
            <View style={styles.textosView}>
                <Text style={{ color: '#FFF' }}>
                    <Text style={styles.textoNegrito}>
                        Inicio:{' '}
                    </Text>
                    {data.inicio}
                </Text>
            </View>
            <View style={styles.textosView}>
                <Text style={{ color: '#FFF' }}>
                    <Text style={styles.textoNegrito}>
                        Termino:{' '}
                    </Text>
                    {data.termino}
                </Text>
            </View>
            <View style={styles.textosView}>
                <Text style={{ color: '#FFF' }}>
                    <Text style={styles.textoNegrito}>
                        Sala:{' '}
                    </Text>
                    {data.salaReservada}
                </Text>
            </View>
            <View style={styles.textosView}>
                <Text style={{ color: '#FFF' }}>
                    <Text style={styles.textoNegrito}>
                        Bloco:{' '}
                    </Text>
                    {data.blocoReservado}
                </Text>
            </View>
            <View style={styles.textosView}>
                <Text style={{ color: '#FFF' }}>
                    <Text style={styles.textoNegrito}>
                        Usuario:{' '}
                    </Text>
                    {data.nomeUsuarioReserva}
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
