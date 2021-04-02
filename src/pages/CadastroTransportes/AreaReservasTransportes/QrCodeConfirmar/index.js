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

      // Variavel para comparar e verificar se passou 10 minutos desde o inicio da reserva e impedir a confirmação
      const dataItemMais10 = new Date(
        anoItem,
        mesItem - 1,
        diaItem,
        horaItem - 3,
        minutoItem + 10,
      );

      // Variavel para comparar e verificar e deixar a pessoa confirmar reserva no minimo
      //10 minutos antes do horario de inicio
      const dataItemMenos10 = new Date(
        anoItem,
        mesItem - 1,
        diaItem,
        horaItem - 3,
        minutoItem - 10,
      );

      const dataMenos3 = new Date();
      dataMenos3.setHours(dataMenos3.getHours() - 3);

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
        if (dataMenos3.getTime() >= dataItemMenos10.getTime()) {
          ToastAndroid.show('Reserva Confirmada', ToastAndroid.LONG);
          await firebase
            .database()
            .ref('reservasGeraisTransporte')
            .child(data.id)
            .update({
              reservaEstado: 'confirmado',
            });
          return;
        } else {
          alert(
            'Só é possível confirmar essa reserva no mínimo 10 minutos antes do horario de inicio',
          );
        }
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
