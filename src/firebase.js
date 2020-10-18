import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDuq7pbJ_EGAATZMto9ZxI0atBeMb3trRc",
  authDomain: "clone-371ee.firebaseapp.com",
  databaseURL: "https://clone-371ee.firebaseio.com",
  projectId: "clone-371ee",
  storageBucket: "clone-371ee.appspot.com",
  messagingSenderId: "1029367521245",
  appId: "1:1029367521245:web:a56270d2ab00bfed672034",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
