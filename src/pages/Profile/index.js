import React, {useContext, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Header from '../../components/Header';
import {AuthContext} from '../../contexts/auth';

export default function Profile({navigation}) {
  const [isEnabled, setIsEnabled] = useState(false);

  const {user} = useContext(AuthContext);

  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
  };

  return (
    <View style={styles.container}>
      <Header titulo="Perfil" />

      <Text style={styles.nome}>{user.nome}</Text>

      <Text style={styles.content}>Usuário</Text>
      <Text style={styles.content2}>{user.tipo}</Text>
      <Text style={styles.content}>E-mail</Text>
      <Text style={styles.content2}>{user.email}</Text>
      <Text style={styles.content}>Campus</Text>
      <Text style={styles.content2}>Xanxerê</Text>

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.textbutton}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3F5C57',
    flex: 1,
  },
  nome: {
    fontSize: 20,
    color: '#FFF',
    textAlign: 'center',
    marginTop: '5%',
  },
  content: {
    color: '#9ECEC5',
    fontSize: 20,
    marginTop: '10%',
    textAlign: 'center',
  },

  content2: {
    marginTop: '2%',
    color: '#FFF',
    fontSize: 20,

    textAlign: 'center',
  },

  textbutton: {
    fontSize: 20,
    marginTop: '6%',
    color: '#9ECEC5',
    textAlign: 'center',
  },
});
