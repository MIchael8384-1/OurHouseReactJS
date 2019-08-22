import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBU_1mITgF6qizKkP-Sv0vX95ogm90TTQw",
  authDomain: "fir-chat-20e71.firebaseapp.com",
  databaseURL: "https://fir-chat-20e71.firebaseio.com",
  projectId: "fir-chat-20e71",
  storageBucket: "fir-chat-20e71.appspot.com",
  messagingSenderId: "525946116032",
  appId: "1:525946116032:web:153d82e1e871b830"
};

const fire = firebase.initializeApp(firebaseConfig);
const db = fire.firestore();

export default fire;
export { db };
