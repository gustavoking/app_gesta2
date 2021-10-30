import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function ModeloListaReservaPessoal({data, touch = false}) {
  const navigation = useNavigation();

  return (
    <View>
      {!touch ? (
        <View style={styles.container}>
          <View style={styles.textosView}>
            <Text style={{color: '#FFF'}}>
              <Text style={styles.textoNegrito}>Data: </Text>
              {data.dataReserva}
            </Text>
          </View>
          <View style={styles.textosView}>
            <Text style={{color: '#FFF'}}>
              <Text style={styles.textoNegrito}>Hora Saida: </Text>
              {data.saidaReserva}
            </Text>
          </View>
          <View style={styles.textosView}>
            <Text style={{color: '#FFF'}}>
              <Text style={styles.textoNegrito}>Hora Chegada: </Text>
              {data.chegadaReserva}
            </Text>
          </View>
          <View style={styles.textosView}>
            <Text style={{color: '#FFF'}}>
              <Text style={styles.textoNegrito}>Placa do Transporte: </Text>
              {data.placaTransporteReserva}
            </Text>
          </View>
          <View style={styles.textosView}>
            <Text style={{color: '#FFF'}}>
              <Text style={styles.textoNegrito}>Usuario: </Text>
              {data.userReserva}
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('QrCodeCancelar', {data: data})}>
            <Text style={styles.cancelar}>DEVOLVER</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.container}>
          <View style={styles.textosView}>
            <Text style={{color: '#FFF'}}>
              <Text style={styles.textoNegrito}>Data: </Text>
              {data.dataReserva}
            </Text>
          </View>
          <View style={styles.textosView}>
            <Text style={{color: '#FFF'}}>
              <Text style={styles.textoNegrito}>Hora Saida: </Text>
              {data.saidaReserva}
            </Text>
          </View>
          <View style={styles.textosView}>
            <Text style={{color: '#FFF'}}>
              <Text style={styles.textoNegrito}>Hora Chegada: </Text>
              {data.chegadaReserva}
            </Text>
          </View>
          <View style={styles.textosView}>
            <Text style={{color: '#FFF'}}>
              <Text style={styles.textoNegrito}>Placa do Transporte: </Text>
              {data.placaTransporteReserva}
            </Text>
          </View>
          <View style={styles.textosView}>
            <Text style={{color: '#FFF'}}>
              <Text style={styles.textoNegrito}>Usuario: </Text>
              {data.userReserva}
            </Text>
          </View>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('QrCodeConfirmar', {data: data})
            }>
            <Text style={styles.confirmar}>CONFIRMAR</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#172220',
    alignItems: 'center',
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
    borderWidth: 5,
    marginHorizontal: 15,
    marginTop: 5,
    borderColor: '#9ECEC5',
  },
  textosView: {
    flex: 1,
    marginLeft: 10,
  },
  textoNegrito: {
    color: '#9ECEC5',
    fontWeight: 'normal',
  },
  imagem: {
    backgroundColor: 'white',
    width: 70,
    height: 70,
    resizeMode: 'stretch',
  },
  cancelar: {
    backgroundColor: '#2E8B57',
    borderWidth: 1,
    borderColor: '#9ECEC5',
    borderRadius: 10,
    padding: 5,
    marginTop: 10,
    paddingLeft: 50,
    paddingRight: 50,
    fontSize: 20,
  },
  confirmar: {
    backgroundColor: 'green',
    borderWidth: 1,
    borderColor: '#9ECEC5',
    borderRadius: 10,
    padding: 5,
    marginTop: 10,
    paddingLeft: 50,
    paddingRight: 50,
    fontSize: 20,
  },
});
