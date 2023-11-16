'use client'

import React, { useRef, useEffect, useState } from 'react';
import SignUp from './SignUp';

const Login = ({ showAdditionalContent, setShowAdditionalContent }) => {
    const popupRef = useRef(null);

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const [showAdditionalSign, setShowAdditionalSign] = useState(false);
    
    const handleSignUp = () => {
        setShowAdditionalSign(!showAdditionalSign);
    };    

    const handleClickOutside = (event) => {
        if (popupRef.current && !popupRef.current.contains(event.target)) {
            setShowAdditionalContent(false);
        }
    };

    return (
        
        <div ref={popupRef} className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mocha flex flex-col shadow-2xl place-content-around rounded-lg h-[500px] w-[400px] bg-base'>
            <h1 className='text-text font-bold text-center'>Login</h1>
            <div className='flex flex-col items-center'>
                <input className='flex rounded justify-center w-2/3 h-8 px-2 text-base font-medium mb-2' type='username' placeholder='Username' />
                <input className='flex rounded justify-center w-2/3 h-8 px-2 text-base font-medium mb-2' type='password' placeholder='Password' />
                <button className='border bg-green text-base rounded px-2 mb-2'>Submit</button>
                <div className='flex flex-col items-center'>
                    <h1 className='text-text text-xs'>Don't have an account?</h1>
                    <button onClick={handleSignUp} className='text-maroon font-bold text-xs'>Sign Up</button>
                </div>
                <h1 className='text-text text-xs'>Forget password?</h1>
            </div>
            {showAdditionalSign && <SignUp showAdditionalSign={showAdditionalSign} setShowAdditionalSign={setShowAdditionalSign} />}
        </div>
    );
};

export default Login;
