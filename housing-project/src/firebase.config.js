// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZ2pDgeL8-oGq_wxM8MJYB8N623tsi15w",
  authDomain: "house-project-1e235.firebaseapp.com",
  projectId: "house-project-1e235",
  storageBucket: "house-project-1e235.appspot.com",
  messagingSenderId: "41826038439",
  appId: "1:41826038439:web:d772dfdd37a16164e72182",
  measurementId: "G-T7CBC5C8JH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore()