import React, {useState, useContext, useEffect} from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import {AuthContext} from '../../../contexts/auth';
import {differenceInMinutes, format, getHours} from 'date-fns';

export default function ListaDashboard({data}) {
  const {user} = useContext(AuthContext);
  const [tempo, setTempo] = useState('');

  useEffect(() => {
    function tempoRestante() {
      const [diaItem, mesItem, anoItem] = data.data.split('/');
      const [horaItem, minutoItem] = data.inicio.split(':');
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
              <View>
                <View style={{flexDirection: 'row'}}>
                  <Image
                    style={{height: 50, width: 50}}
                    source={require('../../../assets/exclamacaovermelho.png')}
                  />
                  <Text
                    style={{
                      marginTop: 10,
                      fontSize: 20,
                      color: '#3F5C57',
                      fontWeight: 'normal',
                    }}>
                    Hoje
                  </Text>
                </View>
              </View>

              <View
                style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                <View style={{flex: 2.5}}>
                  <View style={styles.textosView}>
                    <Text style={styles.textoNegrito}>
                      <Text style={styles.textoNegrito}>Data: </Text>
                      {data.data}
                    </Text>
                  </View>
                  <View style={styles.textosView}>
                    <Text style={styles.textoNegrito}>
                      <Text style={styles.textoNegrito}>Sala: </Text>
                      {data.salaReservada}
                    </Text>
                  </View>
                  <View style={styles.textosView}>
                    <Text style={styles.textoNegrito}>
                      <Text style={styles.textoNegrito}>Bloco: </Text>
                      {data.blocoReservado}
                    </Text>
                  </View>
                  <View style={styles.textosView}>
                    <Text style={styles.textoNegrito}>
                      <Text style={styles.textoNegrito}>Inicio: </Text>
                      {data.inicio}
                    </Text>
                  </View>
                  <View style={styles.textosView}>
                    <Text style={styles.textoNegrito}>
                      <Text style={styles.textoNegrito}>Termino: </Text>
                      {data.termino}
                    </Text>
                  </View>
                </View>

                <View style={{flex: 1}}>
                  <Text style={styles.tempo}>{tempo}</Text>
                  <Text style={styles.tempo2}>min</Text>
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
    backgroundColor: '#FFF',
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  textosView: {
    flex: 1,
    marginLeft: 10,
  },
  textoNegrito: {
    color: 'black',
    fontSize: 20,
  },
  container2: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
    borderWidth: 5,
    marginHorizontal: 15,
    marginTop: 5,
    borderColor: '#9ECEC5',
  },
  tempo: {
    backgroundColor: 'black',
    fontSize: 20,
    color: '#FFF',
    textAlign: 'center',
  },
  tempo2: {
    backgroundColor: 'black',
    fontSize: 20,
    color: '#FFF',
    textAlign: 'center',
  },
});
