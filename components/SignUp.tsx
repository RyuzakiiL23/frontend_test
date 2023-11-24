'use client'

import React, { useRef, useEffect, useState } from 'react';
import Login from './Login';
import Cookies from 'universal-cookie';

interface SignUpProps {
    showAdditionalSign: boolean;
    setShowAdditionalSign: React.Dispatch<React.SetStateAction<boolean>>;
}

const SignUp: React.FC<SignUpProps> = ({ showAdditionalSign, setShowAdditionalSign }) => {
    const popupRef = useRef<HTMLDivElement>(null);
    const [showAdditionalContent, setShowAdditionalContent] = useState(false);
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const cookies = new Cookies();
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
                setShowAdditionalSign(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [setShowAdditionalSign]);

    const handleClick = () => {
        setShowAdditionalContent(!showAdditionalContent);
    };

    const handleSubmit = async () => {
        if (password !== password2) {
            alert(`Password confirmation doesn't match`);
            return;
        }
        
        try {
            const userData = {
                username,
                email,
                password,
                confirm_password: password,
            };

            const response = await fetch('https://api.ryu23.tech/api/v1/sign_up', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            const data = await response.json();
            console.log(data);

            if (data.message === "Account created successfuly") {
                cookies.set('authToken', data.id, { path: '/' });
                // cookies.set('authToken', '86d8d7ea-93ec-4628-81a8-2bd59ddcb3d', { path: '/' });
                setAuthenticated(true);
                window.location.reload();
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div ref={popupRef} className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mocha flex flex-col shadow-2xl place-content-around rounded-lg h-[500px] w-[400px] bg-base'>
            <h1 className='text-text font-bold text-center'>Sign Up</h1>
            <div className='flex flex-col items-center'>
                <input className='flex rounded justify-center w-2/3 h-8 px-2 text-base font-medium mb-2' type='username' placeholder='Username' onChange={(e) => setUsername(e.target.value)}/>
                <input className='flex rounded justify-center w-2/3 h-8 px-2 text-base font-medium mb-2' type='email' placeholder='Email' onChange={(e) => setEmail(e.target.value)}/>
                <input className='flex rounded justify-center w-2/3 h-8 px-2 text-base font-medium mb-2' type='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)}/>
                <input className='flex rounded justify-center w-2/3 h-8 px-2 text-base font-medium mb-2' type='password' placeholder='Verify Password' onChange={(e) => setPassword2(e.target.value)}/>
                <button onClick={handleSubmit} className='border bg-green text-base rounded px-2 mb-2'>Submit</button>
                <div className='flex flex-col items-center'>
                    <h1 className='text-text text-xs'>Have an account?</h1>
                    <button onClick={handleClick} className='text-maroon font-bold text-xs'>Login</button>
                </div>
                <h1 className='text-text text-xs'>Forget password?</h1>
            </div>
            {showAdditionalContent && <Login showAdditionalContent={showAdditionalContent} setShowAdditionalContent={setShowAdditionalContent} />}
        </div>
    );
};

export default SignUp;