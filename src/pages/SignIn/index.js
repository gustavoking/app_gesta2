import React, {useState, useContext} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {AuthContext} from '../../contexts/auth';

export default function SignIn() {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {signIn} = useContext(AuthContext);

  function handleLogin() {
    signIn(email, password);
  }

  return (
    <View style={{backgroundColor: '#3F5C57', flex: 1}}>
      <KeyboardAvoidingView behavior="position" enabled>
        <Image
          style={styles.ImageTelaLogin}
          source={require('../../assets/gestaLogo.png')}
        />
        <View>
          <TextInput
            style={styles.container}
            placeholder="Email"
            placeholderTextColor="#9ECEC5"
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={(text) => setEmail(text)}></TextInput>

          <TextInput
            style={styles.container}
            placeholder="Senha"
            placeholderTextColor="#9ECEC5"
            onChangeText={(text) => setPassword(text)}
            autoCorrect={false}
            autoCapitalize="none"
            secureTextEntry={true}></TextInput>

          <TouchableOpacity style={styles.BotaoLogin} onPress={handleLogin}>
            <Text style={styles.Txtcolor}>ENTRAR</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.BotaoAcessoSenha}
            onPress={() =>
              navigation.navigate(
                'SignUp',
                alert(
                  'Para ter acesso ao aplicativo fale com algum dos administradores',
                ),
              )
            }>
            <Text style={styles.Txtcolor2}>Primeiro acesso?</Text>
          </TouchableOpacity>
          {/*
                    <TouchableOpacity style={styles.BotaoAcessoSenha}>
                        <Text style={styles.Txtcolor2}>Esqueceu a senha?</Text>
                    </TouchableOpacity>

                    <Image style={styles.ImageDigital}
                        source={require('../../assets/DigitalGesta.png')}
                    /> */}
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: '#9ECEC5',
    borderLeftWidth: 0,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderWidth: 2,
    width: '70%',
    marginTop: '5%',
    marginLeft: '15%',
    height: '17%',
    fontSize: 20,
    color: '#9ECEC5',
    marginBottom: '0.1%',
  },
  ImageTelaLogin: {
    alignSelf: 'center',
    width: '50%',
    height: '35%',
  },
  BotaoLogin: {
    marginLeft: '15%',
    width: '70%',
    marginTop: '10%',
    height: '10%',
    backgroundColor: 'white',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Txtcolor: {
    fontSize: 20,
    fontWeight: 'normal',
    color: '#3F5C57',
  },
  BotaoAcessoSenha: {
    marginLeft: '25%',
    width: '50%',
    marginTop: '3%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Txtcolor2: {
    fontSize: 20,
    color: '#9ECEC5',
    marginRight: '2%',
  },
});
