import firebase from 'firebase'

    const firebaseConfig = {
      apiKey: "AIzaSyB1zLatKse2JXL1TCEiRZEXQSov1UG4jms",
      authDomain: "neoteric-bd.firebaseapp.com",
      projectId: "neoteric-bd",
      storageBucket: "neoteric-bd.appspot.com",
      messagingSenderId: "479013692614",
      appId: "1:479013692614:web:3b8062fbf0174e86f0a3c7",
      measurementId: "G-6MMDRSJLSD"
    };
    // Initialize Firebase
const firebaseApp=firebase.initializeApp(firebaseConfig);
export default firebaseApp;