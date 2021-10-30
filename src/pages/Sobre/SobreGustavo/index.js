import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Header from '../../../components/Header';

export default function SobreGustavo({navigation}) {
  return (
    <View style={styles.container}>
      <Header titulo="Sobre" />
      <View style={styles.container2}>
        <Image
          style={styles.img}
          source={require('../../../assets/gustavogesta.png')}
        />
        <Text style={styles.text}>Gustavo Rostirolla</Text>
        <View style={{marginLeft: '10%', marginRight: '10%'}}>
          <Text style={styles.text2}>
            Aluno do Instituto Federal de Santa Catarina (IFSC), campus Xanxerê,
            do curso técnico integrado em informática, de 2019 a 2021.
          </Text>
        </View>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.textbutton}>Voltar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3F5C57',
  },
  img: {
    height: '20%',
    width: '30%',
    marginTop: '5%',
    borderRadius: 120,
  },
  container2: {
    alignItems: 'center',
    flex: 1,
  },
  text: {
    color: '#FFF',
    fontSize: 20,
    marginTop: '5%',
    textAlign: 'center',
  },
  text2: {
    marginTop: '10%',
    color: '#FFF',
    fontSize: 20,
    textAlign: 'center',
  },
  textbutton: {
    fontSize: 20,
    marginTop: '6%',
    color: '#9ECEC5',
    textAlign: 'center',
  },
});
