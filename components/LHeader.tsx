'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logedin from './Logedin';

const LHeader = () => {
    const [showAdditionalContent, setShowAdditionalContent] = useState(false);

    const handleClick = () => {
        setShowAdditionalContent(!showAdditionalContent);
    };

    return (
        <header className='mocha z-50 sticky top-0 flex justify-between bg-base h-20 items-center px-2 shadow-md'>
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
                
                <Link href="/about">
                    <li className='cursor-pointer'>About</li>
                </Link>
                <Link href="/blog">
                    <li className='cursor-pointer'>Blog</li>
                </Link>
                {showAdditionalContent && <Logedin showAdditionalContent={showAdditionalContent} setShowAdditionalContent={setShowAdditionalContent} />}
                <Link href="/teachers">
                    <li className='cursor-pointer'>Teachers</li>
                </Link>
            </ul>
            <div id='aligne_btn' className='flex space-x-2 items-center  text-base rounded-lg bg-mauve px-2'>
                <div className='bg-catkout h-5 w-5 bg-contain rounded-full'></div>
                <button onClick={handleClick} className=' text-left '>variable</button>
            </div>
        </header>
    );
};

export default LHeader;