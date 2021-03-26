import React from 'react';
import {View, TextInput, Text} from 'react-native';
import firebase from '../../../../services/firebase';
import Header from '../../../../components/Header';

export default function TrocarQuilometragem({route}) {
  const {data} = route.params;
  return (
    <View>
      <Header titulo="Trocar Quilometragem" />
    </View>
  );
}
