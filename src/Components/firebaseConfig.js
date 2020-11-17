import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCqYhvpag5Z0PEX16I8LfHmwBirCbzGntI",
  authDomain: "e-clone-1726d.firebaseapp.com",
  databaseURL: "https://e-clone-1726d.firebaseio.com",
  projectId: "e-clone-1726d",
  storageBucket: "e-clone-1726d.appspot.com",
  messagingSenderId: "192032958456",
  appId: "1:192032958456:web:a1cb6940e30ef81c1b180d",
  measurementId: "G-P5K0572SSN",
});
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
export { db, auth };
