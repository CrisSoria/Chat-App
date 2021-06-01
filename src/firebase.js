import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyCBGpsV2E6DWs71e_4LIbFJspuV42TOQuA",
    authDomain: "unichat-f04a1.firebaseapp.com",
    projectId: "unichat-f04a1",
    storageBucket: "unichat-f04a1.appspot.com",
    messagingSenderId: "696262234900",
    appId: "1:696262234900:web:288730ded1ca271046e801",
  })
  .auth();
