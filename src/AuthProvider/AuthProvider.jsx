/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth"
import { createContext, useEffect, useState } from "react"
import { auth } from './../firebase.init';
import { GoogleAuthProvider } from "firebase/auth";
import axios from "axios";

  export const AuthContext = createContext(null)
  const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loadin, setLoading] = useState(true)



    //createUser
    const createUser = (email, password)=> {
      setLoading(true)
      return createUserWithEmailAndPassword(auth, email, password)
    }

    //login
    const singInUser = (email, password)=> {
      setLoading(true)
      return signInWithEmailAndPassword(auth, email, password)
    }

    //googleSingIn
    const singInGoogle =()=> {
      setLoading(true)
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
        const userEmail = currentUser?.email || user?.email;
        const loggedUser = {email: userEmail}
        setUser(currentUser)
        // console.log('on auth change', currentUser)
        setLoading(false)

        if (currentUser) {
          axios.post('https://assignment-eleven.vercel.app/jwt', loggedUser, {withCredentials: true})
          .then(res => {
            console.log(res.data)
          })
        }
        
        else{
          axios.post('https://assignment-eleven.vercel.app/logout', loggedUser, {withCredentials: true})
          .then(res=> {
            console.log(res.data)
          })
        }

      });
      return ()=> {
        unSubscribe
      }
    },[])




    const authInfo = {user, createUser, singInUser, logOut, singInGoogle, updateUserProfile, loadin}

  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider