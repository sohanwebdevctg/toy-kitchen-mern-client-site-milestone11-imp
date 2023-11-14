import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


// eslint-disable-next-line react/prop-types
const PrivateRoute = ({children}) => {

  const {userData, loader} = useContext(AuthContext);
  const location = useLocation()

  // loader
  if(loader){
    return <span className="loading loading-spinner loading-lg"></span>
  }

  if(userData){
    return children
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate> 

};

export default PrivateRoute;