import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import Header from '../../../components/Header';
import Icon from 'react-native-vector-icons/AntDesign';
import firebase from '../../../services/firebase';
import { Input, Item } from 'native-base';
import Motorista from '../Motorista';

export default function ListaMotorista() {

    const [ListaMotoristas, setListaMotoristas] = useState([]);
    const [ListaMotoristasFiltradas, setListaMotoristasFiltradas] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        async function loadListaMotoristas() {
            await firebase.database().ref('motoristas').on('value', (snapshot) => {
                setListaMotoristas([]);

                snapshot.forEach((maquina) => {
                    let data = {
                        key: maquina.key,
                        nome: maquina.val().nome,
                        numero: maquina.val().numero

                    };

                    setListaMotoristas(oldArray => [...oldArray, data])
                    console.log(data)
                })
            })
        }

        loadListaMotoristas();

    }, [])


    useEffect(() => {
        setListaMotoristasFiltradas(ListaMotoristas.filter((item) => {
            return item.nome.toLowerCase().includes(search.toLowerCase())
        }))
    }, [search, ListaMotoristas])

    return (
        <ScrollView style={styles.container}>
            <View>
                <Header titulo='Lista de Motoristas' />
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
                        ListaMotoristasFiltradas.map((data) => (<Motorista key={data.key} data={data} />))
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