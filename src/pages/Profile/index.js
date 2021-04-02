import React, {useContext, useState} from 'react';
import {View, Text, StyleSheet, Image, Switch} from 'react-native';
import Header from '../../components/Header';
import {AuthContext} from '../../contexts/auth';

export default function Profile() {
  const [isEnabled, setIsEnabled] = useState(false);

  const {user} = useContext(AuthContext);

  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
  };

  function verifyUserImage() {
    if (user.tipo === 'servidor') {
      return (
        <Image
          source={require('../../assets/servidorimg.png')}
          style={styles.imagem}
        />
      );
    } else if (user.tipo === 'monitor') {
      return (
        <Image
          source={require('../../assets/studentimg.png')}
          style={styles.imagem}
        />
      );
    } else {
      return (
        <Image source={require('../../assets/adm.jpg')} style={styles.imagem} />
      );
    }
  }

  return (
    <View style={styles.container}>
      <Header titulo="Perfil" />

      <View style={styles.viewicone}>
        {verifyUserImage()}

        <Text style={styles.nome}>{user.nome}</Text>
      </View>

      <View style={styles.viewContent}>
        <Text style={styles.content}>Usuário</Text>
        <Text style={styles.content2}>{user.tipo}</Text>
        <Text style={styles.content}>E-mail</Text>
        <Text style={styles.content2}>{user.email}</Text>
        <Text style={styles.content}>Campus</Text>
        <Text style={styles.content2}>Xanxerê</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3F5C57',
    flex: 1,
  },
  nome: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFF',
    textAlign: 'center',
    marginTop: 10,
  },
  content: {
    color: '#FECEA5',
    fontSize: 16,
    marginTop: 25,
  },
  viewContent: {
    marginLeft: 35,
  },
  content2: {
    marginTop: 6,
    fontWeight: 'bold',
    color: '#FFF',
    fontSize: 17,
  },
  imagem: {
    height: 100,
    width: 100,
    resizeMode: 'contain',
    borderRadius: 90,
    marginTop: 10,
    alignSelf: 'center',
  },
  viewicone: {
    backgroundColor: '#273936',
    borderRadius: 5,
    borderWidth: 2,
    marginHorizontal: 15,
    marginTop: 10,
    padding: 5,
  },
  switch: {
    marginRight: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
