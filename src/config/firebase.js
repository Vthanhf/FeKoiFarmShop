
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDbYzTux7rqqX5fKy-iyqipZSloBJmkGbU",
  authDomain: "swp-project-948a4.firebaseapp.com",
  projectId: "swp-project-948a4",
  storageBucket: "swp-project-948a4.appspot.com",
  messagingSenderId: "939306878951",
  appId: "1:939306878951:web:38f4e445f7709492bc5f42",
  measurementId: "G-EFMYBM9STT"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const googleProvider = new GoogleAuthProvider();

export { storage, googleProvider};