import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Header from '../../../components/Header';
import {useNavigation} from '@react-navigation/native';

export default function AreaReservasAmbientes() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Header titulo="Área de Reservas" />

      <TouchableOpacity onPress={() => navigation.navigate('ReservarA')}>
        <Text style={styles.textbutton}>Reservar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('ConfirmarA')}>
        <Text style={styles.textbutton}>Confirmar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('DevolverA')}>
        <Text style={styles.textbutton}>Devolver</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('CancelarA')}>
        <Text style={styles.textbutton}>Cancelar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.textbutton}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3F5C57',
  },
  textbutton: {
    marginVertical: 15,
    fontSize: 20,
    marginTop: '15%',
    color: '#9ECEC5',
    textAlign: 'center',
  },
});
