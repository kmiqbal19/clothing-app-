import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyD5j0JsLXmc68460WUP4OQ1ARAhSwvWccM",
  authDomain: "crwn-db-faa6f.firebaseapp.com",
  projectId: "crwn-db-faa6f",
  storageBucket: "crwn-db-faa6f.appspot.com",
  messagingSenderId: "881688053243",
  appId: "1:881688053243:web:e29bb734262eab7e3ab75e",
  measurementId: "G-ZF97MLF7NR",
};
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();
  console.log(snapshot);
  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => {
  return auth.signInWithPopup(provider);
};
export default firebase;
