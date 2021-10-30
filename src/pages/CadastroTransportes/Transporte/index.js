import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function Transporte({data, touch = false}) {
  const navigation = useNavigation();

  return (
    <View>
      {!touch ? (
        <View style={styles.container}>
          <View style={styles.textosView}>
            <Text style={{color: '#FFF'}}>
              <Text style={styles.textoNegrito}>Marca: </Text>
              {data.marca}
            </Text>
            <Text style={{color: '#FFF'}}>
              <Text style={styles.textoNegrito}>Ano: </Text>
              {data.ano}
            </Text>
            <Text style={{color: '#FFF'}}>
              <Text style={styles.textoNegrito}>Modelo: </Text>
              {data.modelo}
            </Text>
            <Text style={{color: '#FFF'}}>
              <Text style={styles.textoNegrito}>Quilometragem: </Text>
              {data.quilometragem}
            </Text>
            <Text style={{color: '#FFF'}}>
              <Text style={styles.textoNegrito}>Combustivel: </Text>
              {data.combustivel}
            </Text>
            <Text style={{color: '#FFF'}}>
              <Text style={styles.textoNegrito}>placa: </Text>
              {data.placa}
            </Text>
            <Text style={{color: '#FFF'}}>
              <Text style={styles.textoNegrito}>tipo: </Text>
              {data.tipo}
            </Text>
          </View>
        </View>
      ) : (
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('ReservaTransporte', {
              idTrans: data.key,
              placaTrans: data.placa,
              QrCodeTransporte: data.QrCodeTransporte,
            })
          }>
          <View style={styles.container}>
            <View style={styles.textosView}>
              <Text style={{color: '#FFF'}}>
                <Text style={styles.textoNegrito}>Marca: </Text>
                {data.marca}
              </Text>
              <Text style={{color: '#FFF'}}>
                <Text style={styles.textoNegrito}>Ano: </Text>
                {data.ano}
              </Text>
              <Text style={{color: '#FFF'}}>
                <Text style={styles.textoNegrito}>Modelo: </Text>
                {data.modelo}
              </Text>
              <Text style={{color: '#FFF'}}>
                <Text style={styles.textoNegrito}>Quilometragem: </Text>
                {data.quilometragem}
              </Text>
              <Text style={{color: '#FFF'}}>
                <Text style={styles.textoNegrito}>Combustivel: </Text>
                {data.combustivel}
              </Text>
              <Text style={{color: '#FFF'}}>
                <Text style={styles.textoNegrito}>placa: </Text>
                {data.placa}
              </Text>
              <Text style={{color: '#FFF'}}>
                <Text style={styles.textoNegrito}>tipo: </Text>
                {data.tipo}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#172220',
    alignItems: 'center',
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
    borderWidth: 2,
    marginHorizontal: 15,
    marginTop: 5,
  },
  textosView: {
    flex: 1,
    marginLeft: 10,
  },
  textoNegrito: {
    color: '#9ECEC5',
    fontWeight: 'bold',
  },
  imagem: {
    backgroundColor: 'white',
    width: 70,
    height: 70,
    resizeMode: 'stretch',
  },
});
