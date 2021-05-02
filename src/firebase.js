import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "<your_production_apiKey>",
    authDomain: "<your_production_authDomain>",
    databaseURL: "<your_production_databaseURL>",
    projectId: "<your_production_projectId>",
    storageBucket: "<your_production_storageBucket>",
    messagingSenderId: "<your_production_messagingSenderId>",
    appId: "<your_production_appId>"
};

const firebaseApp=firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db ;