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
            <Text style={styles.textoNegrito}>Data: {data.dataReserva}</Text>
          </View>
          <View style={styles.textosView}>
            <Text style={styles.textoNegrito}>
              Hora Saída: {data.saidaReserva}
            </Text>
          </View>
          <View style={styles.textosView}>
            <Text style={styles.textoNegrito}>
              Data Chegada: {data.dataChegada}
            </Text>
          </View>
          <View style={styles.textosView}>
            <Text style={styles.textoNegrito}>
              Hora Chegada: {data.chegadaReserva}
            </Text>
          </View>
          <View style={styles.textosView}>
            <Text style={styles.textoNegrito}>
              Placa do Transporte: {data.placaTransporteReserva}{' '}
            </Text>
          </View>
          <View style={styles.textosView}>
            <Text style={styles.textoNegrito}>Usuario: {data.userReserva}</Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('QrCodeCancelar', {data: data})}>
            <Text style={styles.confirmar}>Devolver</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.container}>
          <View style={styles.textosView}>
            <Text style={styles.textoNegrito}>Data: {data.dataReserva}</Text>
          </View>
          <View style={styles.textosView}>
            <Text style={styles.textoNegrito}>
              Hora Saída: {data.saidaReserva}
            </Text>
          </View>
          <View style={styles.textosView}>
            <Text style={styles.textoNegrito}>
              Data Chegada: {data.dataChegada}
            </Text>
          </View>
          <View style={styles.textosView}>
            <Text style={styles.textoNegrito}>
              Hora Chegada: {data.chegadaReserva}
            </Text>
          </View>
          <View style={styles.textosView}>
            <Text style={styles.textoNegrito}>
              Placa do Transporte: {data.placaTransporteReserva}
            </Text>
          </View>
          <View style={styles.textosView}>
            <Text style={styles.textoNegrito}>Usuario: {data.userReserva}</Text>
          </View>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('QrCodeConfirmar', {data: data})
            }>
            <Text style={styles.confirmar}>Confirmar</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '2%',
    borderRadius: 1,
    borderWidth: 1,
    marginHorizontal: 58,
    marginTop: '2%',
    borderTopColor: '#9ECEC5',
    borderBottomColor: '#3F5C57',
    borderRightColor: '#3F5C57',
    borderLeftColor: '#3F5C57',
  },
  textosView: {
    flex: 1,
    marginLeft: 10,
    textAlign: 'center',
  },
  textoNegrito: {
    color: '#FFF',
    textAlign: 'center',
  },
  confirmar: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: '2%',
    marginTop: '3%',
    fontSize: 20,
    color: '#3F5C57',
    textAlign: 'center',
  },
});
