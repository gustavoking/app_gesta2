import React, { useContext, useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../../components/Header';
import { AuthContext } from '../../contexts/auth'

export default function Home() {

    const { user } = useContext(AuthContext);

    const [listaUserReserva, setListaUserReserva] = useState([]);
    const [ListaTransportesFiltradas, setListaTransportesFiltradas] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        async function userReserva() {
            await firebase.database().ref('reservasGeraisTransporte').on('value', (snapshot) => {
                setListaUserReserva([])

                snapshot.forEach((maquina) => {
                    if (maquina.val().userId === user.uid) {
                        let data = {
                            dataReserva: maquina.val().dataReserva,
                            saidaReserva: maquina.val().saidaReserva,
                            chegadaReserva: maquina.val().chegadaReserva,
                            placaTransporteReserva: maquina.val().placaTransporteReserva,
                            userReserva: maquina.val().userReserva,
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
            <Header titulo='Bem-Vindo' />
            <Text style={{ textAlign: 'center', color: '#3F5C57', fontSize: 40, marginTop: 10 }}>GESTA</Text>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});