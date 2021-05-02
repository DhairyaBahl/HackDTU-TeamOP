import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCa95gHswvTfpsDF395J91HYYcouour_ts",
    authDomain: "cdn-bpit.firebaseapp.com",
    databaseURL: "https://cdn-bpit-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "cdn-bpit",
    storageBucket: "cdn-bpit.appspot.com",
    messagingSenderId: "273897079717",
    appId: "1:273897079717:web:9f8ad4a156a5d529979e4c"
};

const firebaseApp=firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db ;