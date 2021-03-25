import React from 'react';
import {View} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import Header from '../../../../components/Header';
import {RNCamera} from 'react-native-camera';

const success = () => {
  alert('a');
};

export default function QrCodeCancelar() {
  return (
    <View>
      <Header />
      <QRCodeScanner onRead={success} />
    </View>
  );
}
