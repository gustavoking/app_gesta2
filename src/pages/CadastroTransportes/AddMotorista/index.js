import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  Keyboard,
  Text,
  StyleSheet,
  TextInput,
  Image,
  ScrollView,
} from 'react-native';
import Header from '../../../components/Header';
import firebase from '../../../services/firebase';

export default function AddTransporte({navigation}) {
  const [nome, setNome] = useState('');
  const [numero, setNumero] = useState('');

  async function addCar() {
    if (nome !== '' && numero !== '') {
      let motorista = await firebase.database().ref('motoristas');
      let id = motorista.push().key;

      motorista.child(id).set({
        nome: nome,
        numero: numero,
      });

      Keyboard.dismiss();
      setNome('');
      setNumero('');
    } else {
      alert('PREENCHA TODOS OS CAMPOS!!');
    }
  }

  return (
    <View style={styles.container}>
      <Header titulo="Adicionar Motorista" />

      <ScrollView>
        <Text style={styles.text}>Nome</Text>
        <TextInput
          style={styles.txtinput}
          color="#9ECEC5"
          onChangeText={(text) => setNome(text)}
          autoCorrect={false}
          value={nome}
          autoCapitalize="none"></TextInput>
        <Text style={styles.text}>Número</Text>
        <TextInput
          style={styles.txtinput}
          color="#9ECEC5"
          onChangeText={(text) => setNumero(text)}
          autoCorrect={false}
          value={numero}
          autoCapitalize="none"></TextInput>
        <TouchableOpacity onPress={addCar}>
          <Text style={styles.textbutton}>Adicionar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.textbutton}>Voltar</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3F5C57',
  },
  txtinput: {
    borderWidth: 1,
    borderColor: '#9ECEC5',
    marginLeft: 50,
    marginRight: 50,
    height: '8%',
    marginTop: 5,
    backgroundColor: 'white',
    borderRadius: 90,
  },

  text: {
    marginTop: 10,
    color: '#9ECEC5',
    fontSize: 20,
    textAlign: 'center',
  },
  textbutton: {
    marginVertical: 15,
    fontSize: 20,
    marginTop: 25,
    color: '#9ECEC5',
    textAlign: 'center',
  },
});
