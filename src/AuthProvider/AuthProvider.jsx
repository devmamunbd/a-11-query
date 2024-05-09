/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createContext, useState } from "react"

    const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const [user, setuser] = useState(null)



    const authInfo = {user}

  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider