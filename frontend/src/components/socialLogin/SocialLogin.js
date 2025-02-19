import React from 'react';
import UseAuth from '../../hook/UseAuth';
import { FaGoogle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SocialLogin = () => {
    const { googleSign } = UseAuth();
    const navigate = useNavigate();

    const handleGoogleSignIn = async () => {
        try {
            const result=await googleSign();
            const userInfo={
                name:result.user?.displayName,
                email:result.user?.email,
            }
             // Send user info to your server to get a token
             const response=await axios.post('https://backendp-rho.vercel.app/api/login',userInfo)
             console.log('see the data save',response)
             const {jwtToken}=response.data
             if(jwtToken){
                // Save token and navigate
                localStorage.setItem("jwtToken",jwtToken)
                navigate('/');
             }
            
        } catch (error) {
            console.error("Google Sign-In Error", error);
        }
    };

    return (
        <div>
            <button
                onClick={handleGoogleSignIn}
                className="flex items-center px-4 py-2  rounded-lg hover:bg-gray-100 transition duration-200"
            >
              
                Sign in with Google
            </button>
        </div>
    );
};

export default SocialLogin;
