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

export default function ReservaAmbiente({route}) {
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
  const [newDate, setNewDate] = useState(new Date());
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
            };
            setListaReservasGerais((oldArray) => [...oldArray, data]);
            console.log(data);
          });
        });
    }

    loadListaReservasGerais();
  }, []);

  async function funcaoReservar() {
    let reserva = await firebase.database().ref('reservasGeraisAmbiente');
    let id = reserva.push().key;

    let dataAgora = new Date();

    if (chegada > saida && dataAgora < saida && dataAgora < chegada) {
      reserva.child(id).set({
        id: id,
        data: format(newDate, 'dd/MM/yyyy'),
        inicio: format(saida, 'HH:mm'),
        termino: format(chegada, 'HH:mm'),
        idUsuarioReserva: user.uid,
        nomeUsuarioReserva: user.nome,
        salaReservada: salaReservada,
        blocoReservado: blocoReservado,
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
    } else {
      alert('Por favor insira um horario de chegada maior do que de saida');
    }
  }

  const onChange = (date) => {
    setNewDate(date);
    console.log(date);
    setShow(false);
  };
  const onChangeSaida = (horario) => {
    setSaida(horario);
    console.log(horario);
    setShowSaida(false);
  };
  const onChangeChegada = (horario) => {
    setChegada(horario);
    console.log(horario);
    setShowChegada(false);
  };

  function abrirCalendario() {
    setShow(true);
  }

  function fecharCalendario() {
    setShow(false);
  }
  function abrirSaida() {
    setShowSaida(true);
  }

  function fecharSaida() {
    setShowSaida(false);
  }
  function abrirChegada() {
    setShowChegada(true);
  }

  function fecharChegada() {
    setShowChegada(false);
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <Header titulo="Reservar" />

        <TouchableOpacity style={styles.btn} onPress={abrirCalendario}>
          <Text style={styles.btntext}>Abrir Calendário Para Reservar</Text>
        </TouchableOpacity>
        <Text style={styles.txt2}>
          {titleCase(format(newDate, 'eeee, dd MMMM, yyyy ', {locale: ptBR}))}
        </Text>
        <Text style={styles.txt}>Preencha a hora de Inicio e Término</Text>

        <View style={styles.container3}>
          <Text style={styles.btntext2}>Hora Inicio</Text>

          <Text style={styles.btntext2}>Hora Término</Text>
        </View>
        <View style={styles.container2}>
          <TouchableOpacity onPress={abrirSaida}>
            <Text style={styles.text}>{format(saida, 'HH:mm')}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={abrirChegada}>
            <Text style={styles.text}>{format(chegada, 'HH:mm')}</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.btn} onPress={() => funcaoReservar()}>
          <Text style={styles.btntext}>CONFIRMAR RESERVA</Text>
        </TouchableOpacity>

        {show && (
          <DatePicker
            onClose={fecharCalendario}
            date={newDate}
            setDateNow={setNewDate}
            mode="datetime"
            onChange={onChange}
          />
        )}
        {showSaida && (
          <DatePicker
            onClose={fecharSaida}
            date={saida}
            setDateNow={setSaida}
            mode="time"
            onChange={onChangeSaida}
          />
        )}
        {showChegada && (
          <DatePicker
            onClose={fecharChegada}
            date={chegada}
            setDateNow={setChegada}
            mode="time"
            onChange={onChangeChegada}
          />
        )}

        <Text />
        <Text style={styles.reservaisgerais}>RESERVAS DOS AMBIENTES</Text>
        {ListaReservasGerais.map((data) => (
          <ModeloListaReserva data={data} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#172220',
  },
  btn: {
    marginTop: 15,
    borderWidth: 1,
    padding: 10,
    backgroundColor: '#FECEA5',
    marginLeft: 50,
    marginRight: 50,
    borderRadius: 50,
  },
  btntext: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#3F5C57',
  },
  btntext2: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#FECEA5',
    fontSize: 18,
    marginTop: 10,
  },
  txt: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
    textAlign: 'center',
    marginTop: 40,
  },
  txt2: {
    color: '#9ECEC5',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
    fontWeight: 'bold',
  },
  container2: {
    flexDirection: 'row',
    marginTop: 20,
    marginLeft: 60,
    marginRight: 60,
    justifyContent: 'space-between',
  },
  container3: {
    flexDirection: 'row',
    marginTop: 10,
    marginRight: 30,
    marginLeft: 40,
    justifyContent: 'space-between',
  },
  text: {
    color: '#FFF',
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  btn2: {
    marginTop: 15,
    borderWidth: 1,
    padding: 10,
    backgroundColor: '#FECEA5',
    borderRadius: 30,
  },
  reservaisgerais: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#172220',
    backgroundColor: '#FECEA5',
    marginLeft: 20,
    marginTop: 10,
    marginRight: 20,
    textAlign: 'center',
    borderWidth: 1,
    borderRadius: 20,
  },
});
