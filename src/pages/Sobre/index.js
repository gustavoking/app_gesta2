import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import Header from '../../components/Header';
import { useNavigation } from '@react-navigation/native';

export default function Sobre() {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Header titulo='Sobre' />
            <TouchableOpacity onPress={() => navigation.navigate('SobreAplicativo')}>
                <View style={styles.container2}>
                    <Image style={styles.img}
                        source={require('../../assets/icon_gesta.png')}
                    />
                    <Text style={styles.text}>O aplicativo</Text>
                    <Image style={styles.imgseta}
                        source={require('../../assets/setasobre.png')}
                    />
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('SobreArthur')}>
                <View style={styles.container2}>
                    <Image
                        style={styles.img}
                        source={require('../../assets/fresegesta.png')}
                    />
                    <Text style={styles.text}>Arthur Varnier Frese</Text>
                    <Image style={styles.imgseta}
                        source={require('../../assets/setasobre.png')}
                    />
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('SobreCaio')}>
                <View style={styles.container2}>
                    <Image
                        style={styles.img}
                        source={require('../../assets/caiogesta.png')}
                    />
                    <Text style={styles.text}>Caio Sulzbacher Pessoa</Text>
                    <Image style={styles.imgseta}
                        source={require('../../assets/setasobre.png')}
                    />
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('SobreGustavo')}>
                <View style={styles.container2}>
                    <Image
                        style={styles.img}
                        source={require('../../assets/gustavogesta.png')}
                    />
                    <Text style={styles.text}>Gustavo Rostirolla</Text>
                    <Image style={styles.imgseta}
                        source={require('../../assets/setasobre.png')}
                    />

                </View>
            </TouchableOpacity>

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
    container2: {
        marginTop: 20,
        backgroundColor: '#172220',
        flexDirection: 'row',
        padding: '10%',
        alignItems: 'center',
        justifyContent: 'space-between'

    },
    text: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center'
    },
    img: {
        height: '250%',
        width: '20%',
        borderRadius: 90,
        marginRight: '5%'
    },
    btn: {
        marginTop: '5%',
        padding: '3%',
        backgroundColor: '#FECEA5',
    },
    btntext: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#3F5C57',
        fontSize: 18,
    },
    imgseta: {
        height: '140%',
        width: '10%'
    },
    textbutton: {
      fontSize: 23,
      marginTop: '6%',
      color: '#9ECEC5',
      textAlign: 'center'
  }
})
