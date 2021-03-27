import firebase from 'firebase';


var firebaseConfig = {
    apiKey: "AIzaSyAE-vzKevuFMgb5bJKyH2U_p7WXrcEmcXw",
    authDomain: "login-fe436.firebaseapp.com",
    projectId: "login-fe436",
    storageBucket: "login-fe436.appspot.com",
    messagingSenderId: "103055479511",
    appId: "1:103055479511:web:faa598483a7ee363bed692"
  };
 
const fire =  firebase.initializeApp(firebaseConfig);

export default fire;