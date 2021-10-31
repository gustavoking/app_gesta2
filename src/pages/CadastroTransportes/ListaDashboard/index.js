import React, {useState, useContext, useEffect} from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import {AuthContext} from '../../../contexts/auth';
import {differenceInMinutes, format, getHours} from 'date-fns';

export default function ListaDashboard({data}) {
  const {user} = useContext(AuthContext);
  const [tempo, setTempo] = useState('');

  useEffect(() => {
    function tempoRestante() {
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

      const difference = dateItem.getTime() - dataMenos3.getTime(); // This will give difference in milliseconds
      const resultInMinutes = Math.round(difference / 60000);

      setTempo(resultInMinutes);
    }

    tempoRestante();
  }, []);

  return (
    <>
      {tempo > 0 && (
        <View style={styles.container}>
          <View>
            <View>
              <View
                style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                <View style={{flex: 2.5}}>
                  <View style={styles.textosView}>
                    <Text style={styles.textoNegrito}>
                      <Text style={styles.textoNegrito}>Placa: </Text>
                      {data.placaTransporteReserva}
                    </Text>
                  </View>
                  <View style={styles.textosView}>
                    <Text style={styles.textoNegrito}>
                      <Text style={styles.textoNegrito}>Data Saída: </Text>
                      {data.dataReserva}
                    </Text>
                  </View>
                  <View style={styles.textosView}>
                    <Text style={styles.textoNegrito}>
                      <Text style={styles.textoNegrito}>Hora Saída: </Text>
                      {data.saidaReserva}
                    </Text>
                  </View>
                  <View style={styles.textosView}>
                    <Text style={styles.textoNegrito}>
                      <Text style={styles.textoNegrito}>Data Chegada: </Text>
                      {data.dataChegada}
                    </Text>
                  </View>
                  <View style={styles.textosView}>
                    <Text style={styles.textoNegrito}>
                      <Text style={styles.textoNegrito}>Hora Chegada: </Text>
                      {data.chegadaReserva}
                    </Text>
                  </View>
                  <View style={styles.textosView}>
                    <Text style={styles.tempo}>
                      Tempo Restante: {tempo} min
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    borderRadius: 1,
    borderWidth: 1,
    marginHorizontal: 58,
    marginTop: '1%',
    borderTopColor: '#9ECEC5',
    borderBottomColor: '#3F5C57',
    borderRightColor: '#3F5C57',
    borderLeftColor: '#3F5C57',
  },
  textosView: {
    flex: 1,
    marginLeft: '2%',
  },
  textoNegrito: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
  tempo: {
    fontSize: 20,
    color: '#FFF',
    textAlign: 'center',
  },
});
