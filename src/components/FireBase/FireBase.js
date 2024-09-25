// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTDF-hRddTLm9_Em4YCqsBz3WoE39MQfA",
  authDomain: "authguard-private-routes.firebaseapp.com",
  projectId: "authguard-private-routes",
  storageBucket: "authguard-private-routes.appspot.com",
  messagingSenderId: "35916434573",
  appId: "1:35916434573:web:9d5df8c1a54107b5fa66c4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;