// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCqEYMOFg4YEai4lFYkGa7dkN48fCIxImg",
  authDomain: "photogallery-f979d.firebaseapp.com",
  projectId: "photogallery-f979d",
  storageBucket: "photogallery-f979d.appspot.com",
  messagingSenderId: "881866968427",
  appId: "1:881866968427:web:aad9553e42c8f51dc3902e"
};

firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();

const projectfirestore = firebase.firestore();

const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export  {projectStorage,projectfirestore,timestamp};