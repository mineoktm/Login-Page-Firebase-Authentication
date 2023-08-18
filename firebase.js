
import firebase from "firebase/compat/app";
import 'firebase/compat/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "your_config_informations",
};

// Initialize Firebase
if(!firebase.apps.length)
{
    firebase.initializeApp(firebaseConfig);
}

const  auth = firebase.auth();
export {auth};