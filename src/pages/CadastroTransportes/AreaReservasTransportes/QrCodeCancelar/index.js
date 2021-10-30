import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import Header from '../../../../components/Header';
import {useNavigation} from '@react-navigation/native';

export default function QrCodeCancelar({route}) {
  const {data} = route.params;

  const navigation = useNavigation();

  const success = (e) => {
    if (data.placaTransporteReserva === e.data) {
      if (data.reservaEstado === 'confirmado') {
        navigation.navigate('TrocarQuilometragem', {data: data});
      } else {
        alert(
          'Não é possível devolver um transporte em que a utilização não foi confirmada',
        );
      }
    } else {
      alert('QrCode Lido nao é referente ao transporte reservado');
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.text}>
        SCANEIE O QR CODE PARA DEVOLVER O TRANSPORTE
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
    fontWeight: 'normal',
    fontSize: 20,
    textAlign: 'center',
  },
});
