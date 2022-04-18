import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBqV16ERivqLQohX97F80DvRl-iCHojv04",
    authDomain: "events-manager-5c2f7.firebaseapp.com",
    projectId: "events-manager-5c2f7",
    storageBucket: "events-manager-5c2f7.appspot.com",
    messagingSenderId: "613665945763",
    appId: "1:613665945763:web:2e5b53266aee89865ca716",
    measurementId: "G-F5H2200KVM"
  };
  
  // Initialize Firebase
 export const app = initializeApp(firebaseConfig);

 export const db = getFirestore(app);
