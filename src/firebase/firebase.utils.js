import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyBo1OQoTPuBNQN1UCJvGbGKbOHDJVa6Fto",
    authDomain: "crwn-db-4ccb9.firebaseapp.com",
    projectId: "crwn-db-4ccb9",
    storageBucket: "crwn-db-4ccb9.appspot.com",
    messagingSenderId: "89468745566",
    appId: "1:89468745566:web:7bbdc55615b24bc8dd01cf",
    measurementId: "G-Q8H2FF54ST"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;