import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0etiQbwkeltNWImtKR2B9wfPxAHKK0J4",
  authDomain: "clone-9d795.firebaseapp.com",
  projectId: "clone-9d795",
  storageBucket: "clone-9d795.appspot.com",
  messagingSenderId: "983144960974",
  appId: "1:983144960974:web:065ebfcb8f64f6d541519f",
  measurementId: "G-NGVBY1552X"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };