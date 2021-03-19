import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

let firebaseConfig = {
    apiKey: "AIzaSyCb-D6fGvwteDfE7zPILOzKq9hEvtTzEyg",
    authDomain: "appgesta.firebaseapp.com",
    databaseURL: "https://appgesta-default-rtdb.firebaseio.com",
    projectId: "appgesta",
    storageBucket: "appgesta.appspot.com",
    messagingSenderId: "965588930394",
    appId: "1:965588930394:web:96c7d838dc6675028bed63"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;
