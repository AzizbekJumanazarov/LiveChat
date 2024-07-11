import firebase from "firebase/compat/app";
import "firebase/compat/database";

const config = {
    apiKey: "AIzaSyCz-rGJYfl6sv0fg8ncgz5J5nCrENpwElk",
    authDomain: "firevuechat-bad77.firebaseapp.com",
    projectId: "firevuechat-bad77",
    storageBucket: "firevuechat-bad77.appspot.com",
    messagingSenderId: "1057687044866",
    appId: "1:1057687044866:web:b4ac516999cfb36674781b"
}
const db = firebase.initializeApp(config);
export default db;
