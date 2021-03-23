import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import Header from '../../../components/Header';
import Icon from 'react-native-vector-icons/AntDesign';
import firebase from '../../../services/firebase';
import { Input, Item } from 'native-base';
import Autorizacao from '../Autorizacao';


export default function ListaAutorizacoes() {

    const [ListaAutorizacoes, setListaAutorizacoes] = useState([]);
    const [ListaAutorizacoesFiltradas, setListaAutorizacoesFiltradas] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        async function loadListaAutorizacoes() {
            await firebase.database().ref('listaAutorizacoesAdm').on('value', (snapshot) => {
                setListaAutorizacoes([]);


                snapshot.forEach((maquina) => {
                    console.log(maquina)
                    let data = {
                        id: maquina.val().id,
                        data: maquina.val().data,
                        saida: maquina.val().saida,
                        chegada: maquina.val().chegada,
                        idTransporteReservado: maquina.val().idTransporteReservado,
                        placaTransporte: maquina.val().placaTransporte,
                        nomeUsuarioReserva: maquina.val().nomeUsuarioReserva,
                        idUsuarioReserva: maquina.val().idUsuarioReserva
                    };
                    setListaAutorizacoes(oldArray => [...oldArray, data])
                    console.log(data)

                })
            })
        }

        loadListaAutorizacoes();

    }, [])


    useEffect(() => {
        setListaAutorizacoesFiltradas(ListaAutorizacoes.filter((item) => {
            return item.placaTransporte.toLowerCase().includes(search.toLowerCase())
        }))
    }, [search, ListaAutorizacoes])

    return (
        <ScrollView style={styles.container}>
            <View>
                <Header titulo='Lista de Autorizações' />
                <Item style={styles.iconpesquisar}>

                    <Input
                        placeholder="   Pesquisar pela placa do transporte"
                        placeholderTextColor='black'
                        onChangeText={(text) => setSearch(text)}
                        value={search}
                    />
                    <Icon
                        style={{ marginRight: 15 }}
                        name="search1" size={18} color="black" />
                </Item>

                <View>
                    {
                        ListaAutorizacoesFiltradas.map((data) => (<Autorizacao data={data} />))
                    }
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    iconpesquisar: {
        backgroundColor: '#FECEA5',
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 20,
        marginTop: 10,
        height: 30,
    },
    container: {
        flex: 1,
        backgroundColor: '#3F5C57'
    }
})