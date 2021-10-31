import React, {useState} from 'react';
import {
  TouchableOpacity,
  Keyboard,
  Text,
  View,
  StyleSheet,
  TextInput,
  Image,
  ScrollView,
} from 'react-native';
import Header from '../../../components/Header';
import firebase from '../../../services/firebase';
import {useNavigation} from '@react-navigation/native';

export default function AddTransporte() {
  const navigation = useNavigation();

  const [sala, setSala] = useState('');
  const [bloco, setBloco] = useState('');
  const [qtdPessoas, setQtdPessoas] = useState('');

  async function addSala() {
    if (sala !== '' && bloco !== '' && qtdPessoas !== '') {
      let ambiente = firebase.database().ref('ambientes');
      let id = ambiente.push().key;
      await ambiente.child(id).set({
        sala: sala,
        bloco: bloco,
        qtdPessoas: qtdPessoas,
      });

      navigation.navigate('QrCode', {
        verify: 'Adicionar Ambiente',
        valueAmbiente: sala + '-' + bloco,
      });

      Keyboard.dismiss();
      setSala('');
      setBloco('');
      setQtdPessoas('');
    } else {
      alert('PREENCHA TODOS OS CAMPOS!!');
    }
  }

  return (
    <View style={styles.container}>
      <Header titulo="Adicionar Ambiente" />
      <Text style={styles.text}>Sala</Text>

      <TextInput
        style={styles.txtinput}
        color="black"
        onChangeText={(text) => setSala(text)}
        autoCorrect={false}
        value={sala}
        autoCapitalize="none"
      />
      <Text style={styles.text}>Bloco</Text>
      <TextInput
        style={styles.txtinput}
        color="black"
        onChangeText={(text) => setBloco(text)}
        autoCorrect={false}
        value={bloco}
        autoCapitalize="none"
      />

      <Text style={styles.text}>Máximo de Alunos</Text>
      <TextInput
        style={styles.txtinput}
        color="black"
        onChangeText={(text) => setQtdPessoas(text)}
        autoCorrect={false}
        value={qtdPessoas}
        autoCapitalize="none"
      />

      <TouchableOpacity onPress={addSala}>
        <Text style={styles.textbutton}>Continuar</Text>
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

  txtinput: {
    borderWidth: 1,
    borderColor: '#9ECEC5',
    marginTop: '5%',
    marginHorizontal: '10%',
    backgroundColor: 'white',
    borderRadius: 90,
    height: '5%',
  },

  text: {
    marginTop: '5%',
    color: '#9ECEC5',
    fontSize: 20,
    textAlign: 'center',
  },
  textbutton: {
    fontSize: 20,
    marginTop: '10%',
    color: '#9ECEC5',
    textAlign: 'center',
  },
});
