import React from 'react';
import {View} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import Header from '../../../../components/Header';
import {useNavigation} from '@react-navigation/native';
import firebase from '../../../../services/firebase';
import {useEffect} from 'react/cjs/react.production.min';

export default function QrCodeCancelar({route}) {
  const {data} = route.params;

  const navigation = useNavigation();

  navigation.navigate('TrocarQuilometragem', {data: data});

  const success = (e) => {
    if (data.placaTransporteReserva === e.data) {
      navigation.navigate('TrocarQuilometragem', {data: data});
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
