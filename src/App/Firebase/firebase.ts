// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPlgYOZKv0FZCe6dndFfgu9vpS8Lvu9Io",
  authDomain: "webtube-v-0.firebaseapp.com",
  projectId: "webtube-v-0",
  storageBucket: "webtube-v-0.firebasestorage.app",
  messagingSenderId: "1041273646424",
  appId: "1:1041273646424:web:64db7c508998ec56bac92d",
  measurementId: "G-BRE59WGF1V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export {app,auth,analytics} ;