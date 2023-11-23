'use client'
import Footer from '@/components/Footer'
import Header from '@/components/Header';
import LHeader from '@/components/LHeader'
import React, { useEffect, useState } from 'react'
import Cookies from 'universal-cookie';

export default function page() {
  const cookies = new Cookies();
  const [authenticated, setAuthenticated] = useState(false);

  const [data, setData] = useState({ user_name: '', email: '' })
  const token = cookies.get('authToken')
  const [err, setErr] = useState('');

    // State to hold the selected value
    const [selectedValue, setSelectedValue] = useState('');
  
    // Function to handle the change in dropdown selection
    const handleSelectChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
      setSelectedValue(event.target.value);
    };

    const [selectedText, setSelectedText] = useState('');
  
    const handleSelectText = (event: { target: { value: React.SetStateAction<string>; }; }) => {
      setSelectedText(event.target.value);
    };


    const handleSubmit = async () => {
        try {
            const userData = {
                course_name: selectedValue,
                description: selectedText,
                user_id: token,
            };
              console.log(userData)

            const response = await fetch('http://15.188.65.41/api/v1/teachers', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            const data = await response.json();
            console.log(data);
            window.location.href = '/teachers';

            // //id from backend needed
            // if (data.message === 'success') {
            // }
        } catch (error) {
            setErr(String(error))
            console.error('Error:', error);
        }
    };


  useEffect(() => {
    const token = cookies.get('authToken');
    if (token) {
        setAuthenticated(true);
    }
  }, []);

  useEffect(() => {
    const fetchDataFunction = async () => {
      try {
        const res = await fetch(`http://15.188.65.41/api/v1/users/${token}`);
        const jsonRes = await res.json();
        setData(jsonRes);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchDataFunction();
  }, []);

  return (

    <main className='mocha bg-surface0 '>
    {authenticated ? <LHeader /> : <Header/>}
    <div className='mocha overflow-hidden w-[1060px] m-auto text-text'>
      <div className='mocha flex relative gap-8  mt-20'>
        <div className='left=0 bg-catkout h-48 w-48 bg-contain bg-no-repeat rounded-full'></div>
        <div className='flex flex-col border right-0 h-auto p-4 w-2/3'>
          <p>UserName: {data.user_name}</p>
          <p>Email: {data.email}</p>
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
        <div className='flex relative text-base flex-col border right-0 h-auto p-4 w-1/3'>
          <select id="dropdown" value={selectedValue} onChange={handleSelectChange} className='w-full h-full'>
            <option value="">Select...</option>
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

      <div className='mocha flex relative gap-8 mt-20'>
        <div className='flex justify-center items-center left=0 w-1/5 border h-16'>
          <h1 className=''> About Me </h1>
        </div>
        <div className='flex flex-col relative border right-0 h-48 p-4 w-2/3'>
          <textarea value={selectedText} onChange={handleSelectText} className='h-full text-base p-2' />
        </div>
      </div>

      <div className='flex justify-end mr-32 mt-10 gap-6 mb-20'>
        <button className=' text-base bg-red bold-lg rounded w-20 h-10'>Delete</button>
        <button onClick={handleSubmit} className=' bg-green text-base bold-lg rounded w-20 h-10'>Save</button>
      </div>

    </div>
    <Footer/>
    </main>
  )
}
