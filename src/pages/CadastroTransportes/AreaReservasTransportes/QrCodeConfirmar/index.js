import React from 'react';
import {View, StyleSheet, Text, ToastAndroid} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import Header from '../../../../components/Header';
import firebase from '../../../../services/firebase';

export default function QrCodeConfirmar({route}) {
  const {data} = route.params;

  const success = async (e) => {
    if (data.placaTransporteReserva === e.data) {
      const [diaItem, mesItem, anoItem] = data.dataReserva.split('/');
      const [horaItem, minutoItem] = data.saidaReserva.split(':');
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
          .ref('reservasGeraisTransporte')
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
      alert('QrCode Lido nao é referente ao transporte reservado');
    }
  };

  return (
    <View styles={styles.container}>
      <Header />
      <Text style={styles.text}>
        SCANEIE O QR CODE PARA CONFIRMAR O TRANSPORTE
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
