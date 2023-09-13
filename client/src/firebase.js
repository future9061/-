import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBVdShWQu_fnASZWdZ-O7YyaHnS0WiRwzA",
  authDomain: "react-community-89f1d.firebaseapp.com",
  projectId: "react-community-89f1d",
  storageBucket: "react-community-89f1d.appspot.com",
  messagingSenderId: "977079505409",
  appId: "1:977079505409:web:eb051486a99453569de600"
};

firebase.initializeApp(firebaseConfig);

export default firebase;