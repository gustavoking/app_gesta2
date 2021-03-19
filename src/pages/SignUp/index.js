import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';


export default function SignUp() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Administradores do aplicativo</Text>
            <Image
                style={styles.img}
                source={require('../../assets/fresegesta.png')}
            />
            <Text style={styles.textadm}>Arthur </Text>
            <Text style={styles.textemail}>arthur.vf@aluno.ifsc.edu.br</Text>
            <Image
                style={styles.img}
                source={require('../../assets/caiogesta.png')}
            />
            <Text style={styles.textadm}>Caio </Text>
            <Text style={styles.textemail}>caio.p01@aluno.ifsc.edu.br</Text>
            <Image
                style={styles.img}
                source={require('../../assets/gustavogesta.png')}
            />
            <Text style={styles.textadm}>Gustavo </Text>
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
        fontWeight: 'bold',
        fontStyle: "italic"
    },
    textadm: {
        color: '#FECEA5',
        fontWeight: 'bold',
        marginTop: 20,
        fontSize: 14,
    },
    textemail: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16,
    },
    img: {
        height: 100,
        width: 100,
        borderRadius: 90,
    },
    view1: {
        flexDirection: 'row'
    }
})