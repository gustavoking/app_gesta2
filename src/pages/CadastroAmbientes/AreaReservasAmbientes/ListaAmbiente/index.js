import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function ListaAmbiente({data, touch = false}) {
  const navigation = useNavigation();

  console.log('data', data);

  return (
    <View>
      {!touch ? (
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
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('QrCodeCancelarA', {data: data})
            }>
            <Text style={styles.cancelar}>DEVOLVER</Text>
          </TouchableOpacity>
        </View>
      ) : (
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
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('QrCodeConfirmarA', {
                data: data,
              })
            }>
            <Text style={styles.confirmar}>CONFIRMAR</Text>
          </TouchableOpacity>
        </View>
      )}
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
    borderRadius: 5,
    borderWidth: 5,
    marginHorizontal: 15,
    marginTop: 5,
    borderColor: '#9ECEC5',
  },
  textosView: {
    flex: 1,
    marginLeft: 10,
  },
  textoNegrito: {
    color: '#9ECEC5',
    fontWeight: 'normal',
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
  cancelar: {
    backgroundColor: '#2E8B57',
    borderWidth: 1,
    borderColor: '#9ECEC5',
    borderRadius: 10,
    padding: 5,
    marginTop: 10,
    paddingLeft: 50,
    paddingRight: 50,
    fontSize: 20,
  },
  confirmar: {
    backgroundColor: 'green',
    borderWidth: 1,
    borderColor: '#9ECEC5',
    borderRadius: 10,
    padding: 5,
    marginTop: 10,
    paddingLeft: 50,
    paddingRight: 50,
    fontSize: 20,
  },
});
