'use client'
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React, { useState } from 'react';

function Login() {
  const [showAdditionalContent, setShowAdditionalContent] = useState(false);

  const handleClick = () => {
    // Toggle the state to show or hide the additional content
    setShowAdditionalContent(!showAdditionalContent);
  };

  const additionalContent = (
    <div className='mocha flex flex-col shadow-2xl place-content-around rounded-lg absolute h-80 w-72 mt-20 mx-auto items-center bg-base'>
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
    <main className='overflow-hidden'>
      <Header />
      <div className='flex items-start justify-center h-screen w-full bg-pink-900'>
        <button onClick={handleClick} className=''>
          Click Me
        </button>

        {/* Render additional content based on state */}
        {showAdditionalContent && additionalContent}

      </div>
      <Footer />
    </main>
  );
}

export default Login;
