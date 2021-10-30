import React, {useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Header from '../../components/Header';
import {useNavigation} from '@react-navigation/native';
import {AuthContext} from '../../contexts/auth';

export default function CadastroTransportes() {
  const {user} = useContext(AuthContext);

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Header titulo="Área de Transportes" />

      <TouchableOpacity
        onPress={() => navigation.navigate('AreaReservasTransportes')}>
        <Text style={styles.textbutton}> Área de Reservas</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('ListaTransporte')}>
        <Text style={styles.textbutton}>Lista de Transportes</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('ListaMotorista')}>
        <Text style={styles.textbutton}> Lista de Motoristas</Text>
      </TouchableOpacity>

      {user.tipo === 'administrador' && (
        <TouchableOpacity onPress={() => navigation.navigate('AddTransporte')}>
          <Text style={styles.textbutton}>Adicionar Transporte</Text>
        </TouchableOpacity>
      )}

      {user.tipo === 'administrador' && (
        <TouchableOpacity onPress={() => navigation.navigate('AddMotorista')}>
          <Text style={styles.textbutton}> Adicionar Motorista</Text>
        </TouchableOpacity>
      )}
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
    marginTop: 50,
    color: '#9ECEC5',
    textAlign: 'center',
  },
});
