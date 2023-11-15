import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Image from 'next/image'
import React from 'react'

export default function About() {
  return (
    <main className="overflow-hiden">
      <Header/>
      <div className='flex justify-center'>
        <h3 className=' mt-10 text-ceter'>this is the About page</h3>
      </div>
      <Footer/>
    </main>
  )
}