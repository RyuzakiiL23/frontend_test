'use client'

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Logedin from './Logedin';
import Cookies from 'universal-cookie';

const LHeader = () => {
    const [showAdditionalContent, setShowAdditionalContent] = useState(false);
    const cookies = new Cookies();
    const token = cookies.get('authToken');
    const [data, setData] = useState('')
    const handleClick = () => {
        setShowAdditionalContent(!showAdditionalContent);
    };

    useEffect(() => {
    const fetchDataFunction = async () => {
      try {
        const res = await fetch(`https://azure.ryu23.tech/api/v1/users/${token}`);
        const jsonRes = await res.json();
        setData(jsonRes.user_name);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchDataFunction();
  }, []);

    return (
        <header className='mocha z-50 sticky top-0 flex justify-between bg-base h-20 items-center px-2 shadow-md'>
            <Link className='flex cursor-pointer w-20' href="/">
            <div className='flex cursor-pointer w-30 '>
                <div className='sm:m-10 lg:mr-2 p-2 m-2 bg-logo bg-contain bg-no-repeat relative flex h-8 w-8 cursor-pointer'></div>
                <div className='mt-10 lg:bg-how lg:bg-contain lg:bg-no-repeat lg:h-8 lg:w-44 cursor-pointer '></div>
            </div>
            </Link>
            <ul className='flex text-lavender space-x-auto place-content-center gap-x-4'>
                <Link href="/">
                    <li className='cursor-pointer hover:text-mauve'>Home</li>
                </Link>
                
                <Link href="/about">
                    <li className='cursor-pointer hover:text-mauve'>About</li>
                </Link>
                <Link href="/blog">
                    <li className='cursor-pointer hover:text-mauve'>Blog</li>
                </Link>
                {showAdditionalContent && <Logedin showAdditionalContent={showAdditionalContent} setShowAdditionalContent={setShowAdditionalContent} />}
                <Link href="/teachers">
                    <li className='cursor-pointer hover:text-mauve'>Teachers</li>
                </Link>
            </ul>
            <div id='aligne_btn' className='sm:mr-10 m-3 flex space-x-2 items-center  text-base rounded-lg bg-mauve hover:bg-pink px-2'>
                <div className='bg-catkout h-5 sm:w-5 bg-contain rounded-full '></div>
                <button onClick={handleClick} className=' text-left'>{data}</button>
            </div>
        </header>
    );
};

export default LHeader;