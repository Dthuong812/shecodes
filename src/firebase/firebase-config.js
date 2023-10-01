import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDgXUhsv6kN5-53Rfpj0DgREkfxkG0zGbo",
    authDomain: "authentication-shecodes.firebaseapp.com",
    projectId: "authentication-shecodes",
    storageBucket: "authentication-shecodes.appspot.com",
    messagingSenderId: "688665901281",
    appId: "1:688665901281:web:c56fc1421ecb19a4229fa0",
    measurementId: "G-QKHYPW75RV"
  };
  
  const app = initializeApp(firebaseConfig);

  export const auth = getAuth(app)