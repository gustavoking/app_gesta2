import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';

export default function Motorista({data}) {
  return (
    <View style={styles.container}>
      <View style={styles.textosView}>
        <Text style={styles.textoNegrito}>Nome: {data.nome}</Text>

        <Text style={styles.textoNegrito}>Número: {data.numero}</Text>
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
});
