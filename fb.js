import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  query,
  where,
  getDocs
} from "https://www.gstatic.com/firebasejs/10.5.0/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyAy3ZXhmNI0LSY1fkg7gr3rXKscddCmjbM",
  authDomain: "boat-mailing-list.firebaseapp.com",
  projectId: "boat-mailing-list",
  storageBucket: "boat-mailing-list.firebasestorage.app",
  messagingSenderId: "669524334664",
  appId: "1:669524334664:web:7ca07e42c28f0144e0607d",
  measurementId: "G-9882HC8JTB"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
window.db = getFirestore(app);
window.addDoc = addDoc;
window.collection = collection;
window.query = query;
window.where = where;
window.getDocs = getDocs;