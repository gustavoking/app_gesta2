import React, { useContext, useState, TouchableOpacity, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Header from '../../../../components/Header';
import { AuthContext } from '../../../../contexts/auth';
import firebase from '../../../../services/firebase';
import ModeloListaReservaPessoal from '../../ModeloListaReservaPessoal';

export default function Cancelar() {

    const [listaUserReserva, setListaUserReserva] = useState([])

    const { user } = useContext(AuthContext);

    useEffect(() => {
        async function userReserva() {
            await firebase.database().ref('reservasGeraisAmbiente').on('value', (snapshot) => {
                setListaUserReserva([])

                snapshot.forEach((maquina) => {
                    if (maquina.val().idUsuarioReserva === user.uid) {
                        let data = {
                            data: maquina.val().data,
                            inicio: maquina.val().inicio,
                            termino: maquina.val().termino,
                            salaReservada: maquina.val().salaReservada,
                            nomeUsuarioReserva: maquina.val().nomeUsuarioReserva,
                            blocoReservado: maquina.val().blocoReservado,
                            id: maquina.val().id
                        }
                        setListaUserReserva(oldArray => [...oldArray, data])
                    }
                })
            })
        }
        userReserva();

    }, [])


    return (
        <View style={styles.container}>
            <ScrollView>
                <Header titulo='Cancelar' />
                <View>
                    <Text style={styles.reservaisgerais}>RESERVAS PESSOAIS DE AMBIENTE</Text>

                    {
                        listaUserReserva.map((data) => (<ModeloListaReservaPessoal data={data} />))
                    }

                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#172220',
        flex: 1
    },
    reservaisgerais: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#172220',
        backgroundColor: '#FECEA5',
        marginLeft: 10,
        marginTop: 10,
        marginRight: 20,
        textAlign: 'center',
        borderWidth: 1,
        borderRadius: 20
    }
})