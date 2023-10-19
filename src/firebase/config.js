import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firebase';

const firebaseConfig = {
  apiKey: "AIzaSyB68nVCSyVmcSLLm1eh_jwxzprDI4igFFI",
  authDomain: "miniblog-7e4bb.firebaseapp.com",
  projectId: "miniblog-7e4bb",
  storageBucket: "miniblog-7e4bb.appspot.com",
  messagingSenderId: "993510067816",
  appId: "1:993510067816:web:5ccdc37e6adc07b66835dd"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };