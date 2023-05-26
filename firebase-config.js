import { initializeApp } from "firebase/app"
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";
import { signInAnonymously } from "firebase/auth";

export const firebaseConfig = {
    apiKey: process.env.APIKEY,
    authDomain: process.env.AUTHDOMAIN,
    databaseURL: process.env.DATABASEURL,
    projectId: process.env.PROJECTID,
    storageBucket: process.env.STORAGEBUCKET,
    messagingSenderId: process.env.MESSAGINGSENDERID,
    appId: process.env.APPID,
    measurementId: process.env.MEASUREMENTID

};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

signInAnonymously(auth)
    .then((userCredential) => {
        const user = userCredential.user;
        // console.log("Anonymous user ID:", user.uid);
    })
    .catch((error) => {
        console.error("Anonymous login failed:", error);
    });