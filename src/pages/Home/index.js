import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../../components/Header';

export default function Home({ }) {
    return (
        <View style={styles.container}>
            <Header titulo='Bem-Vindo' />
            <Text style={{ textAlign: 'center', color: '#3F5C57', fontSize: 40, marginTop: 10 }}>GESTA</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});