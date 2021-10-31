import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export default function SignUp() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={require('../../assets/fresegesta.png')}
      />
      <Text style={styles.textadm}>Arthur Varnier Frese</Text>
      <Text style={styles.textemail}>arthur.vf@aluno.ifsc.edu.br</Text>
      <Text></Text>
      <Image
        style={styles.img}
        source={require('../../assets/caiogesta.png')}
      />
      <Text style={styles.textadm}>Caio Sulzbacher Pessoa</Text>
      <Text style={styles.textemail}>caio.p01@aluno.ifsc.edu.br</Text>
      <Text></Text>

      <Image
        style={styles.img}
        source={require('../../assets/gustavogesta.png')}
      />
      <Text style={styles.textadm}>Gustavo Rostirolla</Text>
      <Text style={styles.textemail}>gustavo.r2003@aluno.ifsc.edu.br</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3F5C57',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 5,
    flexDirection: 'column',
  },
  text: {
    color: '#9ECEC5',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'normal',
  },
  textadm: {
    color: '#FFF',
    fontWeight: 'normal',
    marginTop: '2%',
    fontSize: 20,
  },
  textemail: {
    color: '#FFF',
    fontWeight: 'normal',
    fontSize: 20,
  },
  img: {
    height: '20%',
    width: '30%',
    borderRadius: 90,
  },
  view1: {
    flexDirection: 'row',
  },
});
