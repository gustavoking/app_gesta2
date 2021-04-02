import React, {useContext, useState, TouchableOpacity, useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Header from '../../../../components/Header';
import {AuthContext} from '../../../../contexts/auth';
import firebase from '../../../../services/firebase';
import ListaTransporte from '../ListaTransporte';

export default function Confirmar() {
  const [listaUserReserva, setListaUserReserva] = useState([]);

  const {user} = useContext(AuthContext);

  useEffect(() => {
    async function userReserva() {
      await firebase
        .database()
        .ref('reservasGeraisTransporte')
        .on('value', (snapshot) => {
          setListaUserReserva([]);

          snapshot.forEach((maquina) => {
            if (
              maquina.val().userId === user.uid &&
              maquina.val().reservaEstado === 'autorizado'
            ) {
              let data = {
                dataReserva: maquina.val().dataReserva,
                saidaReserva: maquina.val().saidaReserva,
                chegadaReserva: maquina.val().chegadaReserva,
                placaTransporteReserva: maquina.val().placaTransporteReserva,
                userReserva: maquina.val().userReserva,
                id: maquina.val().id,
                userId: maquina.val().userId,
                reservaEstado: maquina.val().reservaEstado,
              };
              setListaUserReserva((oldArray) => [...oldArray, data]);
            }
          });
        });
    }
    userReserva();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        <Header titulo="Confirmar" />
        <View>
          <Text style={styles.reservaisgerais}>
            CONFIRMAR USO DO TRANSPORTE
          </Text>

          {listaUserReserva.map((data) => (
            <ListaTransporte touch data={data} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#172220',
    flex: 1,
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
    borderRadius: 20,
  },
});
