import React, {useEffect, useState, useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  ToastAndroid,
} from 'react-native';
import Header from '../../../../components/Header';
import DatePicker from '../../../../components/DatePicker';
import {format} from 'date-fns';
import firebase from '../../../../services/firebase';
import {AuthContext} from '../../../../contexts/auth';
import ModeloListaReserva from '../../ModeloListaReserva';
import ptBR from 'date-fns/locale/pt-BR';

export default function ReservaAmbiente({route, navigation}) {
  // funcao para colocar tudo em maiusculo
  function titleCase(str) {
    var splitStr = str.toLowerCase().split(' ');

    for (var i = 0; i < splitStr.length; i++) {
      splitStr[i] =
        splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }

    return splitStr.join(' ');
  }

  const [ListaReservasGerais, setListaReservasGerais] = useState([]);

  const [show, setShow] = useState(false);
  const [showSaida, setShowSaida] = useState(false);
  const [showChegada, setShowChegada] = useState(false);
  const [showDataChegada, setShowDataChegada] = useState(false);
  const [newDate, setNewDate] = useState(new Date());
  const [newDateChegada, setNewDateChegada] = useState(new Date());
  const [saida, setSaida] = useState(new Date());
  const [chegada, setChegada] = useState(new Date());

  const {
    user,
    salaReservada,
    blocoReservado,
    setSalaReservada,
    setBlocoReservado,
  } = useContext(AuthContext);

  const {salaReservadaA, blocoReservadoA} = route.params;

  setSalaReservada(salaReservadaA);
  setBlocoReservado(blocoReservadoA);

  useEffect(() => {
    async function loadListaReservasGerais() {
      await firebase
        .database()
        .ref('reservasGeraisAmbiente')
        .on('value', (snapshot) => {
          setListaReservasGerais([]);

          snapshot.forEach((maquina) => {
            let data = {
              data: maquina.val().data,
              inicio: maquina.val().inicio,
              termino: maquina.val().termino,
              salaReservada: maquina.val().salaReservada,
              nomeUsuarioReserva: maquina.val().nomeUsuarioReserva,
              blocoReservado: maquina.val().blocoReservado,
              id: maquina.val().id,
              reservaEstado: maquina.val().reservaEstado,
              dataChegada: maquina.val().dataChegada,
            };
            setListaReservasGerais((oldArray) => [...oldArray, data]);
          });
        });
    }

    loadListaReservasGerais();
  }, []);

  async function funcaoReservar() {
    let reserva = await firebase.database().ref('reservasGeraisAmbiente');
    let id = reserva.push().key;

    let dataAgora = new Date();

    // if (chegada > saida && dataAgora < saida && dataAgora < chegada) {
    reserva.child(id).set({
      id: id,
      data: format(newDate, 'dd/MM/yyyy'),
      dataChegada: format(newDateChegada, 'dd/MM/yyyy'),
      inicio: format(saida, 'HH:mm'),
      termino: format(chegada, 'HH:mm'),
      idUsuarioReserva: user.uid,
      nomeUsuarioReserva: user.nome,
      salaReservada: salaReservada,
      blocoReservado: blocoReservado,
      reservaEstado: 'reservado',
    });

    let reservaHistorico = await firebase
      .database()
      .ref('historicoReservasAmbiente');
    let idHist = reservaHistorico.push().key;

    reservaHistorico.child(idHist).set({
      id: idHist,
      data: format(newDate, 'dd/MM/yyyy'),
      inicio: format(saida, 'HH:mm'),
      termino: format(chegada, 'HH:mm'),
      idUsuarioReserva: user.uid,
      nomeUsuarioReserva: user.nome,
      salaReservada: salaReservada,
      blocoReservado: blocoReservado,
    });
    ToastAndroid.show('Reserva de Ambiente Realizada', ToastAndroid.LONG);
    // } else {
    //   alert('Por favor insira um horário de chegada maior do que de saida');
    // }
  }

  const onChange = (date) => {
    setNewDate(date);
    setShow(false);
  };
  const onChangeSaida = (horario) => {
    setSaida(horario);
    setShowSaida(false);
  };

  const onChangeDataChegada = (date) => {
    setNewDateChegada(date);
    setShowDataChegada(false);
  };

  const onChangeChegada = (horario) => {
    setChegada(horario);
    setShowChegada(false);
  };

  function abrirCalendario() {
    setShow(true);
  }

  function abrirSaida() {
    setShowSaida(true);
  }

  function abrirChegada() {
    setShowChegada(true);
  }

  function abrirCalendarioChegada() {
    setShowDataChegada(true);
  }
  function fecharCalendarioChegada() {
    setShowDataChegada(false);
  }

  return (
    <View style={styles.container}>
      <Header titulo="Reservar" />

      <TouchableOpacity style={styles.btn3} onPress={abrirCalendario}>
        <Text style={styles.txt2}>
          {titleCase(format(newDate, 'eeee, dd MMMM, yyyy ', {locale: ptBR}))}
        </Text>
      </TouchableOpacity>

      <Text style={styles.btntext2}>Hora Início</Text>

      <TouchableOpacity onPress={abrirSaida}>
        <Text style={styles.text}>{format(saida, 'HH:mm')}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn3} onPress={abrirCalendarioChegada}>
        <Text style={styles.txt2}>
          {titleCase(
            format(newDateChegada, 'eeee, dd MMMM, yyyy ', {locale: ptBR}),
          )}
        </Text>
      </TouchableOpacity>
      <Text style={styles.btntext2}>Hora Término</Text>
      <TouchableOpacity onPress={abrirChegada}>
        <Text style={styles.text}>{format(chegada, 'HH:mm')}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btn3} onPress={() => funcaoReservar()}>
        <Text style={styles.txt2}>Confirmar Reserva</Text>
      </TouchableOpacity>

      {show ? (
        <DatePicker
          onClose={() => setShow(false)}
          date={newDate}
          setDateNow={setNewDate}
          mode="datetime"
          onChange={onChange}
        />
      ) : (
        <View></View>
      )}
      {showSaida ? (
        <DatePicker
          onClose={() => setShowSaida(false)}
          date={saida}
          setDateNow={setSaida}
          mode="time"
          onChange={onChangeSaida}
        />
      ) : (
        <View></View>
      )}
      {showDataChegada && (
        <DatePicker
          onClose={fecharCalendarioChegada}
          date={newDateChegada}
          setDateNow={setNewDateChegada}
          mode="datetime"
          onChange={onChangeDataChegada}
        />
      )}
      {showChegada ? (
        <DatePicker
          onClose={() => setShowChegada(false)}
          date={chegada}
          setDateNow={setChegada}
          mode="time"
          onChange={onChangeChegada}
        />
      ) : (
        <View></View>
      )}

      <Text />
      <ScrollView>
        {ListaReservasGerais.map((data) => (
          <ModeloListaReserva data={data} />
        ))}
        <View style={styles.linha}></View>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.textbutton}>Voltar</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3F5C57',
  },
  linha: {
    borderTopColor: '#9ECEC5',
    borderWidth: 1,
    borderRightColor: '#3F5C57',
    borderLeftColor: '#3F5C57',
    borderBottomColor: '#3F5C57',
    borderRadius: 1,
    marginHorizontal: 53,
  },
  btntext2: {
    textAlign: 'center',
    fontWeight: 'normal',
    color: '#9ECEC5',
    fontSize: 20,
    marginTop: 10,
  },
  txt2: {
    color: '#9ECEC5',
    fontSize: 20,
    textAlign: 'center',
    marginTop: '10%',
    fontWeight: 'normal',
  },
  text: {
    color: '#FFF',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'normal',
  },
  textbutton: {
    marginVertical: 15,
    fontSize: 20,
    marginTop: '10%',
    color: '#9ECEC5',
    textAlign: 'center',
  },
  txt2: {
    color: '#3F5C57',
    fontSize: 20,
    textAlign: 'center',
    marginTop: '3%',
  },
  btn3: {
    backgroundColor: 'white',
    borderRadius: 90,
    marginTop: '5%',
    marginHorizontal: '10%',
    borderWidth: 1,
    height: '7%',
  },
});
