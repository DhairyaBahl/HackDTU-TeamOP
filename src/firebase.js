import * as firebase from "firebase/app";
import "firebase/messaging";
import "firebase/auth";
import "firebase/functions";
const config = {
    apiKey: "AIzaSyCa95gHswvTfpsDF395J91HYYcouour_ts",
    authDomain: "cdn-bpit.firebaseapp.com",
    projectId: "cdn-bpit",
    storageBucket: "cdn-bpit.appspot.com",
    messagingSenderId: "273897079717",
    appId: "1:273897079717:web:5219b40f868d2d63979e4c"
};
firebase.initializeApp(config);

if ("Notification" in window) {
  const messaging = firebase.messaging();
  messaging.usePublicVapidKey("AAAAP8WJw6U:APA91bE3PvIj1bNNMiyWMmvlulFypX18R8txbpvUq1HmyykjG-JPdf94fMSrqluZK4xHqjAEnG95pL6-bCSY09EBRZuO0OtYX5PXhl3ir5atOROTAE59i11Jtezu-I0cPRzDn0k42KnR");

  messaging.onMessage(payload => {
    console.log("Message received. ", payload);
    // push message to UI
  });

  messaging.onTokenRefresh(() => {
    const db = firebase.firestore();
    messaging
      .getToken()
      .then(refreshedToken => {
        db.collection("users")
          .doc(firebase.auth().currentUser.uid)
          .update({ pushTokenWeb: refreshedToken })
          .then(() => {
            console.log("Token updated.");
          })
          .catch(err => console.log(err));
      })
      .catch(err => {
        console.log("Unable to retrieve refreshed token ", err);
      });
  });
}

export default firebase;
