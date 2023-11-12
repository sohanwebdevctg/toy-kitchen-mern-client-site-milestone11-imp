import { createContext } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../firebase/firebase.config";

// eslint-disable-next-line react-hooks/rules-of-hooks
export const AuthContext = createContext(null)
const auth = getAuth(app);

// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {

  const registerUser = (email, password) => {
    return createUserWithEmailAndPassword(auth,email, password)
  }

  const userInfo = {
    registerUser
  }


  return (
    <AuthContext.Provider value={userInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;