import firebase from 'firebase/app';
import 'firebase/database';

// Firebase konfiguratsiyasi
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  databaseURL: "https://YOUR_PROJECT_ID.firebaseio.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Firebase-ni boshlash
firebase.initializeApp(firebaseConfig);

// Realtime Database ma'lumotlarini olish
const database = firebase.database();

// Ma'lumotlarni olish
database.ref('users').once('value').then((snapshot) => {
  const data = snapshot.val();
  console.log(data);
});
