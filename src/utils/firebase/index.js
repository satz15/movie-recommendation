// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
  } from "firebase/auth";
  import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
  import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZ9l0WKTjDQkwIxvWGHFRqfAVozI0oyfE",
  authDomain: "movie-reccomendation-6a2b1.firebaseapp.com",
  projectId: "movie-reccomendation-6a2b1",
  storageBucket: "movie-reccomendation-6a2b1.appspot.com",
  messagingSenderId: "959718252134",
  appId: "1:959718252134:web:c4e08eada2a4b2ca57d7a7"
};

// Initialize Firebase
const MovieApp = initializeApp(firebaseConfig);

// Authentication
const MovieAuth = getAuth(MovieApp);

const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    return createUserWithEmailAndPassword(MovieAuth, email, password);
  };
  
  const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    return signInWithEmailAndPassword(MovieAuth, email, password);
  };
  
  // firestore database
  const CommerceDb = getFirestore(MovieApp);
  
  const createUserDocumentFromAuth = async (userAuth, additionalInformation = {})  => {
    if (!userAuth) return;
    const userDocRef = doc(CommerceDb, "users", userAuth.uid);
    const userSnapShot = await getDoc(userDocRef);
  
    if (!userSnapShot.exists()) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      try {
        await setDoc(userDocRef, {
          displayName,
          email,
          createdAt,
          ...additionalInformation
        });
      } catch (err) {
        console.log("error creating the user", err.message);
      }
    }
    return userDocRef;
  };
  
  export { 
    createUserDocumentFromAuth,
    createAuthUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInAuthUserWithEmailAndPassword,
    getStorage
  };