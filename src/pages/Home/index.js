import React, { useContext, useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Header from '../../components/Header';
import { AuthContext } from '../../contexts/auth';
import ListaDashBoard from '../CadastroTransportes/ListaDashboard';
import firebase from '../../services/firebase';
import { format, } from 'date-fns';
import ListaDashBoardAmbiente from '../CadastroAmbientes/ListaDashboardAmbiente';

export default function Home() {

    const { user } = useContext(AuthContext);

    const dataAgora = format(new Date(), 'dd/MM/yyyy');

    const [listaUserReserva, setListaUserReserva] = useState([]);
    const [listaUserReservaAmbiente, setListaUserReservaAmbiente] = useState([]);

    useEffect(() => {

        async function listaPessoalAmbiente() {
            await firebase.database().ref('reservasGeraisAmbiente').on('value', (snapshot) => {
                setListaUserReservaAmbiente([])

                snapshot.forEach((maquina) => {
                    if (maquina.val().idUsuarioReserva === user.uid && dataAgora === maquina.val().data) {
                        let data = {
                            data: maquina.val().data,
                            inicio: maquina.val().inicio,
                            termino: maquina.val().termino,
                            salaReservada: maquina.val().salaReservada,
                            blocoReservado: maquina.val().blocoReservado,

                        }
                        setListaUserReservaAmbiente(oldArray => [...oldArray, data])
                    }
                })
            })
        }

        async function listaPessoalTransporte() {
            await firebase.database().ref('reservasGeraisTransporte').on('value', (snapshot) => {
                setListaUserReserva([])

                snapshot.forEach((maquina) => {
                    if (maquina.val().userId === user.uid && dataAgora === maquina.val().dataReserva) {
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
        listaPessoalTransporte();
        listaPessoalAmbiente();

    }, [])


    return (

        <View style={styles.container}>
            <ScrollView>
                <Header titulo='Bem-Vindo' />

                <View>
                    <Text style={{ textAlign: 'center', color: '#3F5C57', fontSize: 40, marginTop: 10 }}>GESTA</Text>
                    {user.tipo === 'administrador' || user.tipo === 'servidor' ? (
                        <View>
                            <Text style={styles.reservaisgerais}>Reservas Pessoais de Transporte</Text>
                            {
                                listaUserReserva.map((data) => (<ListaDashBoard data={data} />))
                            }
                            <Text style={styles.reservaisgerais}>Reservas Pessoais de Ambiente</Text>
                            {
                                listaUserReservaAmbiente.map((item) => (<ListaDashBoardAmbiente data={item} />))
                            }
                        </View>
                    ) : (
                            <View>
                                <Text style={styles.reservaisgerais}>Reservas Pessoais de Ambiente</Text>
                                {
                                    listaUserReservaAmbiente.map((item) => (<ListaDashBoardAmbiente data={item} />))
                                }
                            </View>
                        )}

                </View>


            </ScrollView>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    reservaisgerais: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#172220',
        backgroundColor: '#9ECEC5',
        marginLeft: 20,
        marginTop: 10,
        marginRight: 20,
        textAlign: 'center',
        borderWidth: 1,
        borderRadius: 20
    }
});