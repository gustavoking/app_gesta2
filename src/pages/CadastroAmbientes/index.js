import React, {useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Header from '../../components/Header';
import {useNavigation} from '@react-navigation/native';
import {AuthContext} from '../../contexts/auth';

export default function CadastroAmbientes() {
  const {user} = useContext(AuthContext);

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Header titulo="Área de Ambientes" />

      <TouchableOpacity
        onPress={() => navigation.navigate('AreaReservasAmbientes')}>
        <Text style={styles.textbutton}> Área de Reservas</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('ListaAmbiente')}>
        <Text style={styles.textbutton}>Lista de Ambientes</Text>
      </TouchableOpacity>

      {user.tipo === 'administrador' && (
        <TouchableOpacity onPress={() => navigation.navigate('AddAmbiente')}>
          <Text style={styles.textbutton}>Adicionar Ambiente</Text>
        </TouchableOpacity>
      )}
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.textbutton1}>Voltar</Text>
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
    marginTop: '13%',
    textAlign: 'center',
    color: '#9ECEC5',
  },
  textbutton1: {
    fontSize: 20,
    marginTop: '9%',
    color: '#9ECEC5',
    textAlign: 'center',
  },
});
