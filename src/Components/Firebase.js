// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// import { getAuth } from "firebase/auth";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyAKvpLYRoLFouNpySY0tA7z9u_a7LP2s7Y",
	authDomain: "replica-01.firebaseapp.com",
	projectId: "replica-01",
	storageBucket: "replica-01.appspot.com",
	messagingSenderId: "465488799841",
	appId: "1:465488799841:web:9aece5367c9682438aa220",
	measurementId: "G-JJT4WVJKXC",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = firebase.auth();
const db = app.firestore();

export { auth, analytics, db };
