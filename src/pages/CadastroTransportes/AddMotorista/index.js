import React, { useState } from 'react';
import { TouchableOpacity, Keyboard, Text, StyleSheet, TextInput, Image, ScrollView } from 'react-native';
import Header from '../../../components/Header';
import firebase from '../../../services/firebase';

export default function AddTransporte() {

    const [nome, setNome] = useState('');
    const [numero, setNumero] = useState('');


    async function addCar() {
        if (nome !== '' && numero !== '') {

            let motorista = await firebase.database().ref('motoristas');
            let id = motorista.push().key

            motorista.child(id).set({
                nome: nome,
                numero: numero
            });

            Keyboard.dismiss();
            setNome('');
            setNumero('');
        } else {
            alert('PREENCHA TODOS OS CAMPOS!!')
        }
    }

    return (
        <ScrollView style={styles.container}>
            <Header titulo='Adicionar Motorista' />

            <Image style={styles.motoristaimg}
                source={require('../../../assets/motoristaimg.png')}
            />
            <Text style={styles.text}>Nome</Text>
            <TextInput style={styles.txtinput}
                placeholder="  PREENCHER"
                placeholderTextColor="#9ECEC5"
                color='#9ECEC5'
                onChangeText={(text) => setNome(text)}
                autoCorrect={false}
                value={nome}
                autoCapitalize="none"
            >
            </TextInput>
            <Text style={styles.text}>Numero</Text>
            <TextInput style={styles.txtinput}
                placeholder="  PREENCHER"
                placeholderTextColor="#9ECEC5"
                color='#9ECEC5'
                onChangeText={(text) => setNumero(text)}
                autoCorrect={false}
                value={numero}
                autoCapitalize="none"
            >
            </TextInput>
            <TouchableOpacity style={styles.btn} onPress={addCar}>
                <Text style={styles.btntext}>CONTINUAR</Text>
            </TouchableOpacity>
        </ScrollView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#172220',
    },
    txtinput: {
        borderWidth: 1,
        borderColor: '#9ECEC5',
        marginLeft: 50,
        marginRight: 50,
        height: 40,
        marginTop: 5
    },
    motoristaimg: {
        width: 250,
        height: 250,
        resizeMode: "stretch",
        borderColor: 'black',
        borderWidth: 1,
        borderColor: '#FECEA5',
        marginLeft: 50,
        marginTop: 22
    },
    text: {
        marginTop: 10,
        color: '#FECEA5',
        fontSize: 16,
        textAlign: 'center'
    },
    btn: {
        marginTop: 25,
        borderWidth: 1,
        padding: 10,
        backgroundColor: '#FECEA5',
    },
    btntext: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#3F5C57',
    }
})