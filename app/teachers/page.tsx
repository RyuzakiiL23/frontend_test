'use client';
import React, { useEffect, useState } from 'react';
import Cookies from 'universal-cookie';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import LHeader from '@/components/LHeader';

export default function Teachers() {
  const [data, setData] = useState([]);
  const [authenticated, setAuthenticated] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');
  const [etat, setEtat] = useState('');
  const [err, setErr] = useState('');

  const cookies = new Cookies();

  const handleSelectChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setSelectedValue(event.target.value);
  };

  useEffect(() => {
    if (data.length === 0) {
      setEtat('h-[367px]');
    } else {
      setEtat('');
    }
  }, [data.length]);

  useEffect(() => {
    const token = cookies.get('authToken');
    if (token) {
      setAuthenticated(true);
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (selectedValue) {
          const userData = {
            course_name: selectedValue,
          };

          const response = await fetch(`https://azure.ryu23.tech/api/v1/teachers_search`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
          });
          const responseData = await response.json();
          setData(responseData);
        } else {
          const res = await fetch('https://azure.ryu23.tech/api/v1/teachers');
          const jsonRes = await res.json();
          setData(jsonRes);
        }
      } catch (error) {
        setErr(String(error));
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [selectedValue]);

  return (
    <main className="mocha bg-surface0">
      {authenticated ? <LHeader /> : <Header />}
      <div className='mocha flex flex-wrap relative w-max lg:w-[1060px] m-auto gap-2 place-items-center mt-20 mb-20'>
        <div className='mocha flex relative'>
          <div className='flex relative text-base flex-col border right-0 h-auto p-4 w-full'>
            <select
              id="dropdown"
              value={selectedValue}
              onChange={handleSelectChange}
              className='w-full h-full cursor-pointer'
            >
              <option value="">Select a course...</option>
              <option value="C">C</option>
              <option value="Python">Python</option>
              <option value="Javascript">Javascript</option>
              <option value="Java">Java</option>
              <option value="html/CSS">html/CSS</option>
              <option value="React">React</option>
              <option value="Git">Git</option>
              <option value="Bash">Bash</option>
              <option value="PHP">PHP</option>
              <option value="SQL">SQL</option>
            </select>
          </div>
        </div>
      </div>
      <div className={` ${etat} mocha flex flex-wrap relative w-screen lg:w-[1060px] m-auto gap-2 place-items-center justify-center mt-20 mb-20`}>
        {data.map((item: any) => (
          <div
            onClick={() => window.location.href = `/teachers/${item.id}`}
            className='flex cursor-pointer flex-col relative w-[70%] sm:w-[44%] md:w-[32%] h-[528px] border border-base rounded-3xl items-center bg-text shadow-2xl shadow-indigo-500/50'
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
      <Footer />
    </main>
  );
}
