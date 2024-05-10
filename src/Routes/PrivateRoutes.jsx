/* eslint-disable react/prop-types */
import { useContext } from "react"
import { AuthContext } from "../AuthProvider/AuthProvider"
import { Navigate, useLocation } from "react-router-dom"

const PrivateRoutes = ({children}) => {
  const {user, loadin} = useContext(AuthContext)
  const location = useLocation()

  if(loadin){
   return <span className="loading loading-spinner loading-lg"></span>

  }
  if (user) {
    return children
  }

  return <Navigate state={location.pathname} to="/login"></Navigate>
}

export default PrivateRoutes