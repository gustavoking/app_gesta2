import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
// import { useNavigation } from '@react-navigation/native'

export default function ModeloListaReserva({data}) {
  // const navigation = useNavigation();
  console.log(data);
  console.log(data.reservaEstado);

  return (
    <View style={styles.container}>
      <View style={styles.textosView}>
        <Text style={{color: '#FFF'}}>
          <Text style={styles.textoNegrito}>Data: </Text>
          {data.data}
        </Text>
      </View>
      <View style={styles.textosView}>
        <Text style={{color: '#FFF'}}>
          <Text style={styles.textoNegrito}>Inicio: </Text>
          {data.inicio}
        </Text>
      </View>
      <View style={styles.textosView}>
        <Text style={{color: '#FFF'}}>
          <Text style={styles.textoNegrito}>Termino: </Text>
          {data.termino}
        </Text>
      </View>
      <View style={styles.textosView}>
        <Text style={{color: '#FFF'}}>
          <Text style={styles.textoNegrito}>Sala: </Text>
          {data.salaReservada}
        </Text>
      </View>
      <View style={styles.textosView}>
        <Text style={{color: '#FFF'}}>
          <Text style={styles.textoNegrito}>Bloco: </Text>
          {data.blocoReservado}
        </Text>
      </View>
      <View style={styles.textosView}>
        <Text style={{color: '#FFF'}}>
          <Text style={styles.textoNegrito}>Usuario: </Text>
          {data.nomeUsuarioReserva}
        </Text>
      </View>
      <View style={styles.textosView}>
        <Text style={{color: '#FFF'}}>
          <Text style={styles.textoNegrito}>Situação: </Text>
          {data.reservaEstado === 'reservado' ? (
            <Text>Reservado</Text>
          ) : (
            <Text>Sendo utilizada no momento</Text>
          )}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3F5C57',
    alignItems: 'center',
    marginBottom: 10,
    padding: 10,
    marginHorizontal: 53,
    marginTop: 5,
    borderTopColor: '#9ECEC5',
    borderWidth: 1,
    borderRightColor: '#3F5C57',
    borderLeftColor: '#3F5C57',
    borderBottomColor: '#3F5C57',
    borderRadius: 1,
  },
  textosView: {
    flex: 1,
    marginLeft: 10,
  },
  textoNegrito: {
    color: 'white',
    fontWeight: 'normal',
  },
  container2: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
    borderWidth: 5,
    marginHorizontal: 15,
    marginTop: 5,
    borderColor: '#9ECEC5',
  },
});
