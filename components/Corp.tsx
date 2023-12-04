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
          <div className='text-2xl font-extrabold text-overlay0 mb-5'>Start learning with us now</div>
          <div className='text-text mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa laboriosam  voluptates sed beatae?</div>
          <button onClick={handleSignUp} className='rounded-lg px-4 py-1 bg-green text-surface0 font-bold '>Start learning</button>
        </div>
        <div className='h-fil w-2/3 flex relative justify-center'>
          <div className=' bg-1 bg-contain bg-no-repeat relative flex h-fil w-2/3'></div>
        </div>
      </div>


      <div id='registration' className='md:flex md:flex-row flex flex-col items-center relative space-x-1 w-full h-auto md:h-96 mb-20'>
        <div className=' bg-2 bg-contain bg-no-repeat relative flex h-60 w-2/3 md:h-96 md:w-2/3 items ml-20 '></div>
        <div className=' w-1/2 md:ml-20 m-auto md:mt-20 '>
          <div className='text-2xl font-extrabold text-overlay0 mb-5 mt-10'>Start learning with us now</div>
          <ul className='text-text'>
            <li>Start learning from your experience</li>
            <li>Enhance your skills with us now</li>
            <li>Do your favorite course</li>
          </ul>
        </div>
      </div>

      <div id='registration' className='md:flex md:flex-row flex flex-col items-center relative space-x-1 w-full h-auto md:h-96 mb-20'>
        <div className=' w-1/2 md:ml-20 m-auto mt-20 '>
          <div className='text-2xl font-extrabold text-overlay0 mb-5 mt-10'>Start learning by creating free account and get register</div>
        </div>
        <div className=' bg-14 bg-contain bg-no-repeat relative flex h-96 w-2/3 md:h-fil md:w-2/3 items ml-20 '>

        </div>
      </div>

      {showAdditionalSign && <SignUp showAdditionalSign={showAdditionalSign} setShowAdditionalSign={setShowAdditionalSign} />}
    </section>
  )
}

export default Corp