import { initializeApp } from "firebase/app"; 
import { getAuth } from "firebase/auth";

// firebase config
const firebaseConfig = { 
  apiKey: "AIzaSyAtyUWfZWJWpMl_zstP4rsyFwEVCOOTxGo",
  authDomain: "vue-auth-157ee.firebaseapp.com",
  projectId: "vue-auth-157ee",
  storageBucket: "vue-auth-157ee.appspot.com",
  messagingSenderId: "997186688371",
  appId: "1:997186688371:web:6c7da508b281032d156106"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// get auth from firebase
const auth = getAuth(app); 
// export auth
export { auth } ; 