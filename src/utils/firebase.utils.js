import {initializeApp} from "firebase/app"
import {getAuth,signInWithRedirect,signInWithPopup ,GoogleAuthProvider} from "firebase/auth"

import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    

} from 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyBFvgB4t24wMadArym-Ejp__iKbVGbpyjw",
    authDomain: "myapp-1-26467.firebaseapp.com",
    projectId: "myapp-1-26467",
    storageBucket: "myapp-1-26467.appspot.com",
    messagingSenderId: "86728541272",
    appId: "1:86728541272:web:33c6cdac194846a50ab62d",
    measurementId: "G-85ZD9BE65W"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);
  const provider= new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt:"select_account"
  })
export const auth= getAuth();
export const db=getFirestore();
export const createUserDocumentFromaAuth=async(userAuth)=>{
    const UserDocRef=doc(db,"users" , userAuth.uid)
    console.log(UserDocRef)
    const usersnapshot= await getDoc(UserDocRef)
    console.log(usersnapshot)
    console.log(usersnapshot.exists());
}



export const signInWithGooglePopup=()=>signInWithPopup(auth,provider)