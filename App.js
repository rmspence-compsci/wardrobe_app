import Navigator from './routes/homeStack';

// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
/*const firebaseConfig = {
  apiKey: "AIzaSyBvlOxzl45NMCMOjRWGriBtSMhJvf1Z_hY",
  authDomain: "waredrobefirebase.firebaseapp.com",
  projectId: "waredrobefirebase",
  storageBucket: "waredrobefirebase.appspot.com",
  messagingSenderId: "95522262620",
  appId: "1:95522262620:web:e05b896d95a9021df8e099",
  measurementId: "G-SBQ8LXTH0V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
*/
const App = () => {
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <Navigator />
  );
}

export default App;