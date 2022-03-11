import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyB9qTNvRYYXYBWrqKCSUwW4YlnUqhMwlcc",
  authDomain: "my-portfolio-bbc63.firebaseapp.com",
  projectId: "my-portfolio-bbc63",
  storageBucket: "my-portfolio-bbc63.appspot.com",
  messagingSenderId: "219228222053",
  appId: "1:219228222053:web:463ea5bc36abb86e5b8c8c",
  measurementId: "G-020WY9H2NH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const database = getDatabase(app);
