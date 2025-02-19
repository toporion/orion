import React from 'react';
import {useGoogleLogin} from '@react-oauth/google'

const GoogleLogin = () => {
    const responseGoolge=async(authResult)=>{
        try{
            console.log(authResult)
        }catch(error){
            console.log(err)
        }
    }
    const googleSignIn=useGoogleLogin({
        onSuccess:responseGoolge,
        onError:responseGoolge,
        flow:'auth-code'
    })
    return (
        <div>
            <button
            onClick={googleSignIn}
            >Login with google</button>
        </div>
    );
};

export default GoogleLogin;