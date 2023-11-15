import Image from 'next/image'
import React from 'react'

function Footer() {
  return (
    <>
      <footer className='flex justify-between mocha bg-base bottom-0 w-full  text-lavender text-center p-4 pr-12 pl-12 h-28 '>
        <div className='flex cursor-pointer w-20 mt-5 justify-center'>
          <div className=' relative flex h-5 w-5 cursor-pointer'>
            <Image 
              alt='image'
              src='/graduate.png'
              layout='fill'
              objectFit='contain'
              objectPosition='left'
            />
          </div>
          <div className=' text-mauve ml-1'><h1>KLS</h1></div>
        </div>
        <div className='cursor-pointer w-28'>
          <div className='text-xs text-left pb-2'>Follow us</div>
          <div className='flex justify-between gap-2 absolute center'>
            <div className=' relative flex h-5 w-5 cursor-pointer'>
              <Image
                alt='image'
                src='/graduate.png'
                layout='fill'
                objectFit='contain'
                objectPosition='left'
              />
            </div>
            <div className=' relative flex h-5 w-5 cursor-pointer'>
              <Image 
                alt='image'
                src='/graduate.png'
                layout='fill'
                objectFit='contain'
                objectPosition='left'
              />
            </div>
            <div className=' relative flex h-5 w-5 cursor-pointer'>
              <Image 
                alt='image'
                src='/graduate.png'
                layout='fill'
                objectFit='contain'
                objectPosition='left'
              />
            </div>
            <div className=' relative flex h-5 w-5 cursor-pointer'>
              <Image 
                alt='image'
                src='/graduate.png'
                layout='fill'
                objectFit='contain'
                objectPosition='left'
              />
            </div>
          </div>
        </div>
        <div className='cursor-pointer w-28'>
          <div className='text-xs text-left pb-2'>Useful Links</div>
          <div>
            <ul className='text-left text-xs'>
              <li>Our Projects</li>
              <li>FAQ's</li>
              <li>News And Updates</li>
            </ul>
          </div>
        </div>
        <div className='cursor-pointer w-28'>
          <div className='text-xs text-left pb-2'>Contacts</div>
          <div>
            <ul className='text-left text-xs'>
              <li>Address</li>
              <li>Email</li>
              <li>Phone Numbers</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer