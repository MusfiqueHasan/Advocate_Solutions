import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

console.log(process.env.REACT_APP_API_KEY);
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDERID,
  appId: process.env.REACT_APP_APP_ID,

};

// Initialize Firebase and Firestore
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
firebase.initializeApp(firebaseConfig)
const auth = firebase.auth()

const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export { auth, googleAuthProvider }
