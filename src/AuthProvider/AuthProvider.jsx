/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createUserWithEmailAndPassword } from "firebase/auth"
import { createContext, useState } from "react"
import { auth } from './../firebase.init';

  export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [user, setuser] = useState(null)



    //createUser
    const createUser =async (email, password)=> {
      try {
        const result = await createUserWithEmailAndPassword(auth, email, password);
        console.log(result.user);
      } catch (error) {
        console.log(error);
      }
    }





    const authInfo = {user, createUser}

  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider