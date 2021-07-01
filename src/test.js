import firebase from "firebase/app";
import "firebase/firestore";

const firestore = firebase.firestore();
firestore
  .collection("users")
  .doc("r6cdBqpX4tuyeDk8bMTo")
  .collection("cartItems")
  .doc("JCqDtTTJEw6wf41KPlPg");

firestore.doc("/users/r6cdBqpX4tuyeDk8bMTo/cartItems/JCqDtTTJEw6wf41KPlPg");
firestore.collection("/users/r6cdBqpX4tuyeDk8bMTo/cartItems");
