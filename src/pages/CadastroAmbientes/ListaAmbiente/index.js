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
import Ambiente from '../Ambiente';

export default function ListaAmbiente({navigation}) {
  const [ListaAmbientes, setListaAmbientes] = useState([]);
  const [ListaAmbientesFiltradas, setListaAmbientesFiltradas] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    async function loadListaAmbientes() {
      firebase
        .database()
        .ref('ambientes')
        .on('value', (snapshot) => {
          setListaAmbientes([]);
          console.log('snapshot', snapshot);
          snapshot.forEach((maquina) => {
            console.log('maquina' + maquina);
            let data = {
              key: maquina.key,
              sala: maquina.val().sala,
              bloco: maquina.val().bloco,
              qtdPessoas: maquina.val().qtdPessoas,
            };

            setListaAmbientes((oldArray) => [...oldArray, data]);
          });
        });
    }

    loadListaAmbientes();
  }, []);

  useEffect(() => {
    setListaAmbientesFiltradas(
      ListaAmbientes.filter((item) => {
        return item.sala.toLowerCase().includes(search.toLowerCase());
      }),
    );
  }, [search, ListaAmbientes]);

  return (
    <ScrollView style={styles.container}>
      <View>
        <Header titulo="Lista de Ambientes" />
        <Item style={styles.iconpesquisar}>
          <Input
            placeholder="   Pesquisar"
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
          {ListaAmbientesFiltradas.map((data) => (
            <Ambiente key={data.key} data={data} />
          ))}
        </View>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.textbutton}>Voltar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  iconpesquisar: {
    backgroundColor: 'white',
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 20,
    marginTop: 10,
    height: 30,
  },
  container: {
    flex: 1,
    backgroundColor: '#3F5C57',
  },
  textbutton: {
    fontSize: 23,
    marginTop: '10%',
    color: '#9ECEC5',
    textAlign: 'center',
  },
});
