import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import firebase from '../../../../services/firebase';

export default function ModeloListaReservaPessoal({data}) {
  const handleDelete = async () => {
    await firebase
      .database()
      .ref('reservasGeraisTransporte')
      .child(data.id)
      .remove();
  };

  const handleAlert = () => {
    Alert.alert('Cancelar Reserva', `Você deseja cancelar essa reserva?`, [
      {
        text: 'Não',
        style: 'cancel',
      },
      {
        text: 'Sim',
        onPress: () => handleDelete(),
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.textosView}>
        <Text style={styles.textoNegrito}>Data: {data.dataReserva}</Text>
      </View>
      <View style={styles.textosView}>
        <Text style={styles.textoNegrito}>Hora Saída: {data.saidaReserva}</Text>
      </View>
      <View style={styles.textosView}>
        <Text style={styles.textoNegrito}>
          Data Chegada: {data.dataChegada}
        </Text>
      </View>
      <View style={styles.textosView}>
        <Text style={styles.textoNegrito}>
          Hora Chegada: {data.chegadaReserva}
        </Text>
      </View>
      <View style={styles.textosView}>
        <Text style={styles.textoNegrito}>
          Placa do Transporte: {data.placaTransporteReserva}
        </Text>
      </View>
      <View style={styles.textosView}>
        <Text style={styles.textoNegrito}>Usuario: {data.userReserva}</Text>
      </View>
      <TouchableOpacity onPress={() => handleAlert()}>
        <Text style={styles.cancelar}>Cancelar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '3%',
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
  cancelar: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: '1%',
    marginTop: '5%',
    fontSize: 20,
    color: '#3F5C57',
    textAlign: 'center',
  },
});
