import React, {useContext, useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Header from '../../../../components/Header';
import {AuthContext} from '../../../../contexts/auth';
import firebase from '../../../../services/firebase';
import ModeloListaReservaPessoal from '../../ModeloListaReservaPessoal';

export default function Cancelar({navigation}) {
  const [listaUserReserva, setListaUserReserva] = useState([]);

  const {user} = useContext(AuthContext);

  useEffect(() => {
    async function userReserva() {
      await firebase
        .database()
        .ref('reservasGeraisAmbiente')
        .on('value', (snapshot) => {
          setListaUserReserva([]);

          snapshot.forEach((maquina) => {
            if (maquina.val().idUsuarioReserva === user.uid) {
              let data = {
                data: maquina.val().data,
                inicio: maquina.val().inicio,
                termino: maquina.val().termino,
                salaReservada: maquina.val().salaReservada,
                nomeUsuarioReserva: maquina.val().nomeUsuarioReserva,
                blocoReservado: maquina.val().blocoReservado,
                id: maquina.val().id,
                dataChegada: maquina.val().dataChegada,
              };
              setListaUserReserva((oldArray) => [...oldArray, data]);
            }
          });
        });
    }
    userReserva();
  }, []);

  return (
    <View style={styles.container}>
      <Header titulo="Cancelar" />

      <ScrollView>
        <View>
          {listaUserReserva.map((data) => (
            <ModeloListaReservaPessoal data={data} />
          ))}
        </View>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.textbutton}>Voltar</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3F5C57',
    flex: 1,
  },
  reservaisgerais: {
    fontSize: 20,
    fontWeight: 'normal',
    color: '#172220',
    backgroundColor: '#FECEA5',
    marginLeft: 10,
    marginTop: 10,
    marginRight: 20,
    textAlign: 'center',
    borderWidth: 1,
    borderRadius: 20,
  },
  textbutton: {
    marginVertical: 15,
    fontSize: 20,
    marginTop: 50,
    color: '#9ECEC5',
    textAlign: 'center',
  },
});
