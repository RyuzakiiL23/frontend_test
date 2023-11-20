import Footer from '@/components/Footer'
import LHeader from '@/components/LHeader'
import React from 'react'

export default function page() {
  return (
    <main className='mocha bg-surface0 '>
      <LHeader />
    <div className='mocha overflow-hidden w-[1060px] m-auto text-text'>
      <div className='mocha flex relative gap-8  mt-20'>
        <div className='left=0 bg-catkout h-48 w-48 bg-contain bg-no-repeat rounded-full'></div>
        <div className='flex flex-col border right-0 h-auto p-4 w-2/3'>
          <p>About me</p>
          <p>Welcome to House Of Wisdom where knowledge finds its home and learning becomes a collaborative journey. At House Of Wisdom, we believe in the power of education to transform lives, and our Portfolio Project is dedicated to facilitating meaningful connections between students seeking academic support and teachers eager to share their expertise.</p>
        </div>
      </div>

      <div className='mocha flex relative gap-8 mt-20'>
        <div className='flex justify-center items-center left=0 w-1/5 border h-16'>
          <h1 className=''> Set Teacher profile ▼ </h1>
        </div>
      </div>

      <div className='mocha flex relative gap-8 mt-20'>
        <div className='flex justify-center items-center left=0 w-1/5 border h-16'>
          <h1 className=''> Courses </h1>
        </div>
        <div className='flex flex-col border right-0 h-auto p-4 w-1/3'>
          <input className='' type="text" />
        </div>
      </div>

      <div className='mocha flex relative gap-8 mt-20'>
        <div className='flex justify-center items-center left=0 w-1/5 border h-16'>
          <h1 className=''> About Me </h1>
        </div>
        <div className='flex flex-col relative border right-0 h-48 p-4 w-2/3'>
          <input className='h-full' type="text" />
        </div>
      </div>

      <div className='flex justify-end mr-32 mt-10 gap-6 mb-20'>
        <button className=' text-base bg-red bold-lg rounded w-20 h-10'>Delete</button>
        <button className=' bg-green text-base bold-lg rounded w-20 h-10'>Save</button>
      </div>

    </div>
    <Footer/>
    </main>
  )
}
