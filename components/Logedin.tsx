'use client'

import React, { useRef, useEffect, useState } from 'react';
import SignUp from './SignUp';

const Logedin = ({ showAdditionalContent, setShowAdditionalContent }) => {
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
        
        <div ref={popupRef} className=' absolute top-[200px] right-0 transform -translate-x-1/2 -translate-y-1/2 mocha flex flex-col shadow-2xl place-content-around rounded-lg h-[300px] w-[200px] bg-base'>
          <ul className='flex flex-col relative w-[120px] m-auto place-center space-y-8'>
            <li onClick={() => window.location.href = '/myprofil'} className=' cursor-pointer  '>My profil</li>
            <li onClick={() => window.location.href = '/fav'} className=' cursor-pointer  '>Favorite</li>
            <li onClick={() => window.location.href = '/parm'} className=' cursor-pointer  '>Setting</li>
            <li className=' cursor-pointer  '>LogOut</li>
          </ul>
            {showAdditionalSign && <SignUp showAdditionalSign={showAdditionalSign} setShowAdditionalSign={setShowAdditionalSign} />}
        </div>
    );
};

export default Logedin;