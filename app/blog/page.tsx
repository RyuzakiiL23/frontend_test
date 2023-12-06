'use client'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import LHeader from '@/components/LHeader';
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Cookies from 'universal-cookie';

export default function Blog() {
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
          <h1 className='text-center font-bold text-4xl md:text-6xl mb-10'>Blog</h1>
          <p className='text-center'>
            Welcome to House Of Wisdom where knowledge finds its home and learning becomes a collaborative journey. At House Of Wisdom, we believe in the power of education to transform lives, and our Portfolio Project is dedicated to facilitating meaningful connections between students seeking academic support and teachers eager to share their expertise.
          </p>
        </div>
        <div className='flex relative mt-10 mb-10 sm:mb-20 h-[265px] sm:h-[400px] gap-5 sm:gap-20'>
          <div className='flex flex-col w-full sm:w-1/2 text-center justify-center'>
            <h2 className='mb-5 text-2xl font-extrabold text-overlay0'>Our Vision</h2>
            <p>
              The Portfolio Project addresses a common challenge faced by students—finding reliable academic assistance—and taps into the wealth of knowledge possessed by teachers, often university students, who are ready to provide tutoring services. Our vision is to bridge the gap between learners and educators, creating a platform that enhances the learning experience for both.
            </p>
          </div>
          <div className='w-full sm:w-1/2 bg-11 bg-no-repeat bg-contain bg-center rounded-md'></div>
        </div>
        <div className='flex relative mt-10 mb-10 sm:mb-20 gap-5 sm:gap-20 items-center'>
          <h2 className='w-full sm:w-1/3 mb-5 text-3xl sm:text-4xl font-extrabold text-overlay0 text-center'>What Sets Us Apart?</h2>
          <div className='w-full sm:w-2/3'>
            <h3 className='text-2xl'>Not a Replacement, but an Enhancement: </h3>
            <p>
              House Of Wisdom recognizes the value of formal education systems and institutions. We do not aim to replace them; instead, we complement existing structures by offering a dynamic platform for personalized tutoring and assistance.
            </p>
            <h3 className='text-2xl  mt-5'>No Degrees, Just Knowledge: </h3>
            <p>
              We don't confer degrees or certifications. Our focus is on the immediate needs of individual students and teachers. The Portfolio Project is a space where knowledge is shared, fostering a supportive and collaborative learning environment.
            </p>
            <h3 className='text-2xl mt-5'>Addressing Specific Challenges:</h3>
            <p>
              While we acknowledge broader issues in education, such as access and affordability, House Of Wisdom primarily focuses on addressing the immediate challenges faced by students and teachers. We believe that by connecting individuals, we contribute to a more accessible and personalized learning experience.
            </p>
          </div>
        </div>
        <div className='mt-10 mb-10 sm:mb-20'>
          <h2 className='text-3xl sm:text-4xl font-extrabold text-overlay0 text-center mb-5'>Who Benefits?</h2>
          <div className='flex relative mb-10 sm:mb-20 items-center'>
            <h3 className='w-full sm:w-1/3 text-2xl font-extrabold text-center bg-7 bg-contain bg-no-repeat h-[200px] bg-center text-purple-300 '>Students</h3>
            <p className='w-full sm:w-2/3'>
              Whether you're grappling with a challenging subject, preparing for exams, or seeking guidance on a project, House Of Wisdom is here for you. Our platform connects you with experienced teachers who are dedicated to helping you succeed on your academic journey.
            </p>
          </div>
          <div className='flex relative mb-10 sm:mb-20 items-center'>
            <p className='w-full sm:w-2/3'>
              Are you a university student with a passion for a specific subject? Join our community of educators and share your knowledge with fellow students. The Portfolio Project not only provides an avenue for earning income but also offers a unique opportunity to gain valuable teaching experience.
            </p>
            <h3 className='w-full bg-9 bg-contain bg-no-repeat h-[200px] bg-center sm:w-1/3 text-2xl font-extrabold text-overlay0 text-center'>Teachers</h3>
          </div>
        </div>
        <div></div>
      </div>
      <Footer />
    </main>
  )
}