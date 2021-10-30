import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Header from '../../components/Header';
import {useNavigation} from '@react-navigation/native';

export default function Sobre() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Header titulo="Sobre" />
      <View style={styles.botaolinha}></View>

      <TouchableOpacity onPress={() => navigation.navigate('SobreAplicativo')}>
        <View style={styles.container2}>
          <Image
            style={styles.img}
            source={require('../../assets/icon_gesta.png')}
          />
          <Text style={styles.text}>O aplicativo</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.botaolinha}></View>

      <TouchableOpacity onPress={() => navigation.navigate('SobreArthur')}>
        <View style={styles.container2}>
          <Image
            style={styles.img}
            source={require('../../assets/fresegesta.png')}
          />
          <Text style={styles.text}>Arthur Varnier Frese</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.botaolinha}></View>

      <TouchableOpacity onPress={() => navigation.navigate('SobreCaio')}>
        <View style={styles.container2}>
          <Image
            style={styles.img}
            source={require('../../assets/caiogesta.png')}
          />
          <Text style={styles.text}>Caio Sulzbacher Pessoa</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.botaolinha}></View>

      <TouchableOpacity onPress={() => navigation.navigate('SobreGustavo')}>
        <View style={styles.container2}>
          <Image
            style={styles.img}
            source={require('../../assets/gustavogesta.png')}
          />
          <Text style={styles.text}>Gustavo Rostirolla</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.botaolinha}></View>

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.textbutton}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3F5C57',
  },
  botaolinha: {
    marginHorizontal: 53,
    marginTop: 5,
    borderTopColor: '#9ECEC5',
    borderWidth: 1,
    borderRightColor: '#3F5C57',
    borderLeftColor: '#3F5C57',
    borderBottomColor: '#3F5C57',
    borderRadius: 1,
  },
  container2: {
    flexDirection: 'row',
    padding: '10%',
    alignItems: 'center',
    marginHorizontal: '5%',
  },
  text: {
    color: '#9ECEC5',
    fontSize: 20,
    textAlign: 'center',
  },
  img: {
    height: '250%',
    width: '25%',
    borderRadius: 90,
    marginRight: '5%',
  },

  textbutton: {
    fontSize: 20,
    marginTop: '6%',
    color: '#9ECEC5',
    textAlign: 'center',
  },
});
