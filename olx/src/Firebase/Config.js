import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD7G3qi1P5vMNJPMb62EzPKKOxsKQpH4VY",
    authDomain: "fir-dfbcf.firebaseapp.com",
    projectId: "fir-dfbcf",
    storageBucket: "fir-dfbcf.appspot.com",
    messagingSenderId: "993733893145",
    appId: "1:993733893145:web:7d4ccd88fe3ca5b067de88",
    measurementId: "G-WWTLNJYXN4"
  };

 export default firebase.initializeApp(firebaseConfig)
