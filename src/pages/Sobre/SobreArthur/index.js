import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Header from '../../../components/Header';

export default function SobreArthur({navigation}) {
    return (
        <View style={styles.container}>
            <Header titulo='Sobre' />
            <View style={styles.container2}>
                <Image style={styles.img}
                    source={require('../../../assets/fresegesta.png')}
                />
                <Text style={styles.text}>Arthur Varnier Frese</Text>
                <View style={{ marginLeft: '10%', marginRight: '10%' }}>

                    <Text style={styles.text2}>Aluno do Instituto Federal de Santa Catarina (IFSC), campus Xanxerê,
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
        backgroundColor: '#172220',
    },
    img: {
      height: '20%',
      width: '30%',
      marginTop: '5%',
      borderRadius: 120
    },
    container2: {
        alignItems: 'center',
        flex: 1
    },
    text: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 25,
        marginTop: '5%',
        textAlign: 'center'
    },
    text2: {
      marginTop: '10%',
      color: '#FFF',
      fontWeight: 'bold',
      fontSize: 23,
      textAlign: 'center'
    },
    textbutton: {
      fontSize: 23,
      marginTop: '6%',
      color: '#9ECEC5',
      textAlign: 'center'
  }
})
