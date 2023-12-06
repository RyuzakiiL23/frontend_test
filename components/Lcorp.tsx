'use client'
import React from 'react'
import {useState, useEffect} from 'react';

function Lcorp() {
  const [data, setData] = useState([]);
  const [etat, setEtat] = useState('');
  const [err, setErr] = useState('');

    useEffect(() => {
    if (data.length === 0) {
      setEtat('h-[367px]');
    } else {
      setEtat('');
    }
  }, [data.length]);

    useEffect(() => {
    const fetchData = async () => {
      try {
        
          const res = await fetch('https://azure.ryu23.tech/api/v1/teachers');
          const jsonRes = await res.json();
          setData(jsonRes);
        
      } catch (error) {
        setErr(String(error));
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);


  return (
    <div className='w-[380px] sm:w-[600px] md:w-auto lg:w-[1060] m-auto '>
      <section className=' text-center mt-20 mocha md:flex md:flex-row sm:flex flex-col flex items-center relative h-auto'>
        <div className=' w-[100%]'>
          <p className='text-lavender text-[50px] '>Stat learning right now!</p>
        </div>
      </section>
      <section className=' mt-10 mb-10 mocha flex m-auto relative h-[300px]'>
          <div className='rounded-3xl  bg-7 bg-no-repeat m-auto sm:w-[80%] md:w-[40%] h-[100%]'>
            <p className='md:text-[40px] text-[30px] text-maroon font-bold p-10'>Check available teachers</p>
            {/* <p className='text-[20px] text-base font-semibold pl-10 mb-5 '>Share your knowledge will yourr peers through them jouney </p> */}
            <button onClick={() => window.location.href = '/teachers'} className='rounded bg-green text-maroon font-semibold ml-10 p-2'>Here</button>
          </div>
      </section>




      
      <section className=' text-center mocha md:flex md:flex-row sm:flex flex-col flex items-center relative h-screen'>
        <div className='md:w-1/2 w-[100%]'>
          <p className='text-lavender text-[50px] '>Teachers of the mounth</p>
          <p className='text-text text-[24px]'>Teachers with the highest reviews rate</p>
          <div className='text-yellow-500 text-xl'>&#9733;&#9733;&#9733;&#9733;&#9733;</div>
        </div>
        <div className='flex relative mt-10 md:mt-0 md:w-1/2 w-[80%] h-[60%] space-around gap-4 justify-center'>
            {
            
            data.slice(0, 2).map((item: any) => (
              <div
                onClick={() => window.location.href = `/teachers/${item.id}`}
                className='flex cursor-pointer flex-col relative w-[47%] h-auto border border-base rounded-3xl items-center bg-text shadow-2xl shadow-indigo-500/50'
                key={item.id}
              >
                <div className='w-[100%] h-2/3 border border-base border-y-0 border-t-0 rounded-3xl bg-catkout bg-contain bg-no-repeat bg-white shadow-sm shadow-indigo-500/50'></div>
                <div className='flex flex-col relative w-[90%]'>
                  <div className='text-[#221d3b] text-start text-lg font-bold mt-4'>
                    <div>{item.user_name}</div>
                    <div></div>
                  </div>
                  <div className='flex gap-2 text-sm text-text text-start font-bold'>
                    <div className='text-surface2'>Course: </div>
                    <div className='text-[#221d3b] text-sm'> {item.course_name}</div>
                  </div>
                  <div className='text-base text-xs text-start mt-4'>
                    {item.description.split(' ').slice(0, 20).join(' ')}
                    {item.description.split(' ').length > 20 ? '...' : ''}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </section>

      <section className=' mocha flex m-auto relative h-screen'>
          <div className='rounded-3xl  bg-9 bg-no-repeat m-auto w-[70%] h-[70%]'>
            <p className='text-[40px] text-purple-800 font-bold p-10'>Become a teacher !!</p>
            <button onClick={() => window.location.href = '/myprofil'} className='rounded bg-green text-purple-800 font-semibold ml-10 p-2'>Create your teacher profil</button>
          </div>
      </section>
    </div>
  )
}

export default Lcorp