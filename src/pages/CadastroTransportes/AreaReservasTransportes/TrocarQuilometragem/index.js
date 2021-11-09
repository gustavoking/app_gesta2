import React, {useState} from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import firebase from '../../../../services/firebase';
import Header from '../../../../components/Header';
import {useNavigation} from '@react-navigation/native';

export default function TrocarQuilometragem({route}) {
  const [quilometragem, setQuilometragem] = useState('');
  const [show, setShow] = useState(true);
  const {data} = route.params;
  const navigation = useNavigation();

  async function trocarKm() {
    if (quilometragem !== '') {
      await firebase
        .database()
        .ref('transportes')
        .once('value', (snapshot) => {
          snapshot.forEach((transporte) => {
            if (transporte.val().placa === data.placaTransporteReserva) {
              if (
                parseFloat(transporte.val().quilometragem) >=
                parseFloat(quilometragem)
              ) {
                alert('A quilometragem informada é menor que a já cadastrada');
              } else {
                firebase
                  .database()
                  .ref(`transportes/${transporte.key}`)
                  .update({
                    quilometragem: quilometragem,
                  });
                ToastAndroid.show('Quilometragem Alterada', ToastAndroid.LONG);
                setShow(false);

                firebase
                  .database()
                  .ref('reservasGeraisTransporte')
                  .child(data.id)
                  .remove();
              }
            }
          });
        });
    } else {
      alert('Digite a nova quilometragem');
    }
  }

  return (
    <View style={styles.container}>
      <Header titulo="Trocar Quilometragem" />
      <TextInput
        style={styles.txtinput}
        color="black"
        placeholder="  Inserir Quilometragem Atual"
        placeholderTextColor="black"
        onChangeText={(text) => setQuilometragem(text)}
        autoCorrect={false}
        value={quilometragem}
        autoCapitalize="none"
        keyboardType="numeric"
      />

      {show ? (
        <TouchableOpacity style={styles.btn3} onPress={() => trocarKm()}>
          <Text style={styles.txt2}>Confirmar</Text>
        </TouchableOpacity>
      ) : (
        <View>
          <Text style={styles.text}>Nova Quilometragem do Transporte</Text>
          <Text style={styles.novoKm}>{quilometragem} Km</Text>
        </View>
      )}
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
    height: '7%',
    fontSize: 20,
    textAlign: 'center',
  },
  text: {
    marginTop: 10,
    color: '#FECEA5',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 40,
  },
  text2: {
    color: '#9ECEC5',
    textAlign: 'center',
    marginTop: 40,
    fontWeight: 'normal',
    fontSize: 20,
  },
  btn: {
    marginTop: 30,
    padding: 10,
    backgroundColor: '#FECEA5',
    marginLeft: 50,
    marginRight: 50,
    borderRadius: 20,
  },
  btntext: {
    textAlign: 'center',
    fontWeight: 'normal',
    color: '#3F5C57',
  },
  novoKm: {
    color: '#9ECEC5',
    textAlign: 'center',
    marginTop: 50,
    fontWeight: 'normal',
    fontSize: 20,
  },
  btn3: {
    backgroundColor: 'white',
    borderRadius: 90,
    marginTop: '5%',
    marginHorizontal: '10%',
    borderWidth: 1,
    height: 55,
  },
  txt2: {
    color: '#3F5C57',
    fontSize: 20,
    textAlign: 'center',
    marginTop: '3%',
  },
});
