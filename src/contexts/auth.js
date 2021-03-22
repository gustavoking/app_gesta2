import React, { useState, createContext, useEffect } from 'react';
//import firebase from '../services/firebaseconnection';
import AsyncStorage from '@react-native-async-storage/async-storage';
import firebase from '../services/firebase';

export const AuthContext = createContext({});

function AuthProvider({ children }) {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [idTransporteReservado, setIdTransporteReservado] = useState('');
    const [placaTransporte, setPlacaTransporte] = useState('');
    const [salaReservada, setSalaReservada] = useState('');
    const [blocoReservado, setBlocoReservado] = useState('');


    useEffect(() => {
        async function loadStorage() {
            const storageUser = await AsyncStorage.getItem('Auth_user');

            if (storageUser) {
                setUser(JSON.parse(storageUser));
                setLoading(false);
            }

            setLoading(false);
        }

        loadStorage();
    }, []);

    //Funcao para logar o usario
    async function signIn(email, password) {
        setLoading(true)
        await firebase.auth().signInWithEmailAndPassword(email, password)
            .then(async (value) => {
                let uid = value.user.uid;
                let verifyTipo = value.user.email.split('@')

                await firebase.database().ref('users').child(uid).once('value')
                    .then((snapshot) => {

                        if (verifyTipo[1] === 'aluno.ifsc.edu.br') {
                            console.log(value.user.email.split('@'))
                            let data = {
                                uid: uid,
                                nome: snapshot.val().nome,
                                email: value.user.email,
                                tipo: 'monitor'
                            };
                            setUser(data);
                            storageUser(data);
                            setLoading(false)

                        }
                        if (verifyTipo[1] === 'ifsc.edu.br') {
                            console.log(value.user.email.split('@'))
                            let data = {
                                uid: uid,
                                nome: snapshot.val().nome,
                                email: value.user.email,
                                tipo: 'servidor'
                            };
                            setUser(data);
                            storageUser(data);
                            setLoading(false)
                        }
                        if (verifyTipo[1] === 'gmail.com') {
                            console.log(value.user.email.split('@'))
                            let data = {
                                uid: uid,
                                nome: snapshot.val().nome,
                                email: value.user.email,
                                tipo: 'administrador'
                            };
                            setUser(data);
                            storageUser(data);
                            setLoading(false)
                        }
                    })

            }).catch(() => {
                setLoading(false);
                alert('Voce precisa ter um email institucional para fazer login')

            })
        setLoading(false);

    }



    //Cadastrar usuario
    // async function signUp(email, password, nome) {

    //     await firebase.auth().createUserWithEmailAndPassword(email, password)
    //         .then(async (value) => {
    //             let uid = value.user.uid;
    //             await firebase.database().ref('users').child(uid).set({
    //                 nome: nome
    //             })
    //                 .then(() => {
    //                     let data = {
    //                         uid: uid,
    //                         nome: nome,
    //                         email: value.user.email,
    //                     };
    //                     setUser(data);
    //                     storageUser(data);

    //                 })
    //         })
    //         .catch((error) => {
    //             alert(error.code);
    //         });
    // }

    async function storageUser(data) {
        await AsyncStorage.setItem('Auth_user', JSON.stringify(data));
    }


    async function signOut() {
        await firebase.auth().signOut();
        await AsyncStorage.clear()
            .then(() => {
                setUser(null);
            })

    }

    return (
        <AuthContext.Provider value={{
            signed: !!user, user, loading, signIn, signOut,
            idTransporteReservado, setIdTransporteReservado,
            placaTransporte, setPlacaTransporte,
            salaReservada, setSalaReservada,
            blocoReservado, setBlocoReservado
        }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;