  
import firebase from "firebase/app";
import "firebase/firestore";

const app = firebase.initializeApp({
    apiKey: "AIzaSyAwvwkgCRriZ7hcaW-r69TUrCIneSNsZYU",
    authDomain: "camilamarcosgalban-95731.firebaseapp.com",
    projectId: "camilamarcosgalban-95731",
    storageBucket: "camilamarcosgalban-95731.appspot.com",
    messagingSenderId: "2706190804",
    appId: "1:2706190804:web:63e5bd867178bdbf78e641"
});

export function getFirebase() {
  return app;
}

export function getFirestore() {
  return firebase.firestore(app);
}


