import { useRef, useState } from "react";
import Header from "./Header"
import { checkValidaData } from "../utils/Validate";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const[isSignInForm,setIsSignInForm]=useState(true);
  const[errorMessage,setErrorMessage]=useState(null);
  const navigate=useNavigate();

  const email=useRef(null);
  const password=useRef(null);

  const toggleSignInform=()=>{
    setIsSignInForm(!isSignInForm)
  }

  const HandleButtonClick=()=>{
    //validate form

    const message=checkValidaData(email.current.value,password.current.value);
    setErrorMessage(message);

    if(message) return;
    if(!isSignInForm){
      //sign up Logic
        createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
        .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        navigate("/browse");
        })
        .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode +"-"+ errorMessage);
      });
    }
    else{
      //sign in Logic
      signInWithEmailAndPassword(auth,email.current.value,password.current.value)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        navigate("/browse");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode+"-"+errorMessage);
      });
    }
  }
  return (
    <div >
      <div className="absolute">
      <Header/>
      <img src="https://assets.nflxext.com/ffe/siteui/vlv3/04bef84d-51f6-401e-9b8e-4a521cbce3c5/null/IN-en-20240903-TRIFECTA-perspective_0d3aac9c-578f-4e3c-8aa8-bbf4a392269b_large.jpg"
      alt="logo"></img>
    </div>
    
    <form onSubmit={(e)=>e.preventDefault()}
      className="w-4/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
      <h1 className="font-bold text-3xl py-2">
        {isSignInForm?"Sign in":"Sing Up"}
      </h1>

      {!isSignInForm && <input 
        type="text" 
        placeholder="User Name"
        className="p-4 my-4 w-full bg-gray-700 rounded-lg"
      />}

      <input
        ref={email} 
        type="text" 
        placeholder="email address"
        className="p-4 my-4 w-full bg-gray-700 rounded-lg"
      />
      <input 
        ref={password}
        type="password" 
        placeholder="password"
        className="p-4 my-4 w-full bg-gray-700 rounded-lg"
      />
      <p className="text-red-700 font-bold text-xl">{errorMessage}</p>

      <button onClick={HandleButtonClick}
        className="bg-red-600 p-4 my-6 w-full rounded-lg" >
        {isSignInForm?"Sign in":"Sing Up"}
      </button>

      <p className="py-4 cursor-pointer" onClick={toggleSignInform}>
        {isSignInForm?"New to Netflix?Sign Up now":"Already registered?Sign In now"}
      </p>

    </form>
    </div>
  
  );
}

export default Login
