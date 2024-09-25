import React, { createContext, useEffect, useState } from 'react';
import auth from '../FireBase/FireBase';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';

export const Auth_context = createContext(null);
const Private_auth = ({children}) => {
const [User,setUser]=useState(null);
const [Loader,setLoader] = useState(true)
 
const createUser = (email,password)=>{
    setLoader(true);
    return createUserWithEmailAndPassword(auth,email,password);
}
const SignInHere= (email,password)=>{
    setLoader(true);
    return signInWithEmailAndPassword(auth,email,password);
}
useEffect(()=>{
  const unSubscribe=  onAuthStateChanged(auth,currentUser=>{
        setUser(currentUser);
        setLoader(false);
    })
    return ()=>{
        unSubscribe();
    }
},[])
const SignOUt=()=>{
    return signOut(auth);
}
const AuthInfo={
    User,
    createUser,
    SignInHere,
    SignOUt
    
}
    return (
        <Auth_context.Provider value={AuthInfo}>
            {children}
        </Auth_context.Provider>
    );
};

export default Private_auth;