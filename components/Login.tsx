'use client'

import React, { useRef, useEffect, useState } from 'react';
import SignUp from './SignUp';
import Cookies from 'universal-cookie';

interface LoginProps {
    showAdditionalContent: boolean;
    setShowAdditionalContent: React.Dispatch<React.SetStateAction<boolean>>;
}

const Login: React.FC<LoginProps> = ({ showAdditionalContent, setShowAdditionalContent }) => {
    const popupRef = useRef<HTMLDivElement>(null);
    const [showAdditionalSign, setShowAdditionalSign] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errEmail, setErrEmail] = useState('');
    const [errPasswd, setErrPasswd] = useState('');
    const cookies = new Cookies();
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
                setShowAdditionalContent(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [setShowAdditionalContent]);

    const handleSignUp = () => {
        setShowAdditionalSign(!showAdditionalSign);
    };

    const handleSubmit = async () => {
        setErrEmail('')
        setErrPasswd('')
        try {
            const userData = {
                email: email,
                password: password,
            };

            const response = await fetch('https://azure.ryu23.tech/api/v1/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            const data = await response.json();
            console.log(data);

            if (data.message === 'success') {
                cookies.set('authToken', data.id, { path: '/' });
                setAuthenticated(true);
                window.location.reload();
            }
            if (data.message === 'email not found') {
                setErrEmail(data.message)
            }
            if (data.message === 'password not correct') {
                setErrPasswd(data.message)
            }
        } catch (error: any) {
            setErrEmail(String(error))
            console.error('Error:', error);
        }
    };

    return (
        <div ref={popupRef} className=' z-50 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mocha flex flex-col shadow-2xl place-content-around rounded-lg h-[500px] w-[400px] bg-base'>
            <h1 className='text-text font-bold text-center'>Login</h1>
            <div className='flex flex-col items-center'>
                <input
                    className='flex rounded justify-center w-2/3 h-8 px-2 text-base font-medium mb-2'
                    type='email'
                    placeholder='Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    className='flex rounded justify-center w-2/3 h-8 px-2 text-base font-medium mb-2'
                    type='password'
                    placeholder='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <div className='text-red'>{errEmail}</div>
                <div className='text-red'>{errPasswd}</div>
                <button type='button' onClick={handleSubmit} className='border bg-green text-base rounded px-2 mb-2'>
                    Submit
                </button>
                <div className='flex flex-col items-center'>
                    <h1 className='text-text text-xs'>Don't have an account?</h1>
                    <button onClick={handleSignUp} className='text-maroon font-bold text-xs'>
                        Sign Up
                    </button>
                </div>
                <h1 className='text-text text-xs'>Forget password?</h1>
            </div>
            {showAdditionalSign && <SignUp showAdditionalSign={showAdditionalSign} setShowAdditionalSign={setShowAdditionalSign} />}
        </div>
    );
};

export default Login;
