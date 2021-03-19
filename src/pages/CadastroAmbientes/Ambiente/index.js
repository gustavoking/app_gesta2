import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'

export default function Ambiente({ data, touch = false }) {

    const navigation = useNavigation();

    return (
        <View>
            {!touch ? (
                <View style={styles.container}>
                    <View style={styles.imagemView}>
                        <Image
                            source={require('../../../assets/salaimg.png')}
                            style={styles.imagem}
                        />
                    </View>
                    <View style={styles.textosView}>
                        <Text style={{ color: '#FFF' }}>
                            <Text style={styles.textoNegrito}>
                                Sala:{' '}
                            </Text>
                            {data.sala}
                        </Text>
                        <Text style={{ color: '#FFF' }}>
                            <Text style={styles.textoNegrito}>
                                Bloco:{' '}
                            </Text>
                            {data.bloco}
                        </Text>
                        <Text style={{ color: '#FFF' }}>
                            <Text style={styles.textoNegrito}>
                                Máximo de Alunos:{' '}
                            </Text>
                            {data.qtdPessoas}
                        </Text>
                    </View>
                </View>
            ) : (
                    <View style={styles.container}>
                        <TouchableOpacity onPress={() => navigation.navigate('ReservaAmbiente')}>
                            <View style={styles.imagemView}>
                                <Image
                                    source={require('../../../assets/salaimg.png')}
                                    style={styles.imagem}
                                />
                            </View>
                            <View style={styles.textosView}>
                                <Text style={{ color: '#FFF' }}>
                                    <Text style={styles.textoNegrito}>
                                        Sala:{' '}
                                    </Text>
                                    {data.sala}
                                </Text>
                                <Text style={{ color: '#FFF' }}>
                                    <Text style={styles.textoNegrito}>
                                        Bloco:{' '}
                                    </Text>
                                    {data.bloco}
                                </Text>
                                <Text style={{ color: '#FFF' }}>
                                    <Text style={styles.textoNegrito}>
                                        Máximo de Alunos:{' '}
                                    </Text>
                                    {data.qtdPessoas}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                )}

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#172220',
        alignItems: 'center',
        marginBottom: 10,
        padding: 10,
        borderRadius: 5,
        borderWidth: 2,
        marginHorizontal: 15,
        marginTop: 5
    },
    textosView: {
        flex: 1,
        marginLeft: 10,
    },
    textoNegrito: {
        color: '#9ECEC5',
        fontWeight: 'bold',
    },
    imagem: {
        backgroundColor: 'white',
        width: 70,
        height: 70,
        resizeMode: "stretch"
    }
});
