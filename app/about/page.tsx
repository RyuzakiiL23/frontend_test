'use client'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import LHeader from '@/components/LHeader';
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Cookies from 'universal-cookie';

export default function About() {
  const cookies = new Cookies();
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const token = cookies.get('authToken');
    if (token) {
        setAuthenticated(true);
    }
  }, []);
  return (

    <main className=" mocha text-text bg-surface0">
      {authenticated ? <LHeader /> : <Header/>}
      <div className='mocha flex flex-wrap relative w-[90%] m-auto'>
        <div className='flex flex-col mt-20 mb-10 w-full'>
          <h1 className='text-center font-bold text-4xl md:text-6xl mb-20'>About Us</h1>
    <p className="text-second text-center text-lg">About House Of Wisdom</p>
    <div className='flex justify-center mb-5'>
        <a href="https://github.com/Kerzers/houseofwisdom" target="_blank" className=" bg-github bg-no-repeat bg-contain h-10 w-10 hover:opacity-90"></a>
    </div>
          <p className='text-center mb-20'>
            Welcome to House Of Wisdom where knowledge finds its home and learning becomes a collaborative journey. At House Of Wisdom, we believe in the power of education to transform lives, and our Portfolio Project is dedicated to facilitating meaningful connections between students seeking academic support and teachers eager to share their expertise.
          </p>
    <p className="text-second text-center text-lg mb-5">House Of Wisdom Team</p>
        </div>
<section className="grid grid-cols-2 px-20 gap-5 max-lg:grid-cols-1 max-lg:px-8 max-sm:px-0 mb-20">
  <div className="bg-back border border-gray-300 rounded-sm">
    <div className="px-5 pt-5 pb-2 flex flex-col gap-[4px]">
      <h4 className="text-second font-bold">Omar El Hamrani</h4>
      <h4 className="text-prime font-medium">Front-end developer</h4>
      <p className="text-second text-justify">
        A passionate front-end developer with one year of experience in building websites and web applications.
      </p>
    </div>

    <div className="flex justify-center items-center px-5 pb-3 pt-[7px]">
      <div className="flex gap-1">
        <a href="https://twitter.com/RyuzakiiL23" target="_blank" className="bg-twitter2 bg-no-repeat bg-contain h-10 w-10 hover:opacity-90">
          {/* Image removed */}
        </a>
        <a href="https://github.com/RyuzakiiL23" target="_blank" className=" bg-github bg-no-repeat bg-contain h-10 w-10 hover:opacity-90">
          {/* Image removed */}
        </a>
      </div>
    </div>
  </div>
  <div className="bg-back border border-gray-300 rounded-sm">
    <div className="px-5 pt-5 pb-2 flex flex-col gap-[4px]">
      <h4 className="text-second font-bold">Ahlame Ahra</h4>
      <h4 className="text-prime font-medium">Back-end developer</h4>
      <p className="text-second text-justify">
        A passionate back-end developer with wide experience in ASP.NET, Flask, Django, Laravel
      </p>
    </div>
    <div className="flex justify-center items-center px-5 pb-3 pt-[7px]">
      <div className="flex gap-1">
        <a href="https://twitter.com/Dinamow2130" target="_blank" className="bg-twitter2 bg-no-repeat bg-contain h-10 w-10 hover:opacity-90">
          {/* Image removed */}
        </a>
        <a href="https://github.com/Kerzers" target="_blank" className="bg-github bg-no-repeat bg-contain h-10 w-10 hover:opacity-90">
          {/* Image removed */}
        </a>
      </div>

    </div>
  </div>
</section>



      </div>
      <Footer />
    </main>
  )
}