import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCHLnkVKcusMCdPV4b-xqkBAm25I1Wx39E",
  authDomain: "talentoagora-ab86e.firebaseapp.com",
  projectId: "talentoagora-ab86e",
  storageBucket: "talentoagora-ab86e.appspot.com",
  messagingSenderId: "288620471916",
  appId: "1:288620471916:web:ce1b923150bfaddb061a49",
  measurementId: "G-5MJXVS1725"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {db}