import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword,  signInWithPopup,  signOut,  updateProfile, } from "firebase/auth";
import app from "../firebase/firebase.config";


// eslint-disable-next-line react-hooks/rules-of-hooks
export const AuthContext = createContext(null)
const auth = getAuth(app);
const provider = new GoogleAuthProvider();


// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {

  const [userData, setUserData] = useState(null)
  const [loader, setLoader] = useState(true)


  // registerUser
  const registerUser = (email, password) => {
    setLoader(true)
    return createUserWithEmailAndPassword(auth,email, password)
  }

  // loginUser
  const loginUser = (email, password) => {
    setLoader(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  //logout
  const logOut = () => {
    signOut(auth)
  }

  //userDetails
  const userDetails = (auth ,name, image) => {
    return updateProfile(auth, {
      displayName : name, photoURL : image
    })
  }

  // googleLogin
  const googleLogIn = () => {
    return signInWithPopup(auth, provider);
  }

  //userChange
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (currentUser) => {
      setUserData(currentUser)
      setLoader(false)
    })
    return () => {
      return unsubscribed()
    }
  },[])



  const userInfo = {
    registerUser,
    loginUser,
    userDetails,
    userData,
    logOut,
    loader,
    googleLogIn
  }




  return (
    <AuthContext.Provider value={userInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;