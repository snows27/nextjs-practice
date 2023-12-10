
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDbXumA89zQdPQk1PRqI88BbgA8lzytLts",
  authDomain: "nextjs-practice-f8a80.firebaseapp.com",
  databaseURL: "https://nextjs-practice-f8a80-default-rtdb.asia-southeast1.firebasedatabase.app/",
  projectId: "nextjs-practice-f8a80",
  storageBucket: "nextjs-practice-f8a80.appspot.com",
  messagingSenderId: "787854440671",
  appId: "1:787854440671:web:82cd407d745c50ef0c516a",
  measurementId: "G-CFS7PQRTVR"
};


const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
export { database }