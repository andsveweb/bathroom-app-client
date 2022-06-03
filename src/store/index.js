
import { createStore } from "vuex";
import router from "../router";
import { auth } from "../firebase";

/* importing modules */
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  
} from "firebase/auth";
/* creating store */
export default createStore({
  state: {
    user: null,
  },
  getters: {},
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    },
    CLEAR_USER(state) {
      state.user = null;
    },
  },
/* actions for login and  with firebase and error handling */ 
  actions: {
    async login({ commit }, details) {
      const { email, password } = details;
      try {
        await signInWithEmailAndPassword(auth, email, password); //sign in with email and password
      } catch (error) { 
        switch (error.code) { //switch case for error handling
          case "auth/user-not-found": 
            alert("Användaren hittades inte");
            break;
          case "auth/wrong-password":
            alert("Fel lösenord");
            break;
          default:
            alert("Något gick fel");
        }
        return;
      }
      commit("SET_USER", auth.currentUser); // set user 
      router.push("/posts");
    },
    /* action for signup with firebase and error handling */
    async register({ commit }, details) { 
      const { email, password } = details; 

      try {
        await createUserWithEmailAndPassword(auth, email, password); // create user with email and password
      } catch (error) {
        switch (error.code) {
          case "auth/email-already-in-use":
            alert("Email används redan");
            break;
          case "auth/invalid-email":
            alert("Felaktig email");
            break;
          case "auth/operation-not-allowed":
            alert("Ej tillåtet");
            break;
          case "auth/weak-password":
            alert("För svagt lösenord");
            break;
          default:
            alert("Något gick fel");
        }
        return;
      }
      commit("SET_USER", auth.currentUser);
      router.push("/");
    },
    async logout({ commit }) { // logout with firebase 
      await signOut(auth);
      commit("CLEAR_USER");
      router.push("/login");
    },
  
    fetchUser({ commit }) {
      auth.onAuthStateChanged(async (user) => { // method from firebase 
        if (user === null) {
          commit("CLEAR_USER");   // if user is null, clear user
        } else {
          commit("SET_USER", user);  // if user is not null, set user

          if (router.isReady() && router.currentRoute.value.path === "/login") { // if user is not null and current route is login, redirect to posts
            router.push("/"); 
          }
        }
      });
    },
  },
});
