import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "fortigate-ca6e8.firebaseapp.com",
  projectId: "fortigate-ca6e8",
  storageBucket: "fortigate-ca6e8.appspot.com",
  messagingSenderId: "1094869299504",
  appId: "1:1094869299504:web:c1bb524ce359dfdc7558f5",
  measurementId: "G-YNS1MBPSDR",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
