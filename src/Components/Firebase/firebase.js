import * as firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAXT_f_Uz786-roPsKw7Pg2FLwwlD1_zyY",
    authDomain: "travel-guru-3bae9.firebaseapp.com",
    databaseURL: "https://travel-guru-3bae9.firebaseio.com",
    projectId: "travel-guru-3bae9",
    storageBucket: "travel-guru-3bae9.appspot.com",
    messagingSenderId: "849507213123",
    appId: "1:849507213123:web:b53d91eccb665ef5e719f6"
  };

export const app = firebase.apps.length ? firebase.apps[0] :  firebase.initializeApp(firebaseConfig);

export const auth = app.auth();
  
export default firebase;