'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import Login from './Login';
import SignUp from './SignUp';

const Header = () => {
    const [showAdditionalContent, setShowAdditionalContent] = useState(false);

    const handleClick = () => {
        setShowAdditionalContent(!showAdditionalContent);
    };

    const [showAdditionalSign, setShowAdditionalSign] = useState(false);
    
    const handleSignUp = () => {
        setShowAdditionalSign(!showAdditionalSign);
    };

    return (
        <header className='mocha z-50 sticky top-0 flex justify-between bg-base h-20 items-center  px-2 shadow-md'>
            <Link className='flex cursor-pointer w-auto sm:w-20' href="/">
            <div className='flex cursor-pointer w-30 justify-center '>
            <div className='sm:m-10 lg:mr-2 p-2 m-2 bg-logo bg-contain bg-no-repeat relative flex h-8 w-8 cursor-pointer'>
            </div>
                <div className='mt-10 lg:bg-how lg:bg-contain lg:bg-no-repeat lg:h-8 lg:w-44 cursor-pointer'></div>
            </div>
            </Link>
            <ul className='flex text-lavender space-x-auto place-content-center gap-x-4'>
                <Link href="/">
                    <li className='cursor-pointer hover:text-mauve'>Home</li>
                </Link>
                {showAdditionalContent && <Login showAdditionalContent={showAdditionalContent} setShowAdditionalContent={setShowAdditionalContent} />}
                {showAdditionalSign && <SignUp showAdditionalSign={showAdditionalSign} setShowAdditionalSign={setShowAdditionalSign} />}
                <Link href="/about">
                    <li className='cursor-pointer hover:text-mauve'>About</li>
                </Link>
                <Link href="/blog">
                    <li className='cursor-pointer hover:text-mauve'>Blog</li>
                </Link>
                <Link href="/teachers">
                    <li className='cursor-pointer hover:text-mauve'>Teachers</li>
                </Link>
            </ul>
            <div id='aligne_btn' className='sm:mr-10 sm:flex text-base w-20 sm:w-auto gap-2 px-2'>
                <button onClick={handleSignUp} className='text-sapphire hover:text-mauve text-sm'>Sign Up</button>
                <button onClick={handleClick} className=' text-left rounded-lg bg-mauve px-2 hover:bg-pink'>Log in</button>
            </div>
        </header>
    );
};

export default Header;
