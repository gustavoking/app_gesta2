import React, {useState, useContext, useEffect} from 'react';
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
import {AuthContext} from '../../../../contexts/auth';
import firebase from '../../../../services/firebase';
import ModeloListaReserva from '../ModeloListaReserva';
import ptBR from 'date-fns/locale/pt-BR';

export default function ReservaTransporte({route, navigation}) {
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
    idTransporteReservado,
    setIdTransporteReservado,
    user,
    placaTransporte,
    setPlacaTransporte,
  } = useContext(AuthContext);

  const {idTrans, placaTrans} = route.params;

  setIdTransporteReservado(idTrans);
  setPlacaTransporte(placaTrans);

  useEffect(() => {
    async function loadListaReservasGerais() {
      await firebase
        .database()
        .ref('reservasGeraisTransporte')
        .on('value', (snapshot) => {
          setListaReservasGerais([]);

          snapshot.forEach((maquina) => {
            let data = {
              dataReserva: maquina.val().dataReserva,
              saidaReserva: maquina.val().saidaReserva,
              chegadaReserva: maquina.val().chegadaReserva,
              placaTransporteReserva: maquina.val().placaTransporteReserva,
              userReserva: maquina.val().userReserva,
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
    let reserva = await firebase.database().ref('listaAutorizacoesAdm');
    let id = reserva.push().key;

    let dataAgora = new Date();

    // if (chegada > saida && dataAgora < saida && dataAgora < chegada) {
    // if(newDate === newDateChegada){
    reserva.child(id).set({
      id: id,
      data: format(newDate, 'dd/MM/yyyy'),
      dataChegada: format(newDateChegada, 'dd/MM/yyyy'),
      saida: format(saida, 'HH:mm'),
      chegada: format(chegada, 'HH:mm'),
      idUsuarioReserva: user.uid,
      idTransporteReservado: idTransporteReservado,
      placaTransporte: placaTransporte,
      nomeUsuarioReserva: user.nome,
      reservaEstado: 'aguardando autorizacao',
    });
    ToastAndroid.show(
      'Reserva de Transporte Realizada, Aguarde Confirmação do Administrador',
      ToastAndroid.LONG,
    );
    // } else {
    //   alert('Por favor insira um horário de chegada maior do que de saida');
    // }
  }

  const onChange = (date) => {
    setNewDate(date);
    console.log(date);
    setShow(false);
  };
  const onChangeDataChegada = (date) => {
    setNewDateChegada(date);
    console.log(date);
    setShowDataChegada(false);
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

  function abrirCalendarioChegada() {
    setShowDataChegada(true);
  }
  function fecharCalendarioChegada() {
    setShowDataChegada(false);
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
      <Header titulo="Reservar" />

      <TouchableOpacity style={styles.btn3} onPress={abrirCalendario}>
        <Text style={styles.txt2}>
          {titleCase(format(newDate, 'eeee, dd MMMM, yyyy ', {locale: ptBR}))}
        </Text>
      </TouchableOpacity>

      <Text style={styles.btntext2}>Hora Saída</Text>

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
      <Text style={styles.btntext2}>Hora Chegada</Text>

      <TouchableOpacity onPress={abrirChegada}>
        <Text style={styles.text}>{format(chegada, 'HH:mm')}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btn3} onPress={() => funcaoReservar()}>
        <Text style={styles.txt2}>Confirmar Reserva</Text>
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
      {showDataChegada && (
        <DatePicker
          onClose={fecharCalendarioChegada}
          date={newDateChegada}
          setDateNow={setNewDateChegada}
          mode="datetime"
          onChange={onChangeDataChegada}
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
      <ScrollView>
        <View>
          {ListaReservasGerais.map((data) => (
            <ModeloListaReserva data={data} />
          ))}
        </View>
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
  btn: {
    marginTop: 15,
    borderWidth: 1,
    height: '7%',
    backgroundColor: 'white',
    borderRadius: 50,
  },
  btntext: {
    textAlign: 'center',
    color: '#3F5C57',
    fontSize: 20,
  },
  btntext2: {
    textAlign: 'center',
    color: '#9ECEC5',
    fontSize: 20,
    marginTop: '5%',
  },
  txt: {
    fontSize: 20,
    color: '#9ECEC5',
    textAlign: 'center',
    marginTop: '3%',
  },
  txt2: {
    color: '#3F5C57',
    fontSize: 20,
    textAlign: 'center',
    marginTop: '3%',
  },
  container2: {
    flexDirection: 'row',
    marginTop: 20,
    marginHorizontal: 60,
    justifyContent: 'space-between',
  },
  container3: {
    flexDirection: 'row',
    marginTop: '3%',
    marginHorizontal: 40,
    justifyContent: 'space-between',
  },
  text: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },

  btn3: {
    backgroundColor: 'white',
    borderRadius: 90,
    marginTop: '5%',
    marginHorizontal: '10%',
    borderWidth: 1,
    height: '7%',
  },

  textbutton: {
    marginVertical: 15,
    fontSize: 20,
    marginTop: 50,
    color: '#9ECEC5',
    textAlign: 'center',
  },
});
