import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: 'AIzaSyB9ouRbS5jQ8n6TWbW9BwksoV7KDwbm9No',
    authDomain: 'crwn-db-f0791.firebaseapp.com',
    projectId: 'crwn-db-f0791',
    storageBucket: 'crwn-db-f0791.appspot.com',
    messagingSenderId: '545022847619',
    appId: '1:545022847619:web:3ce61b5912e5fbb590c9b6',
    measurementId: 'G-N7B2EJDHGF',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
