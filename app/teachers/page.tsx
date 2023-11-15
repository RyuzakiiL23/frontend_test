'use client'
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React, { useEffect, useState } from 'react';
import Image from 'next/image'

export default function Teachers() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchDataFunction = async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const jsonRes = await res.json();
        setData(jsonRes);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchDataFunction();
  }, []);

  return (
    <main className=" mocha bg-surface0 overflow-hidden">
      <Header />
      <div className='mocha flex flex-wrap relative w-[1060px] m-auto gap-4 place-items-center mt-20'>
        {data.map((item: any): any => (
          <div className='flex flex-col relative w-[32%] h-[528px] border border-base rounded-3xl items-center bg-overlay2 shadow-2xl shadow-indigo-500/50'>
            <div className='w-[100%] h-2/3 border border-base border-y-0 border-t-0 rounded-3xl bg-catkout bg-contain bg-no-repeat bg-white shadow-sm shadow-indigo-500/50'></div>
            <div className='flex relative w-[90%]'>
              <div className='text-text text-start font-bold mt-4' key={item.id}>{item.name}</div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </main>
  );
}
