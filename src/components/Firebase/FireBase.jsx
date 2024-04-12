// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrSVcKDJZGSrR4bjMj8ygTyF3TVNcBBsA",
  authDomain: "tastetrekker-ec05b.firebaseapp.com",
  projectId: "tastetrekker-ec05b",
  storageBucket: "tastetrekker-ec05b.appspot.com",
  messagingSenderId: "921553923173",
  appId: "1:921553923173:web:bb629cfcdbee1e38ca2a8c",
  measurementId: "G-DNBL3MM687",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export { app };
