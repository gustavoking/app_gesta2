import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import firebase from '../../../services/firebase';

export default function Autorizacao({data}) {
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
      userReserva: data.nomeUsuarioReserva,
      reservaEstado: 'autorizado',
      dataChegada: data.dataChegada,
    });

    let historico = await firebase
      .database()
      .ref('historicoReservasTransporte');
    let idHistorico = reservas.push().key;

    historico.child(id).set({
      id: idHistorico,
      idTransporte: data.idTransporteReservado,
      userId: data.idUsuarioReserva,
      dataReserva: data.data,
      saidaReserva: data.saida,
      chegadaReserva: data.chegada,
      placaTransporteReserva: data.placaTransporte,
      userReserva: data.nomeUsuarioReserva,
    });

    await firebase
      .database()
      .ref('listaAutorizacoesAdm')
      .child(data.id)
      .remove();
  }

  async function handleDelete() {
    await firebase
      .database()
      .ref('listaAutorizacoesAdm')
      .child(data.id)
      .remove();
  }

  return (
    <View style={styles.container}>
      <View style={styles.textosView}>
        <Text style={styles.textoNegrito}>Data Saída: {data.data}</Text>
      </View>
      <View style={styles.textosView}>
        <Text style={styles.textoNegrito}>Hora Saída: {data.saida}</Text>
      </View>
      <View style={styles.textosView}>
        <Text style={styles.textoNegrito}>
          Data Chegada: {data.dataChegada}
        </Text>
      </View>
      <View style={styles.textosView}>
        <Text style={styles.textoNegrito}>Hora Chegada: {data.chegada}</Text>
      </View>
      <View style={styles.textosView}>
        <Text style={styles.textoNegrito}>
          Placa do Transporte: {data.placaTransporte}
        </Text>
      </View>
      <View style={styles.textosView}>
        <Text style={styles.textoNegrito}>
          Usuario: {data.nomeUsuarioReserva}
        </Text>
      </View>
      <View style={styles.botoes}>
        <TouchableOpacity
          onPress={() => handleAccept()}
          style={styles.btnaceitar}>
          <Text style={{fontSize: 20, color: '#3F5C57'}}>Autorizar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => handleDelete()}
          style={styles.btnaceitar}>
          <Text style={{fontSize: 20, color: '#3F5C57'}}>Recusar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    borderRadius: 1,
    borderWidth: 1,
    marginHorizontal: 58,
    marginTop: 5,
    borderTopColor: '#9ECEC5',
    borderBottomColor: '#3F5C57',
    borderRightColor: '#3F5C57',
    borderLeftColor: '#3F5C57',
  },
  textosView: {
    flex: 1,
    marginLeft: 10,
    textAlign: 'center',
  },
  textoNegrito: {
    color: '#FFF',
    textAlign: 'center',
  },
  botoes: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-between',
  },
  btnaceitar: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 5,
    marginTop: 10,
    fontSize: 20,
    color: '#3F5C57',
    textAlign: 'center',
  },
});
