import React from 'react';
import {View, StyleSheet, Text, ToastAndroid} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import Header from '../../../../components/Header';
import firebase from '../../../../services/firebase';

export default function QrCodeConfirmarA({route}) {
  const {data} = route.params;
  const valor = data.salaReservada + '-' + data.blocoReservado;

  const success = async (e) => {
    console.log('valor', valor);
    console.log('e.data', e.data);
    if (valor === e.data) {
      const [diaItem, mesItem, anoItem] = data.data.split('/');
      const [horaItem, minutoItem] = data.inicio.split(':');
      const dateItem = new Date(
        anoItem,
        mesItem - 1,
        diaItem,
        horaItem - 3,
        minutoItem,
      );

      const dataMenos3 = new Date();
      dataMenos3.setHours(dataMenos3.getHours() - 3);

      const dataItemMais5 = dateItem;
      dataItemMais5.setMinutes(dateItem.getMinutes() + 10);

      const difference = dataMenos3.getTime() > dataItemMais5.getTime(); // This will give difference in milliseconds
      if (difference) {
        await firebase
          .database()
          .ref('reservasGeraisAmbiente')
          .child(data.id)
          .remove();
        console.log('passou');
        ToastAndroid.show(
          'Reserva Expirada, passaram-se 10 minutos',
          ToastAndroid.LONG,
        );
      } else {
        console.log('nao passou');
        ToastAndroid.show('Reserva Confirmada', ToastAndroid.LONG);
        return;
      }
    } else {
      alert('QrCode Lido nao é referente ao ambiente reservado');
    }
  };

  return (
    <View>
      <Header />
      <QRCodeScanner onRead={success} />
    </View>
  );
}

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
});
