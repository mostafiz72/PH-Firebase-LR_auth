import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react'
import { auth } from '../Firebase/Firebase.inti';

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();




export default function AuthProvider({children}) {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) =>{
    return createUserWithEmailAndPassword(auth, email, password);
    setLoading(true);
  }
  const signInUser = (email, password) =>{
    return signInWithEmailAndPassword(auth, email, password);
    setLoading(true);
  }

  /// sign In with google account createing********************************************
  /// sign In with google account createing********************************************

  const signInWithGoogle = ()=>{
    return signInWithPopup(auth, googleProvider)
    setLoading(true);
  }

  /// flowing the user login or logout

  const signOutUser = ()=>{
    return signOut(auth);
    setLoading(true);
  }

  useEffect(() =>{
    const unSubscribe =  onAuthStateChanged(auth, currentUser =>{
      console.log("currentUser", currentUser);
      setUser(currentUser);
      setLoading(false);
    })

    return ()=>{
      unSubscribe();
    }


  }, [])

  // onAuthStateChanged(auth, currentUser =>{
  //   if(currentUser){
  //     console.log('User is logged in:', currentUser);
  //     setUser(currentUser);
  //   } 
    
  //   else {
  //     console.log('User is logged out');
  //     setUser(null);
  //   }
  // })

  const name = "what's your name?";

    const authInfo = {  /// Export kora file gula ekhane dauya hoyse jno amra context er vitore thaka j kono file theke access korte pari
        user,
        name,
        createUser,
        signInUser,
        signOutUser,
        loading, 
        signInWithGoogle
    }


  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}
