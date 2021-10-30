import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  Keyboard,
  Text,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  Image,
  ScrollView,
} from 'react-native';
import Header from '../../../components/Header';
import firebase from '../../../services/firebase';
import {useNavigation} from '@react-navigation/native';

export default function AddTransporte() {
  const navigation = useNavigation();

  const [marca, setMarca] = useState('');
  const [quilometragem, setQuilometragem] = useState('');
  const [modelo, setModelo] = useState('');
  const [combustivel, setCombustivel] = useState('');
  const [placa, setPlaca] = useState('');
  const [tipo, setTipo] = useState('');
  const [ano, setAno] = useState('');

  async function addCar() {
    if (
      marca !== '' &&
      quilometragem !== '' &&
      modelo !== '' &&
      combustivel !== '' &&
      placa !== '' &&
      tipo !== '' &&
      ano !== ''
    ) {
      let transporte = await firebase.database().ref('transportes');
      let id = transporte.push().key;

      transporte.child(id).set({
        marca: marca,
        quilometragem: quilometragem,
        modelo: modelo,
        combustivel: combustivel,
        placa: placa,
        tipo: tipo,
        ano: ano,
      });

      navigation.navigate('QrCode', {
        verify: 'Adicionar Transporte',
        valueTransporte: placa,
      });

      Keyboard.dismiss();
      setMarca('');
      setQuilometragem('');
      setPlaca('');
      setAno('');
      setTipo('');
      setCombustivel('');
      setModelo('');
    } else {
      alert('PREENCHA TODOS OS CAMPOS!!');
    }
  }

  return (
    <View style={styles.container}>
      <Header titulo="Adicionar Transporte" />

      <ScrollView>
        <Text style={styles.text}>Marca</Text>
        <TextInput
          style={styles.txtinput}
          color="black"
          onChangeText={(text) => setMarca(text)}
          autoCorrect={false}
          value={marca}
          autoCapitalize="none"
        />
        <Text style={styles.text}>Quilometragem</Text>
        <TextInput
          style={styles.txtinput}
          color="black"
          onChangeText={(text) => setQuilometragem(text)}
          autoCorrect={false}
          value={quilometragem}
          autoCapitalize="none"
        />
        <Text style={styles.text}>Modelo</Text>
        <TextInput
          style={styles.txtinput}
          color="black"
          onChangeText={(text) => setModelo(text)}
          autoCorrect={false}
          value={modelo}
          autoCapitalize="none"
        />
        <Text style={styles.text}>Combustivel</Text>
        <TextInput
          style={styles.txtinput}
          color="black"
          onChangeText={(text) => setCombustivel(text)}
          autoCorrect={false}
          value={combustivel}
          autoCapitalize="none"
        />
        <Text style={styles.text}>Placa</Text>
        <TextInput
          style={styles.txtinput}
          color="black"
          onChangeText={(text) => setPlaca(text)}
          autoCorrect={false}
          value={placa}
          autoCapitalize="none"
        />
        <Text style={styles.text}>Tipo</Text>
        <TextInput
          style={styles.txtinput}
          color="black"
          onChangeText={(text) => setTipo(text)}
          autoCorrect={false}
          value={tipo}
          autoCapitalize="none"
        />
        <Text style={styles.text}>Ano</Text>
        <TextInput
          style={styles.txtinput}
          color="black"
          onChangeText={(text) => setAno(text)}
          autoCorrect={false}
          value={ano}
          autoCapitalize="none"
        />
        <TouchableOpacity onPress={addCar}>
          <Text style={styles.textbutton}>Continuar</Text>
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
    height: '4%',
    borderRadius: 90,
    marginTop: 5,
    backgroundColor: 'white',
  },
  text: {
    marginTop: 10,
    color: '#9ECEC5',
    fontSize: 20,
    textAlign: 'center',
  },
  btn: {
    marginTop: 10,
    borderWidth: 1,
    padding: 10,
    backgroundColor: '#FECEA5',
  },
  btntext: {
    textAlign: 'center',
    fontWeight: 'normal',
    color: '#3F5C57',
  },
  textbutton: {
    marginVertical: 15,
    fontSize: 20,
    marginTop: 25,
    color: '#9ECEC5',
    textAlign: 'center',
  },
});
