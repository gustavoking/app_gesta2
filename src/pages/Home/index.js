import React, {useContext, useState, useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Header from '../../components/Header';
import {AuthContext} from '../../contexts/auth';
import ListaDashBoard from '../CadastroTransportes/ListaDashboard';
import firebase from '../../services/firebase';
import {format} from 'date-fns';
import ListaDashBoardAmbiente from '../CadastroAmbientes/ListaDashboardAmbiente';

export default function Home() {
  const {user} = useContext(AuthContext);

  const dataAgora = format(new Date(), 'dd/MM/yyyy');

  const [listaUserReserva, setListaUserReserva] = useState([]);
  const [listaUserReservaAmbiente, setListaUserReservaAmbiente] = useState([]);

  useEffect(() => {
    async function listaPessoalAmbiente() {
      await firebase
        .database()
        .ref('reservasGeraisAmbiente')
        .on('value', (snapshot) => {
          setListaUserReservaAmbiente([]);

          snapshot.forEach((maquina) => {
            if (
              maquina.val().idUsuarioReserva === user.uid &&
              dataAgora === maquina.val().data
            ) {
              let data = {
                data: maquina.val().data,
                inicio: maquina.val().inicio,
                termino: maquina.val().termino,
                salaReservada: maquina.val().salaReservada,
                blocoReservado: maquina.val().blocoReservado,
                dataChegada: maquina.val().dataChegada,
              };
              setListaUserReservaAmbiente((oldArray) => [...oldArray, data]);
            }
          });
        });
    }

    async function listaPessoalTransporte() {
      await firebase
        .database()
        .ref('reservasGeraisTransporte')
        .on('value', (snapshot) => {
          setListaUserReserva([]);

          snapshot.forEach((maquina) => {
            if (
              maquina.val().userId === user.uid &&
              dataAgora === maquina.val().dataReserva
            ) {
              let data = {
                dataReserva: maquina.val().dataReserva,
                saidaReserva: maquina.val().saidaReserva,
                chegadaReserva: maquina.val().chegadaReserva,
                placaTransporteReserva: maquina.val().placaTransporteReserva,
                userReserva: maquina.val().userReserva,
                id: maquina.val().id,
                dataChegada: maquina.val().dataChegada,
                marca: maquina.val().marca,
              };
              setListaUserReserva((oldArray) => [...oldArray, data]);
            }
          });
        });
    }
    listaPessoalTransporte();
    listaPessoalAmbiente();
  }, []);

  return (
    <View style={styles.container}>
      <Header titulo="Bem-vindo" />

      <ScrollView>
        <View>
          <Text
            style={{
              textAlign: 'center',
              color: '#3F5C57',
              fontSize: 20,
              marginTop: 10,
            }}>
            GESTA
          </Text>
          {user.tipo === 'administrador' || user.tipo === 'servidor' ? (
            <View>
              <Text style={styles.reservaisgerais}>
                Lista de Transportes Reservados
              </Text>
              {listaUserReserva.map((data) => (
                <ListaDashBoard data={data} />
              ))}
              <View style={styles.linhaAcima}></View>
              <Text style={styles.reservaisgerais2}>
                Lista de Ambientes Reservados
              </Text>
              {listaUserReservaAmbiente.map((item) => (
                <ListaDashBoardAmbiente data={item} />
              ))}
            </View>
          ) : (
            <View>
              <Text style={styles.reservaisgerais}>
                Lista de Ambientes Reservados
              </Text>
              {listaUserReservaAmbiente.map((item) => (
                <ListaDashBoardAmbiente data={item} />
              ))}
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
    backgroundColor: '#3F5C57',
  },
  linhaAcima: {
    borderRadius: 1,
    borderWidth: 1,
    marginHorizontal: 58,
    marginTop: '5%',
    borderTopColor: '#9ECEC5',
    borderBottomColor: '#3F5C57',
    borderRightColor: '#3F5C57',
    borderLeftColor: '#3F5C57',
  },
  reservaisgerais: {
    fontSize: 20,
    color: '#9ECEC5',
    marginHorizontal: 20,
    textAlign: 'center',
  },
  reservaisgerais2: {
    fontSize: 20,
    color: '#9ECEC5',
    marginHorizontal: 20,
    textAlign: 'center',
    marginTop: '5%',
  },
});
