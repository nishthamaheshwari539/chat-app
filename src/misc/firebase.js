import firebase from 'firebase/app';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDcwoYL58qYr_Qgs0JF92aH7yX1GroFR28",
    authDomain: "chat-web-app-581c0.firebaseapp.com",
    databaseURL: "https://chat-web-app-581c0-default-rtdb.firebaseio.com",
    projectId: "chat-web-app-581c0",
    storageBucket: "chat-web-app-581c0.appspot.com",
    messagingSenderId: "998274567484",
    appId: "1:998274567484:web:99262f5a46ab3b6cf5e239",
};

const app = firebase.initializeApp(config);
export const auth = app.auth();
