import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Header from '../../../../components/Header';
import Icon from 'react-native-vector-icons/AntDesign';
import firebase from '../../../../services/firebase';
import {Input, Item} from 'native-base';
import Transporte from '../../Transporte';

export default function ListaTransporte({navigation}) {
  const [ListaTransportes, setListaTransportes] = useState([]);
  const [ListaTransportesFiltradas, setListaTransportesFiltradas] = useState(
    [],
  );
  const [search, setSearch] = useState('');

  useEffect(() => {
    async function loadListaTransportes() {
      await firebase
        .database()
        .ref('transportes')
        .on('value', (snapshot) => {
          setListaTransportes([]);

          snapshot.forEach((maquina) => {
            let data = {
              key: maquina.key,
              marca: maquina.val().marca,
              modelo: maquina.val().modelo,
              ano: maquina.val().ano,
              placa: maquina.val().placa,
              tipo: maquina.val().tipo,
              combustivel: maquina.val().combustivel,
              quilometragem: maquina.val().quilometragem,
            };

            setListaTransportes((oldArray) => [...oldArray, data]);
            console.log(data);
          });
        });
    }

    loadListaTransportes();
  }, []);

  useEffect(() => {
    setListaTransportesFiltradas(
      ListaTransportes.filter((item) => {
        return item.marca.toLowerCase().includes(search.toLowerCase());
      }),
    );
  }, [search, ListaTransportes]);

  return (
    <ScrollView style={styles.container}>
      <View>
        <Header titulo="Lista de Transportes" />
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

        <View>
          {ListaTransportesFiltradas.map((data) => (
            <Transporte touch key={data.key} data={data} />
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
    marginVertical: 15,
    fontSize: 23,
    marginTop: 50,
    color: '#9ECEC5',
    textAlign: 'center',
  },
});
