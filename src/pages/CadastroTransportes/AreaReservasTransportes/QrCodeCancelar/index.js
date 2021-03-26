import React from 'react';
import {View} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import Header from '../../../../components/Header';
import firebase from '../../../../services/firebase';

export default function QrCodeCancelar({route}) {

  const { data } = route.params;

  const success = () => {
    if (data.placaTransporteReserva === e.data) {
        await firebase
          .database()
          .ref('reservasGeraisTransporte')
          .child(data.id)
          .remove();
    } else {
      alert('QrCode Lido nao é referente ao transporte reservado');
    }
  };

  return (
    <View>
      <Header />
      <QRCodeScanner onRead={success} />
    </View>
  );
}
