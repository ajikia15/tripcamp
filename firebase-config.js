import { initializeApp } from "firebase/app"
import { getFirestore } from "@firebase/firestore";
export const firebaseConfig = {
    apiKey: "AIzaSyCncaRTzEuphRerf-9gScbh8uA2NUvm_y0",
    authDomain: "pompok-330806.firebaseapp.com",
    databaseURL: "https://pompok-330806-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "pompok-330806",
    storageBucket: "pompok-330806.appspot.com",
    messagingSenderId: "36110654370",
    appId: "1:36110654370:web:bab54f610b9caf3aed30fb",
    measurementId: "G-F315F4S0WN"

};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);