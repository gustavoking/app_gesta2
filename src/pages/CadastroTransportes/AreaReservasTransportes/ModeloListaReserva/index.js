import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
// import { useNavigation } from '@react-navigation/native'

export default function ModeloListaReserva({data}) {
  // const navigation = useNavigation();
  console.log(data);

  return (
    <View style={styles.container}>
      <View style={styles.textosView}>
        <Text style={{color: '#FFF'}}>
          <Text style={styles.textoNegrito}>Data: </Text>
          {data.dataReserva}
        </Text>
      </View>
      <View style={styles.textosView}>
        <Text style={{color: '#FFF'}}>
          <Text style={styles.textoNegrito}>Hora Saida: </Text>
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
    backgroundColor: '#172220',
    alignItems: 'center',
    marginBottom: 10,
    padding: 10,
    marginHorizontal: 53,
    marginTop: 5,
    borderTopColor: '#9ECEC5',
    borderWidth: 1,
    borderRightColor: '#172220',
    borderLeftColor: '#172220',
    borderBottomColor: '#172220',
    borderRadius: 1,
  },
  textosView: {
    flex: 1,
    marginLeft: 10,
  },
  textoNegrito: {
    color: '#9ECEC5',
    fontWeight: 'bold',
  },
  imagem: {
    backgroundColor: 'white',
    width: 70,
    height: 70,
    resizeMode: 'stretch',
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
