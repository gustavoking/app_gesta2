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
      let ambiente = await firebase.database().ref('ambientes');
      let id = ambiente.push().key;

      ambiente.child(id).set({
        sala: sala,
        bloco: bloco,
        qtdPessoas: qtdPessoas,
        QrCodeAmbiente: sala + '-' + bloco + '-' + qtdPessoas,
      });

      navigation.navigate('QrCode', {
        verify: 'Adicionar Ambiente',
        valueAmbiente: sala + '-' + bloco + '-' + qtdPessoas,
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
    <ScrollView style={styles.container}>
      <Header titulo="Adicionar Ambiente" />

      <Image
        style={styles.salaimg}
        source={require('../../../assets/salaimg.png')}
      />
      <View style={styles.container2}>
        <Text style={styles.text}>Sala</Text>
        <Text style={styles.text}>Bloco</Text>
      </View>
      <View style={styles.container3}>
        <TextInput
          style={styles.txtinput}
          placeholder="  PREENCHER"
          placeholderTextColor="#9ECEC5"
          color="#9ECEC5"
          onChangeText={(text) => setSala(text)}
          autoCorrect={false}
          value={sala}
          autoCapitalize="none"
        />
        <TextInput
          style={styles.txtinput}
          placeholder="  PREENCHER"
          placeholderTextColor="#9ECEC5"
          color="#9ECEC5"
          onChangeText={(text) => setBloco(text)}
          autoCorrect={false}
          value={bloco}
          autoCapitalize="none"
        />
      </View>

      <Text style={styles.text2}>Máximo de Alunos</Text>
      <TextInput
        style={styles.txtinput2}
        placeholder="  PREENCHER"
        placeholderTextColor="#9ECEC5"
        color="#9ECEC5"
        onChangeText={(text) => setQtdPessoas(text)}
        autoCorrect={false}
        value={qtdPessoas}
        autoCapitalize="none"
      />
      <TouchableOpacity style={styles.btn} onPress={addSala}>
        <Text style={styles.btntext}>CONTINUAR</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#172220',
  },
  container2: {
    flexDirection: 'row',
    marginTop: 30,
    marginLeft: 30,
    marginRight: 45,
    justifyContent: 'space-between',
  },
  container3: {
    flexDirection: 'row',
    marginTop: 20,
    marginRight: 10,
    marginLeft: 10,
    justifyContent: 'space-between',
  },
  txtinput: {
    borderWidth: 1,
    borderColor: '#9ECEC5',
    marginLeft: 10,
    marginRight: 20,
    height: 40,
    marginTop: 0,
  },
  txtinput2: {
    borderWidth: 1,
    borderColor: '#9ECEC5',
    marginLeft: 20,
    marginRight: 240,
    height: 40,
    marginTop: 20,
  },
  salaimg: {
    width: 360,
    height: 180,
    resizeMode: 'contain',
    borderColor: 'black',
    borderWidth: 1,
  },
  text: {
    marginTop: 20,
    color: '#FECEA5',
    fontSize: 20,
    textAlign: 'center',
  },
  text2: {
    marginTop: 40,
    color: '#FECEA5',
    fontSize: 20,
    textAlign: 'center',
    marginRight: 160,
  },
  btn: {
    marginTop: 10,
    borderWidth: 1,
    padding: 21,
    backgroundColor: '#FECEA5',
  },
  btntext: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#3F5C57',
  },
});
