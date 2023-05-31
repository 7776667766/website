import { signInWithGooglePopup ,createUserDocumentFromaAuth } from "../../utils/firebase.utils"




const SignIn=()=>{
    const logGoogleUser= async()=>{
        const {user}= await signInWithGooglePopup()
        createUserDocumentFromaAuth(user)
    }

   return(
    <button onClick={logGoogleUser}>
        Sign in With Google
    </button>
   )
}
export default SignIn