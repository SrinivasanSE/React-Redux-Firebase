// Your web app's Firebase configuration
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyDHRnzFiMfDmOAwhgspz7dvHjuiFzp1MIQ",
  authDomain: "react-firebase-f2ddd.firebaseapp.com",
  databaseURL: "https://react-firebase-f2ddd.firebaseio.com",
  projectId: "react-firebase-f2ddd",
  storageBucket: "react-firebase-f2ddd.appspot.com",
  messagingSenderId: "488525250350",
  appId: "1:488525250350:web:b54b4f786bebb5f3fb84bf",
  measurementId: "G-7HL7E2495T",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
