import React, { useState, useContext, useEffect } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { AuthContext } from '../../../contexts/auth';
import { differenceInMinutes, format, parseISO, isBefore } from 'date-fns';

export default function ListaDashboard({ data }) {

    const { user } = useContext(AuthContext);
    const [tempo, setTempo] = useState('');

    // useEffect(() => {
    //     function tempoRestante() {
    //         const [diaItem, mesItem, anoItem] = data.dataReserva.split('/');
    //         const dateItem = new Date(`${anoItem}/${mesItem}/${diaItem}`);

    //         const formatDiaHoje = format(new Date(), 'dd/MM/yyyy');
    //         const [diaHoje, mesHoje, anoHoje] = formatDiaHoje.split('/');
    //         const dateHoje = new Date(`${anoHoje}/${mesHoje}/${diaHoje}`);

    //         const tempoRestante = isBefore(dateItem, dateHoje)
    //         setTempo(tempoRestante)
    //         console.log(tempoRestante)

    //     }

    //     tempoRestante();

    // }, [tempo, setTempo])

    return (
        <View>
            {user.tipo === 'administrador' || user.tipo === 'servidor' ? (
                <View style={styles.container}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image
                            style={{ height: 50, width: 50 }}
                            source={require('../../../assets/exclamacaovermelho.png')}
                        />
                        <Text style={{ marginTop: 10, fontSize: 18, color: '#3F5C57', fontWeight: 'bold' }}>Hoje</Text>
                    </View>
                    <View style={styles.textosView}>
                        <Text style={styles.textoNegrito}>
                            <Text style={styles.textoNegrito}>
                                Placa do Transporte:{' '}
                            </Text>
                            {data.placaTransporteReserva}
                        </Text>
                    </View>
                    <View style={styles.textosView}>
                        <Text style={styles.textoNegrito}>
                            <Text style={styles.textoNegrito}>
                                Data:{' '}
                            </Text>
                            {data.dataReserva}
                        </Text>
                    </View>
                    <View style={styles.textosView}>
                        <Text style={styles.textoNegrito}>
                            <Text style={styles.textoNegrito}>
                                Saida:{' '}
                            </Text>
                            {data.saidaReserva}
                        </Text>
                    </View>
                    <View style={styles.textosView}>
                        <Text style={styles.textoNegrito}>
                            <Text style={styles.textoNegrito}>
                                Chegada:{' '}
                            </Text>
                            {data.chegadaReserva}
                        </Text>
                        <Text style={styles.tempo}>Tempo Restante: {tempo} Min</Text>
                    </View>

                </View>
            ) : (
                    <View></View>
                )
            }
        </View >
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20
    },
    textosView: {
        flex: 1,
        marginLeft: 10,
    },
    textoNegrito: {
        color: 'black',
        fontSize: 15,

    },
    container2: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
        marginBottom: 10,
        padding: 10,
        borderRadius: 5,
        borderWidth: 5,
        marginHorizontal: 15,
        marginTop: 5,
        borderColor: '#9ECEC5'
    },
    tempo: {
        backgroundColor: 'black',
        color: '#FFF',
        marginRight: 160,
    }
});
