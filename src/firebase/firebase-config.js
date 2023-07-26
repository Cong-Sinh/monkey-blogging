import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyC3uu5iNMP8N1_1fHrM8GC4n3gQ9PQooWk",
  authDomain: "monkey-blogging-40f34.firebaseapp.com",
  projectId: "monkey-blogging-40f34",
  storageBucket: "monkey-blogging-40f34.appspot.com",
  messagingSenderId: "769361900561",
  appId: "1:769361900561:web:49012fe49b31bfd31e2db0",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
