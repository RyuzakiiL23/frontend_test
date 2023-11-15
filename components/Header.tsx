'use client'
import Link from 'next/link';
import Image from 'next/image'
import React, { useState } from 'react'

function Header() {

    const [showAdditionalContent, setShowAdditionalContent] = useState(false);

    const handleClick = () => {
      // Toggle the state to show or hide the additional content
      setShowAdditionalContent(!showAdditionalContent);
    };
  
    const additionalContent = (
      <div className='mocha flex flex-col shadow-2xl place-content-around rounded-lg absolute h-80 w-72 mt-40 items-center bg-base'>
        <h1 className='text-text font-bold '>Login</h1>
        <input className='flex rounded justify-center w-2/3 h-8 px-2 text-base font-medium' type='username' placeholder='Username' />
        <input className='flex rounded justify-center w-2/3 h-8 px-2 text-base font-medium' type='password' placeholder='Password' />
        <button className='border bg-green text-base rounded px-2'>Submit</button>
        <div className='flex flex-col items-center'>
          <h1 className='text-text text-xs'>Don't have an account?</h1>
          <button className='text-maroon font-bold text-xs'>Sign Up</button>
        </div>
        <h1 className='text-text text-xs'>Forget password?</h1>
      </div>
    );


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
        {showAdditionalContent && additionalContent}
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
      <div id='aligne_btn'  className='flex text-base'>
        <button onClick={handleClick} className=' text-left rounded-lg bg-mauve px-2'>Log in</button>
      </div>
    </header>
  )
}

export default Header