import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function Ambiente({data, touch = false}) {
  const navigation = useNavigation();

  return (
    <View>
      {!touch ? (
        <View style={styles.container}>
          <Text style={styles.textoNegrito}>Sala: {data.sala}</Text>

          <Text style={styles.textoNegrito}>Bloco: {data.bloco}</Text>

          <Text style={styles.textoNegrito}>
            Máximo de Alunos: {data.qtdPessoas}
          </Text>
        </View>
      ) : (
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('ReservaAmbiente', {
              salaReservadaA: data.sala,
              blocoReservadoA: data.bloco,
            })
          }>
          <View style={styles.container}>
            <Text style={styles.textoNegrito}>Sala: {data.sala}</Text>

            <Text style={styles.textoNegrito}>Bloco: {data.bloco}</Text>

            <Text style={styles.textoNegrito}>
              {' '}
              Máximo de Alunos: {data.qtdPessoas}
            </Text>
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '2%',
    borderRadius: 1,
    borderWidth: 1,
    marginHorizontal: 58,
    marginTop: '1%',
    borderTopColor: '#9ECEC5',
    borderBottomColor: '#3F5C57',
    borderRightColor: '#3F5C57',
    borderLeftColor: '#3F5C57',
  },

  textoNegrito: {
    color: 'white',
    fontWeight: 'normal',
    textAlign: 'center',
  },
});
