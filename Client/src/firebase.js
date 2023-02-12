// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9-PYLQ-mOzsIFzG14y8CLVSEI2C4PUY0",
  authDomain: "ngo-connect-c1782.firebaseapp.com",
  projectId: "ngo-connect-c1782",
  storageBucket: "ngo-connect-c1782.appspot.com",
  messagingSenderId: "103725498388",
  appId: "1:103725498388:web:7367345497e089f8f4e701",
  measurementId: "G-3PN9WG1VKP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth=getAuth(app);

export {auth};