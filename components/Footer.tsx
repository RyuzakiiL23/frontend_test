import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <>
    <footer className='flex flex-col md:flex-row md:flex md:justify-between items-center md:items-start justify-center mocha bg-base bottom-0 w-full  text-lavender text-center pt-14 p-4 pr-12 pl-12 md:h-48 h-98 '>
        <Link className='flex cursor-pointer md:w-20 w-auto' href="/">
        <div className='flex cursor-pointer w-30 mt-8 justify-center'>
          <div className=' bg-logo bg-contain bg-no-repeat relative flex h-8 w-8 cursor-pointer mb-10'>
          </div>
          <div className='bg-how bg-contain bg-no-repeat relative flex h-8 w-32 cursor-pointer'></div>
        </div>
        </Link>
        <div className='md:block flex flex-col cursor-pointer w-28'>
          <div className='text-lg text-peach md:text-left text-center pb-2'>Follow us</div>
          <div className='flex justify-between gap-2 md:absolute center'>
            <div className=' bg-insta bg-contain bg-no-repeat relative flex h-10 w-10 cursor-pointer'>
            </div>
            <div className=' bg-facebook bg-contain bg-no-repeat relative flex h-10 w-10 cursor-pointer'>
            </div>
            <div className=' bg-twitter bg-contain bg-no-repeat relative flex h-10 w-9 cursor-pointer'>
            </div>
            <div className=' bg-linkedin bg-contain bg-no-repeat relative flex h-10 w-9 cursor-pointer'>
            </div>
          </div>
        </div>
        <div className='cursor-pointer w-28'>
          <div className='text-lg text-peach md:text-left text-center pb-2'>Useful Links</div>
          <div>
            <ul className='md:text-left text-center text-xs text-mauve mb-5'>
              <li>Our Projects</li>
              <li>FAQ's</li>
              <li>News And Updates</li>
            </ul>
          </div>
        </div>
        <div className='cursor-pointer w-48'>
          <div className='text-lg text-peach md:text-left text-center pb-2 '>Contacts</div>
          <div>
            <ul className='md:text-left text-center text-xs text-mauve mb-5'>
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