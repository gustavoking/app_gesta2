import React from 'react';
import {View, StyleSheet, Text, ToastAndroid} from 'react-native';
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
      await firebase
        .database()
        .ref('reservasGeraisAmbiente')
        .child(data.id)
        .remove();
      ToastAndroid.show('Reserva Devolvida', ToastAndroid.LONG);
    } else {
      alert('QrCode Lido nao é referente ao ambiente reservado');
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.text}>
        SCANEIE O QR CODE PARA DEVOLVER O AMBIENTE
      </Text>
      <QRCodeScanner onRead={success} />
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
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
});
