import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import Header from '../../../../components/Header';
import Icon from 'react-native-vector-icons/AntDesign';
import firebase from '../../../../services/firebase';
import { Input, Item } from 'native-base';
import Ambiente from '../../Ambiente';

export default function ListaAmbiente() {

    const [ListaAmbientes, setListaAmbientes] = useState([]);
    const [ListaAmbientesFiltradas, setListaAmbientesFiltradas] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        async function loadListaAmbientes() {
            await firebase.database().ref('ambientes').on('value', (snapshot) => {
                setListaAmbientes([]);

                snapshot.forEach((maquina) => {
                    let data = {
                        key: maquina.key,
                        sala: maquina.val().sala,
                        bloco: maquina.val().bloco,
                        qtdPessoas: maquina.val().qtdPessoas

                    };

                    setListaAmbientes(oldArray => [...oldArray, data])
                    console.log(data)
                })
            })
        }

        loadListaAmbientes();

    }, [])


    useEffect(() => {
        setListaAmbientesFiltradas(ListaAmbientes.filter((item) => {
            return item.sala.toLowerCase().includes(search.toLowerCase())
        }))
    }, [search, ListaAmbientes])

    return (
        <ScrollView style={styles.container}>
            <View>
                <Header titulo='Lista de Ambientes' />
                <Item style={styles.iconpesquisar}>

                    <Input
                        placeholder="   Pesquisar"
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
                        ListaAmbientesFiltradas.map((data) => (<Ambiente touch key={data.key} data={data} />))
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