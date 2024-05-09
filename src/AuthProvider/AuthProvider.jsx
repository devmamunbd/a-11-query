/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth"
import { createContext, useEffect, useState } from "react"
import { auth } from './../firebase.init';
import { GoogleAuthProvider } from "firebase/auth";

  export const AuthContext = createContext(null)
  const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)



    //createUser
    const createUser = (email, password)=> {
      return createUserWithEmailAndPassword(auth, email, password)
    }

    //login
    const singInUser = (email, password)=> {
      return signInWithEmailAndPassword(auth, email, password)
    }

    //googleSingIn
    const singInGoogle =()=> {
      return signInWithPopup(auth, googleProvider)
  
    }

    //updateProfile
    const updateUserProfile =(name, photo)=> {
      return updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photo
      })
    }

    //logOut
    const logOut=()=> {
      return signOut(auth)
    }


    useEffect(()=> {
      const unSubscribe = onAuthStateChanged(auth, currentUser=> {
        console.log('on auth change', currentUser)
        setUser(currentUser)
      });
      return ()=> {
        unSubscribe
      }
    },[])




    const authInfo = {user, createUser, singInUser, logOut, singInGoogle, updateUserProfile}

  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider