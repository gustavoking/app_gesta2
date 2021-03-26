import React, {useContext} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import Header from '../../../../components/Header';
import {RNCamera} from 'react-native-camera';
import firebase from '../../../../services/firebase';
import {AuthContext} from '../../../../contexts/auth';
import {format} from 'date-fns';
import {useEffect} from 'react';

export default function QrCodeConfirmar({route}) {
  useEffect(() => {
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
      await firebase.database().ref('reservasGeraisTransporte').child(data.id).remove()
    } else {
      console.log('nao passou');
    }

  }, []);
  const {user} = useContext(AuthContext);

  const {data} = route.params;

  const success = () => {};

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
