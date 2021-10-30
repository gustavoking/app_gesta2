import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import Header from '../../../../components/Header';
import {useNavigation} from '@react-navigation/native';
import firebase from '../../../../services/firebase';

export default function QrCodeCancelarA({route}) {
  const {data} = route.params;

  const navigation = useNavigation();
  const valor = data.salaReservada + '-' + data.blocoReservado;

  const success = async (e) => {
    if (valor === e.data) {
      if (data.reservaEstado === 'confirmado') {
        await firebase
          .database()
          .ref('reservasGeraisAmbiente')
          .child(data.id)
          .remove();
        ToastAndroid.show('Reserva Devolvida', ToastAndroid.LONG);
      } else {
        alert(
          'Não é possível devolver um ambiente em que a utilização não foi confirmada',
        );
      }
    } else {
      alert('QrCode Lido nao é referente ao ambiente reservado');
    }
  };

  return (
    <View style={styles.container}>
      <Header />

      <QRCodeScanner onRead={success} />
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
  text: {
    color: '#9ECEC5',
    fontWeight: 'normal',
    fontSize: 20,
    textAlign: 'center',
  },
  textbutton: {
    marginVertical: 15,
    fontSize: 20,
    marginTop: 50,
    color: '#9ECEC5',
    textAlign: 'center',
  },
});
