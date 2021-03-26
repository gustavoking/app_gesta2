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

      {show ? (
        <View>
          <Text style={styles.text2}>INSIRA A NOVA QUILOMETRAGEM</Text>
          <Text style={styles.text}>Quilometragem</Text>
          <TextInput
            style={styles.txtinput}
            placeholder="  PREENCHER"
            placeholderTextColor="#9ECEC5"
            color="#9ECEC5"
            onChangeText={(text) => setQuilometragem(text)}
            autoCorrect={false}
            value={quilometragem}
            keyboardType="numeric"
            autoCapitalize="none"
          />
          <TouchableOpacity style={styles.btn} onPress={trocarKm}>
            <Text style={styles.btntext}>TROCAR QUILOMETRAGEM</Text>
          </TouchableOpacity>
        </View>
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
    marginLeft: 50,
    marginRight: 50,
    height: 40,
    marginTop: 5,
  },
  text: {
    marginTop: 10,
    color: '#FECEA5',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 40,
  },
  text2: {
    color: '#9ECEC5',
    textAlign: 'center',
    marginTop: 40,
    fontWeight: 'bold',
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
    fontWeight: 'bold',
    color: '#3F5C57',
  },
  novoKm: {
    color: '#9ECEC5',
    textAlign: 'center',
    marginTop: 50,
    fontWeight: 'bold',
    fontSize: 20,
  },
});
