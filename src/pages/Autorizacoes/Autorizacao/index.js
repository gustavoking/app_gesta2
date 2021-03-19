import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import firebase from '../../../services/firebase';

export default function Autorizacao({ data }) {

    async function handleAccept() {
        let reservas = await firebase.database().ref('reservasGeraisTransporte');
        let id = reservas.push().key;

        reservas.child(id).set({
            id: id,
            idTransporte: data.idTransporteReservado,
            userId: data.idUsuarioReserva,
            dataReserva: data.data,
            saidaReserva: data.saida,
            chegadaReserva: data.chegada,
            placaTransporteReserva: data.placaTransporte,
            userReserva: data.nomeUsuarioReserva
        })

        let historico = await firebase.database().ref('historicoReservasTransporte');
        let idHistorico = reservas.push().key;

        historico.child(id).set({
            id: idHistorico,
            idTransporte: data.idTransporteReservado,
            userId: data.idUsuarioReserva,
            dataReserva: data.data,
            saidaReserva: data.saida,
            chegadaReserva: data.chegada,
            placaTransporteReserva: data.placaTransporte,
            userReserva: data.nomeUsuarioReserva
        })

        await firebase.database().ref('listaAutorizacoesAdm').child(data.id).remove();
    }

    async function handleDelete() {
        await firebase.database().ref('listaAutorizacoesAdm').child(data.id).remove();
    }

    return (
        <View style={styles.container}>
            <View style={styles.imagemView}>
                <Image
                    source={require('../../../assets/carroimg.png')}
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
                        Hora Saida:{' '}
                    </Text>
                    {data.saida}
                </Text>
            </View>
            <View style={styles.textosView}>
                <Text style={{ color: '#FFF' }}>
                    <Text style={styles.textoNegrito}>
                        Hora Chegada:{' '}
                    </Text>
                    {data.chegada}
                </Text>
            </View>
            <View style={styles.textosView}>
                <Text style={{ color: '#FFF' }}>
                    <Text style={styles.textoNegrito}>
                        Placa do Transporte:{' '}
                    </Text>
                    {data.placaTransporte}
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
            <View style={styles.botoes}>
                <TouchableOpacity
                    onPress={() => handleAccept()}
                    style={styles.btnaceitar}

                >
                    <Text style={{ fontSize: 18 }}>AUTORIZAR</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => handleDelete()}
                    style={styles.btnrecusar}>
                    <Text style={{ fontSize: 18 }}>RECUSAR</Text>
                </TouchableOpacity>
            </View>
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
    },
    botoes: {
        flexDirection: 'row',
        marginTop: 10
    },
    btnaceitar: {
        backgroundColor: '#00b200',
        borderWidth: 1,
        borderColor: '#9ECEC5',
        borderRadius: 10,
        marginRight: 100,
        padding: 4
    },
    btnrecusar: {
        backgroundColor: '#b20000',
        borderWidth: 1,
        borderColor: '#9ECEC5',
        borderRadius: 10,
        padding: 4
    }
});
