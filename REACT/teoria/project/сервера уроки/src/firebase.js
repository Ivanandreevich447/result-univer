import { initializeApp } from "firebase/app";
import {Database, getDatabase} from 'firebase/database'


const firebaseConfig = {
  apiKey: "AIzaSyCK1T5jzsAhOe3COP7WWGyztcctuN8Vsqc",
  authDomain: "productsproject-bb4aa.firebaseapp.com",
  projectId: "productsproject-bb4aa",
  storageBucket: "productsproject-bb4aa.firebasestorage.app",
  messagingSenderId: "2924936052",
  appId: "1:2924936052:web:7ec6a5b4f8725232888a21",
  databaseURL :'https://productsproject-bb4aa-default-rtdb.europe-west1.firebasedatabase.app/' ,
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
