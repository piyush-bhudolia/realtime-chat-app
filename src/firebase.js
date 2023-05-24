import firebase from "firebase"

const firebaseConfig = {
    //place your firebase config here
    apiKey: "AIzaSyDxMqBtPbaA3NKaqSUgSVDzpzQGG4MWnas",
    authDomain: "chat-app-75ecb.firebaseapp.com",
    projectId: "chat-app-75ecb",
    storageBucket: "chat-app-75ecb.appspot.com",
    messagingSenderId: "218765749641",
    appId: "1:218765749641:web:5fdcb8fbf7959a5d9b4558"
  };

  //this special line of code connects everything
  const firebaseApp =  firebase.initializeApp(firebaseConfig);


  //this is for database connection
  const db = firebaseApp.firestore();

 
  const auth = firebase.auth();

  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider }
  export default db;