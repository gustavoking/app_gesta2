import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import firebase from '../../../services/firebase';

export default function ModeloListaReservaPessoal({data}) {
  console.log(data);
  const handleDelete = async () => {
    await firebase
      .database()
      .ref('reservasGeraisAmbiente')
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
        <Text style={styles.textoNegrito}>Data Início: {data.data}</Text>
      </View>
      <View style={styles.textosView}>
        <Text style={styles.textoNegrito}>Hora Início: {data.inicio}</Text>
      </View>
      <View style={styles.textosView}>
        <Text style={styles.textoNegrito}>
          Data Término: {data.dataChegada}
        </Text>
      </View>
      <View style={styles.textosView}>
        <Text style={styles.textoNegrito}>Hora Término: {data.termino}</Text>
      </View>
      <View style={styles.textosView}>
        <Text style={styles.textoNegrito}>Sala: {data.salaReservada}</Text>
      </View>
      <View style={styles.textosView}>
        <Text style={styles.textoNegrito}>Bloco: {data.blocoReservado}</Text>
      </View>
      <View style={styles.textosView}>
        <Text style={styles.textoNegrito}>
          Usuario: {data.nomeUsuarioReserva}
        </Text>
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
    padding: 10,
    borderRadius: 1,
    borderWidth: 1,
    marginHorizontal: 58,
    marginTop: '1%',
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
    marginTop: '2%',
    fontSize: 20,
    color: '#3F5C57',
    textAlign: 'center',
  },
});
