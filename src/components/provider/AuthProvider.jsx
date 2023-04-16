import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import app from '../../firebase/firebaseInit'


export const  AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const auth = getAuth(app);
    const [user,setUser] = useState(null)
    const [loading,setLoading]=useState(true)
    // regristration 
    const createUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    // login 
    const loginInfo = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    // on auth state change 
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,currentUser =>{
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>{
            unSubscribe()
        }
    },[])

    // Logout 
    const logout = ()=>{
        return signOut(auth)
    }
    const atuhInfo = {
        user,
        createUser,
        loginInfo,
        logout,
        loading
    }
    return (
        <AuthContext.Provider value={atuhInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;