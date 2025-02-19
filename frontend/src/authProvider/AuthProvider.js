import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import React, { createContext, useState, useEffect } from "react";
import auth from "../firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);
    const googleProvider = new GoogleAuthProvider();


    useEffect(()=>{
        const fetchUser=async()=>{
            const res=await axios.get('http://localhost:8080/api/users')
            console.log('see users full data role',res.data)
           setUser(res.data)
        }
        setLoading(false)
        fetchUser();
    },[])

    // Check token on initial load
    useEffect(() => {
        const token = localStorage.getItem("jwtToken");
        setIsAuthenticated(!!token);
    }, []);

    // Sign in with Google
    const googleSign = async () => {
        setLoading(true);
        try {
            return signInWithPopup(auth, googleProvider);
            // Extract token if needed (from result.user or custom API)
          
        } catch (error) {
            console.error("Google Sign-In Failed", error);
        } 
    };

    // Normal Sign-In
    const signIn = (token) => {
        localStorage.setItem("jwtToken", token);
        setIsAuthenticated(true);
    };

    // Unified Logout Method
    const handleSignOut = async () => {
        setLoading(true);
        try {
            await signOut(auth);
            localStorage.removeItem("jwtToken");
            setUser(null);
            setIsAuthenticated(false);
        } catch (error) {
            console.error("Sign-Out Failed", error);
        } finally {
            setLoading(false);
        }
    };

    // Track user state via Firebase
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            console.log('see the current user',currentUser)
            setIsAuthenticated(!!currentUser);
            setLoading(false);
        });
        return () => {
            unsubscribe();
        };
    }, []);

    const authInfo = {
        loading,
        signIn,
        handleSignOut,
        googleSign,
        user,
        isAuthenticated,
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
