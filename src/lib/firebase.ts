import { initializeApp, getApps } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDX25nwzQc-STovWztgtw2aCycvWXJxA3Y",
  authDomain: "dash-13064.firebaseapp.com",
  databaseURL: "https://dash-13064-default-rtdb.firebaseio.com",
  projectId: "dash-13064",
  storageBucket: "dash-13064.appspot.com",
  messagingSenderId: "409540597555",
  appId: "1:409540597555:web:5cc48d3ab4046fbd309046",
  measurementId: "G-78JL7PXFPJ",
};

// Initialize Firebase app only once
const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);

export const db = getDatabase(app);
