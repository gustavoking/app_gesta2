import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Header from '../../../components/Header';
import Icon from 'react-native-vector-icons/AntDesign';
import firebase from '../../../services/firebase';
import {Input, Item} from 'native-base';
import Autorizacao from '../Autorizacao';

export default function ListaAutorizacoes({navigation}) {
  const [ListaAutorizacoes, setListaAutorizacoes] = useState([]);
  const [ListaAutorizacoesFiltradas, setListaAutorizacoesFiltradas] = useState(
    [],
  );
  const [search, setSearch] = useState('');

  useEffect(() => {
    async function loadListaAutorizacoes() {
      await firebase
        .database()
        .ref('listaAutorizacoesAdm')
        .on('value', (snapshot) => {
          setListaAutorizacoes([]);

          snapshot.forEach((maquina) => {
            let data = {
              id: maquina.val().id,
              data: maquina.val().data,
              saida: maquina.val().saida,
              chegada: maquina.val().chegada,
              idTransporteReservado: maquina.val().idTransporteReservado,
              placaTransporte: maquina.val().placaTransporte,
              nomeUsuarioReserva: maquina.val().nomeUsuarioReserva,
              idUsuarioReserva: maquina.val().idUsuarioReserva,
              idUsuarioReserva: maquina.val().idUsuarioReserva,
              dataChegada: maquina.val().dataChegada,
              marca: maquina.val().marca,
            };
            setListaAutorizacoes((oldArray) => [...oldArray, data]);
          });
        });
    }

    loadListaAutorizacoes();
  }, []);

  useEffect(() => {
    setListaAutorizacoesFiltradas(
      ListaAutorizacoes.filter((item) => {
        return item.placaTransporte
          .toLowerCase()
          .includes(search.toLowerCase());
      }),
    );
  }, [search, ListaAutorizacoes]);

  return (
    <View style={styles.container}>
      <Header titulo="Lista de Autorizações" />

      <ScrollView>
        <View>
          <Item style={styles.iconpesquisar}>
            <Input
              placeholder="   Pesquisar pela placa do transporte"
              placeholderTextColor="black"
              onChangeText={(text) => setSearch(text)}
              value={search}
            />
            <Icon
              style={{marginRight: 15}}
              name="search1"
              size={18}
              color="black"
            />
          </Item>
          <Text></Text>
          <View>
            {ListaAutorizacoesFiltradas.map((data) => (
              <Autorizacao data={data} />
            ))}
          </View>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.textbutton}>Voltar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  iconpesquisar: {
    backgroundColor: 'white',
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 20,
    marginTop: 10,
    height: 50,
  },
  container: {
    flex: 1,
    backgroundColor: '#3F5C57',
  },
  textbutton: {
    fontSize: 20,
    marginTop: '6%',
    color: '#9ECEC5',
    textAlign: 'center',
  },
});
