import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDSOpmJs8Fu9Atl16x3yrNEgH5najASbfo",
  authDomain: "hotstar-clone-cba05.firebaseapp.com",
  databaseURL: "https://hotstar-clone-cba05-default-rtdb.firebaseio.com",
  projectId: "hotstar-clone-cba05",
  storageBucket: "hotstar-clone-cba05.appspot.com",
  messagingSenderId: "925082615033",
  appId: "1:925082615033:web:dda3bb6acf7364719af628",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const dB = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default dB;
