import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Header from '../../../components/Header';

export default function SobreArthur() {
    return (
        <View style={styles.container}>
            <Header titulo='Sobre' />
            <View style={styles.container2}>
                <Image style={styles.img}
                    source={require('../../../assets/fresegesta.png')}
                />
                <Text style={styles.text}>Arthur Varnier Frese</Text>
                <View style={{ marginLeft: 40, marginRight: 20 }}>

                    <Text style={styles.text2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </Text>
                </View>
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
        height: 80,
        width: 80,
        borderRadius: 120,
        marginTop: 20
    },
    container2: {
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#FFF',
        flex: 1
    },
    text: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 25,
        marginTop: 10
    },
    text2: {
        marginTop: 20,
        marginLeft: 10,
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 25,
    }
})