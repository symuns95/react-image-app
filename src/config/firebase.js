import firebase from "firebase";

const firebaseConfig = {
  databaseURL: "https://learnreact1-167f5.firebaseapp.com",
  apiKey: "AIzaSyAP_8ZD_y7aPnjICx12Mje-NiJ4M9O-zfU",
  authDomain: "learnreact1-167f5.firebaseapp.com",
  projectId: "learnreact1-167f5",
  storageBucket: "learnreact1-167f5.appspot.com",
  messagingSenderId: "956687834698",
  appId: "1:956687834698:web:3cdde956e87bf9c54810b3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
