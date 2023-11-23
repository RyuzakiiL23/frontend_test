'use client'
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React, { useEffect, useState } from 'react';
import Image from 'next/image'
import Cookies from 'universal-cookie';
import LHeader from '@/components/LHeader';

export default function Teachers() {
  const [data, setData] = useState([]);
  const cookies = new Cookies();
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const token = cookies.get('authToken');
    if (token) {
        setAuthenticated(true);
    }
  }, []);

  useEffect(() => {
    const fetchDataFunction = async () => {
      try {
        const res = await fetch('http://15.188.65.41/api/v1/teachers');
        const jsonRes = await res.json();
        setData(jsonRes);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchDataFunction();
  }, []);

  return (
    <main className=" mocha bg-surface0">
      {authenticated ? <LHeader /> : <Header/>}
      <div className='mocha flex flex-wrap relative w-[1060px] m-auto gap-4 place-items-center mt-20 mb-20'>
        {data.map((item: any): any => (
          <div onClick={() => window.location.href = `/teachers/${item.id}`}  className='flex cursor-pointer flex-col relative w-[32%] h-[528px] border border-base rounded-3xl items-center bg-overlay2 shadow-2xl shadow-indigo-500/50'>
            <div className='w-[100%] h-2/3 border border-base border-y-0 border-t-0 rounded-3xl bg-catkout bg-contain bg-no-repeat bg-white shadow-sm shadow-indigo-500/50'></div>
            <div className='flex relative w-[90%]'>
              <div className='text-text text-start font-bold mt-4' key={item.id}>{item.user_name}</div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </main>
  );
}
