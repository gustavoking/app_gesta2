import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function Transporte({data, touch = false}) {
  const navigation = useNavigation();

  return (
    <View>
      {!touch ? (
        <View style={styles.container}>
          <View style={styles.textosView}>
            <Text style={styles.textoNegrito}>Marca: {data.marca}</Text>

            <Text style={styles.textoNegrito}>Ano: {data.ano}</Text>

            <Text style={styles.textoNegrito}>Modelo: {data.modelo}</Text>

            <Text style={styles.textoNegrito}>
              Quilometragem: {data.quilometragem}
            </Text>

            <Text style={styles.textoNegrito}>
              Combustivel: {data.combustivel}{' '}
            </Text>

            <Text style={styles.textoNegrito}>placa: {data.placa}</Text>

            <Text style={styles.textoNegrito}>tipo: {data.tipo}</Text>
          </View>
        </View>
      ) : (
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('ReservaTransporte', {
              idTrans: data.key,
              placaTrans: data.placa,
              QrCodeTransporte: data.QrCodeTransporte,
            })
          }>
          <View style={styles.container}>
            <View style={styles.textosView}>
              <Text style={styles.textoNegrito}>Marca: {data.marca} </Text>

              <Text style={styles.textoNegrito}>Ano: {data.ano}</Text>

              <Text style={styles.textoNegrito}>Modelo: {data.modelo}</Text>

              <Text style={styles.textoNegrito}>
                Quilometragem: {data.quilometragem}
              </Text>

              <Text style={styles.textoNegrito}>
                Combustivel: {data.combustivel}
              </Text>

              <Text style={styles.textoNegrito}>placa: {data.placa}</Text>

              <Text style={styles.textoNegrito}>tipo: {data.tipo}</Text>
            </View>
          </View>
        </TouchableOpacity>
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
});
