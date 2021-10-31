import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function ListaAmbiente({data, touch = false}) {
  const navigation = useNavigation();

  return (
    <View>
      {!touch ? (
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
            <Text style={styles.textoNegrito}>
              Hora Término: {data.termino}
            </Text>
          </View>
          <View style={styles.textosView}>
            <Text style={styles.textoNegrito}>Sala: {data.salaReservada}</Text>
          </View>
          <View style={styles.textosView}>
            <Text style={styles.textoNegrito}>
              Bloco: {data.blocoReservado}
            </Text>
          </View>
          <View style={styles.textosView}>
            <Text style={styles.textoNegrito}>
              Usuario: {data.nomeUsuarioReserva}
            </Text>
          </View>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('QrCodeCancelarA', {data: data})
            }>
            <Text style={styles.confirmar}>Devolver</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.container}>
          <View style={styles.textosView}>
            <Text style={styles.textoNegrito}>
              <Text style={styles.textoNegrito}>Data Início: </Text>
              {data.data}
            </Text>
          </View>
          <View style={styles.textosView}>
            <Text style={styles.textoNegrito}>
              <Text style={styles.textoNegrito}>Hora Início: </Text>
              {data.inicio}
            </Text>
          </View>
          <View style={styles.textosView}>
            <Text style={styles.textoNegrito}>
              <Text style={styles.textoNegrito}>Data Término: </Text>
              {data.dataChegada}
            </Text>
          </View>
          <View style={styles.textosView}>
            <Text style={styles.textoNegrito}>
              <Text style={styles.textoNegrito}>Hora Término: </Text>
              {data.termino}
            </Text>
          </View>
          <View style={styles.textosView}>
            <Text style={styles.textoNegrito}>Sala: {data.salaReservada}</Text>
          </View>
          <View style={styles.textosView}>
            <Text style={styles.textoNegrito}>
              Bloco: {data.blocoReservado}
            </Text>
          </View>
          <View style={styles.textosView}>
            <Text style={styles.textoNegrito}>
              Usuario: {data.nomeUsuarioReserva}
            </Text>
          </View>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('QrCodeConfirmarA', {
                data: data,
              })
            }>
            <Text style={styles.confirmar}>Confirmar</Text>
          </TouchableOpacity>
        </View>
      )}
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
  confirmar: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: '1%',
    marginTop: '2%',
    fontSize: 20,
    color: '#3F5C57',
    textAlign: 'center',
  },
});
