import { createContext } from "react";

// eslint-disable-next-line react-hooks/rules-of-hooks
export const AuthContext = createContext(null)

// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {

  const userInfo = {
    name : 'sohan'
  }


  return (
    <AuthContext.Provider value={userInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;