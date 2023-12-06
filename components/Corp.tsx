'use client'
import Image from 'next/image'
import React from 'react'
import SignUp from './SignUp';
import { useState } from 'react';
function Corp() {

  const [showAdditionalSign, setShowAdditionalSign] = useState(false);
    
  const handleSignUp = () => {
      setShowAdditionalSign(!showAdditionalSign);
  };

  return (
    <section className='mocha mt-20 relative flex flex-col flex-grow'>
      <div id='main' className='flex space-x-1 w-full h-96 mb-28'>
        <div className=' w-1/2 ml-20 mt-20 '>
          <div className='text-2xl font-extrabold text-overlay0 mb-5'>Join our comunity</div>
          <div className='text-text mb-5'>Either here looking for assistance or to help your peers feel free to join our comunity and share your knowledge. By joining us you make our comunity more bigger and much more stronger</div>
          <button onClick={handleSignUp} className='rounded-lg px-4 py-1 bg-green text-surface0 font-bold '>Join Now</button>
        </div>
        <div className='h-fil w-2/3 flex relative justify-center'>
          <div className=' bg-1 bg-contain bg-no-repeat relative flex h-fil w-2/3'></div>
        </div>
      </div>


      <div id='registration' className='md:flex md:flex-row flex flex-col items-center relative space-x-1 w-full h-auto md:h-96 mb-20'>
        <div className=' bg-2 bg-contain bg-no-repeat relative flex h-60 w-2/3 md:h-96 md:w-2/3 items ml-20 '></div>
        <div className=' w-1/2 md:ml-20 m-auto md:mt-20 '>
          <div className='text-2xl font-extrabold text-overlay0 mb-5 mt-10'>Why House Of Wisdom</div>
          <ul className='text-text'>
            <li>At House Of Wisdom, we believe in the power of education to transform lives, and our Portfolio Project is dedicated to facilitating meaningful connections between Alx students seeking academic support and other Alx students eager to share their expertise.</li>
          </ul>
        </div>
      </div>

      <div id='registration' className='md:flex md:flex-row flex flex-col items-center relative space-x-1 w-full h-auto md:h-96 mb-20'>
        <div className=' w-1/2 md:ml-20 m-auto mt-20 '>
          <button onClick={handleSignUp} className='rounded-lg px-4 py-1 bg-green text-surface0 font-bold '>Join Our Nework</button>
          <div className='text-2xl font-extrabold text-overlay0 mb-5 mt-10'>House Of Wisdom network</div>
          <div className='text-text mb-5 mt-10'>Once you join us you will be in direct contact with your peers to scheduel for meetings share you toughts and help each others.</div>
        </div>
        <div className=' bg-14 bg-contain bg-no-repeat relative flex h-96 w-2/3 md:h-fil md:w-2/3 items ml-20 '>

        </div>
      </div>

      {showAdditionalSign && <SignUp showAdditionalSign={showAdditionalSign} setShowAdditionalSign={setShowAdditionalSign} />}
    </section>
  )
}

export default Corp