import { initializeApp } from "firebase/app"
import { getFirestore } from "@firebase/firestore";
export const firebaseConfig = {
    apiKey: "KEY",
    authDomain: "AUTH",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""

};
// frtxilad aqane

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);