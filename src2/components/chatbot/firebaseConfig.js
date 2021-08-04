// import firebase from 'firebase/app';
// import 'firebase/firestore';
// import firestore from 'firebase/firestore'
import * as firebase from 'firebase/firebase';
import 'firebase/firestore';
require('firebase/auth');




const firebaseConfig = {
    apiKey: "AIzaSyC6btTJmKUV1Pfbl5Kuk0tq95SvtdDS-Q0",
    authDomain: "msn-project.firebaseapp.com",
    databaseURL: "https://msn-project.firebaseio.com",
    projectId: "msn-project",
    storageBucket: "msn-project.appspot.com",
    messagingSenderId: "825211102131",
    appId: "1:825211102131:web:d20fb7f8c518689872e1c6",
    measurementId: "G-5SYZL4EFN1"
  };


firebase.initializeApp(firebaseConfig);
export default firebase;