import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
// import { useNavigation } from '@react-navigation/native'

export default function ModeloListaReserva({data}) {
  // const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.textosView}>
        <Text style={{color: '#FFF'}}>
          <Text style={styles.textoNegrito}>Data Saída: </Text>
          {data.dataReserva}
        </Text>
      </View>
      <View style={styles.textosView}>
        <Text style={{color: '#FFF'}}>
          <Text style={styles.textoNegrito}>Hora Saída: </Text>
          {data.saidaReserva}
        </Text>
      </View>
      <View style={styles.textosView}>
        <Text style={{color: '#FFF'}}>
          <Text style={styles.textoNegrito}>Hora Chegada: </Text>
          {data.chegadaReserva}
        </Text>
      </View>
      <View style={styles.textosView}>
        <Text style={{color: '#FFF'}}>
          <Text style={styles.textoNegrito}>Data Chegada: </Text>
          {data.dataChegada}
        </Text>
      </View>
      <View style={styles.textosView}>
        <Text style={{color: '#FFF'}}>
          <Text style={styles.textoNegrito}>Marca: </Text>
          {data.marca}
        </Text>
      </View>
      <View style={styles.textosView}>
        <Text style={{color: '#FFF'}}>
          <Text style={styles.textoNegrito}>Placa do Transporte: </Text>
          {data.placaTransporteReserva}
        </Text>
      </View>
      <View style={styles.textosView}>
        <Text style={{color: '#FFF'}}>
          <Text style={styles.textoNegrito}>Usuario: </Text>
          {data.userReserva}
        </Text>
      </View>
      <View style={styles.textosView}>
        <Text style={{color: '#FFF'}}>
          <Text style={styles.textoNegrito}>Situação: </Text>
          {data.reservaEstado === 'autorizado' ? (
            <Text>Autorizada para uso</Text>
          ) : (
            <Text style={styles.textoNegrito}>Sendo utilizada agora</Text>
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
    padding: '2%',
    marginHorizontal: 53,
    marginTop: '3%',
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
    padding: '2%',
    borderRadius: 5,
    borderWidth: 5,
    marginHorizontal: 15,
    marginTop: '1%',
    borderColor: '#9ECEC5',
  },
});
