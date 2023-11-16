'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
        <header className='mocha z-50 sticky top-0 flex justify-between bg-base h-10 items-center px-2 shadow-md'>
            <Link className='flex cursor-pointer w-20' href="/">
                <div className=' relative flex h-5 w-5 cursor-pointer items'>
                    <Image
                        alt='image'
                        src='/graduate.png'
                        layout='fill'
                        objectFit='contain'
                        objectPosition='left'
                    />
                </div>
                <div className=' text-mauve ml-1'><h1>KLS</h1></div>
            </Link>
            <ul className='flex text-lavender space-x-auto place-content-center gap-x-4'>
                <Link href="/">
                    <li className='cursor-pointer'>Home</li>
                </Link>
                {showAdditionalContent && <Login showAdditionalContent={showAdditionalContent} setShowAdditionalContent={setShowAdditionalContent} />}
                {showAdditionalSign && <SignUp showAdditionalSign={showAdditionalSign} setShowAdditionalSign={setShowAdditionalSign} />}
                <Link href="/about">
                    <li className='cursor-pointer'>About</li>
                </Link>
                <Link href="/blog">
                    <li className='cursor-pointer'>Blog</li>
                </Link>
                <Link href="/teachers">
                    <li className='cursor-pointer'>Teachers</li>
                </Link>
            </ul>
            <div id='aligne_btn' className='flex text-base'>
                <button onClick={handleSignUp} className='text-sapphire mr-3'>Sign Up</button>
                <button onClick={handleClick} className=' text-left rounded-lg bg-mauve px-2'>Log in</button>
            </div>
        </header>
    );
};

export default Header;
