import firebase from '@firebase/app';
// import * as firebase from 'firebase/firebase';
import 'firebase/firestore';
// require('firebase/auth');



const firebaseConfig = {
  apiKey: "AIzaSyByHNJkV1IIEXuKqiQ3HiqgnMK1KyyFYUg",
  authDomain: "vaping0bot.firebaseapp.com",
  projectId: "vaping0bot",
  storageBucket: "vaping0bot.appspot.com",
  messagingSenderId: "510256782327",
  appId: "1:510256782327:web:e8222ec5135dee5fd9ecf2",
  measurementId: "G-P2FPC2PCS9"
};


firebase.initializeApp(firebaseConfig);
export default firebase;