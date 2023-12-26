// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFireStore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  sendPasswordResetEmail,
  currentUser,
} from "firebase/auth";
import { useEffect, useState } from "react";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLkzMU6l6KWVHx-zrQNvy7lffRlulFafI",

  authDomain: "treehop-22e63.firebaseapp.com",

  projectId: "treehop-22e63",

  storageBucket: "treehop-22e63.appspot.com",

  messagingSenderId: "609816659294",

  appId: "1:609816659294:web:ce3fc19a20bcdb651d7bcf",

  measurementId: "G-NYS8Z69WRM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const db = getFireStore(app);
const analytics = getAnalytics(app);
export const auth = getAuth(app);

export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function signup(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

//always give auth from firebase auth
export function logout() {
  return signOut(auth);
}

export function resetPassword(auth, email) {
  sendPasswordResetEmail(auth, email)
    .then(() => {
      alert("Password reset email sent!");
      // ..
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
}

// //list all users
// const listAllUsers = (nextPageToken) => {
//   // List batch of users, 1000 at a time.
//   getAuth()
//     .listUsers(1000, nextPageToken)
//     .then((listUsersResult) => {
//       listUsersResult.users.forEach((userRecord) => {
//         console.log("user", userRecord.toJSON());
//       });
//       if (listUsersResult.pageToken) {
//         // List next batch of users.
//         listAllUsers(listUsersResult.pageToken);
//       }
//     })
//     .catch((error) => {
//       console.log("Error listing users:", error);
//     });
// };
// // Start listing users from the beginning, 1000 at a time.
// // Call this when new user is created.
// //listAllUsers();

//custom hook
export function useAuth() {
  const [currentUser, setCurrentUser] = useState();
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => setCurrentUser(user));
    return unsub;
  }, []);
  return currentUser;
}