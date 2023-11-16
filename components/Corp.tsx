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
        <div className=' relative flex h-fil w-2/3 items ml-20'>
          <Image
            alt='image'
            src='/1.png'
            layout='fill'
            objectFit='contain'
          />
        </div>
      </div>


      <div id='course' className='flex space-x-1 w-full h-96 mb-28'>
        <div className=' relative flex h-fil w-2/3 items ml-20 '>
          <Image
            alt='image'
            src='/2.png'
            layout='fill'
            objectFit='contain'
            objectPosition='left'
          />
        </div>
        <div className=' w-1/2 ml-20 mt-20 '>
          <div className='text-2xl font-extrabold text-overlay0 mb-5'>Start learning with us now</div>
          <ul className='text-text'>
            <li>Start learning from your experience</li>
            <li>Enhance your skills with us now</li>
            <li>Do your favorite course</li>
          </ul>
        </div>
      </div>

      <div id='registration' className='flex relative space-x-1 w-full h-96'>
        <div className=' w-1/2 ml-20 mt-20 '>
          <div className='text-2xl font-extrabold text-overlay0 mb-5 mt-10'>Start learning by creating free account and get register</div>
        </div>
        <div className=' relative flex h-fil w-2/3 items ml-20 '>
          <Image
            alt='image'
            src='/33.png'
            layout='fill'
            objectFit='contain'
          />
        </div>
      </div>



      <div id='subscribe' className='mb-20 flex relative items-center mr-20 ml-20 mt-20 h-20 bg-purple-300 text-overlay0'>
        <div className=' w-1/3 h-1/2 m-5 bg-overlay2 flex items-center justify-center '>Your name</div>
        <div className=' flex items-center justify-center w-1/3  h-1/2 bg-overlay2'>Email</div>
        <button className=' w-1/3 h-1/2 m-5 bg-yellow'>Subscribe</button>
      </div>

    <div  id='community' className=' bg-heropattern bg-no-repeat bg-contain flex relative h-80 max-md:w-[80%] transition-all w-1/2 mx-auto'>
      <div className='flex flex-col w-[40%]'>
        <h1 >Start growing with our communityhero-pattern</h1>
        <p >Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
        <button className='rounded-lg px-4 py-1 bg-green text-surface0 font-bold '>Join community on Discord</button>
      </div>
      </div>
      {showAdditionalSign && <SignUp showAdditionalSign={showAdditionalSign} setShowAdditionalSign={setShowAdditionalSign} />}
    </section>
  )
}

export default Corp