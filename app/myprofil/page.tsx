'use client'
import Footer from '@/components/Footer'
import Header from '@/components/Header';
import LHeader from '@/components/LHeader'
import React, { useEffect, useState } from 'react'
import Cookies from 'universal-cookie';

export default function page() {
  const cookies = new Cookies();
  const [authenticated, setAuthenticated] = useState(false);

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [cohort, setCohort] = useState('')
  const [data, setData] = useState({ user_name: '', email: '', first_name: '', last_name: '', location: '', user_discord: '', user_wtsp: '' })
  const token = cookies.get('authToken')
  const [err, setErr] = useState('');
  const [hide, setHide] = useState('flex flex-col relative ml-[-20000px] transition-all duration-1000 ease-in-out');
  const [hideTeacher, setHideTeacher] = useState('transition-all duration-1000 ease-in-out');
  const [selectedValue, setSelectedValue] = useState('');
  const [info, setInfo] = useState(true);
  const [aboutMe, setAboutMe] = useState('')
  const [course, setCourse] = useState('')
  const [teacherId, setTeacherId] = useState('')
  const [discord, setDiscord] = useState('')
  const [wtsp, setWtsp] = useState('')

    useEffect(() => {
    if (!token) {
      window.location.href = `/`;
    }
  }, []);

  const handleInfo = () => {
    if (info == true) {
      setInfo(false);
    } else {
      setInfo(true);
    }
  }

  const handleSelectChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
      setSelectedValue(event.target.value);
    };

  const handleDiscord = (event: { target: { value: React.SetStateAction<string>; }; }) => {
      setDiscord(event.target.value);
    };

  const handleWtsp = (event: { target: { value: React.SetStateAction<string>; }; }) => {
      setWtsp(event.target.value);
    };

    const handleFirstNameChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setLastName(event.target.value);
  };

  const handleCohortChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setCohort(event.target.value);
  };



  const handleTeacher = () => {
    // Toggle between classes based on the current state
    if (hide === 'ml-[-20000px] transition-all duration-1000 ease-in-out') {
      setHideTeacher('ml-[-2000px] transition-all duration-1000 ease-in-out')
      setHide('transition-all duration-1000 ease-in-out'); // Switch back to default or initial state
    } else {
      setHideTeacher(' transition-all duration-1000 ease-in-out')
      setHide('ml-[-20000px] transition-all duration-1000 ease-in-out'); // Apply the transition class
    }
  };

    const [selectedText, setSelectedText] = useState('');
  
    const handleSelectText = (event: { target: { value: React.SetStateAction<string>; }; }) => {
      setSelectedText(event.target.value);
    };

    const handleSubmit = async () => {
    try {

        let response;
        if (course) {
        const userData = {
            course_name: selectedValue,
            description: selectedText,
            user_discord: discord,
            user_wtsp: wtsp,
        };
        
        console.log(userData);
        
            response = await fetch(`https://azure.ryu23.tech/api/v1/teachers/${teacherId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });
        } else {
        const userData = {
            course_name: selectedValue,
            description: selectedText,
            user_discord: discord,
            user_wtsp: wtsp,
            user_id: token,
        };
        
        console.log(userData);
            response = await fetch('https://azure.ryu23.tech/api/v1/teachers', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });
        }

        const data = await response.json();
        console.log(data.description);
        window.location.reload();

    } catch (error) {
        setErr(String(error));
        console.error('Error:', error);
    }
};



    const handleSave = async () => {
      try {
          const userData = {
              first_name: firstName,
              last_name: lastName,
              location: cohort,
              user_discord: discord,
              user_wtsp: wtsp,
          };
            console.log(userData)

          const response = await fetch(`https://azure.ryu23.tech/api/v1/users/${token}`, {
              method: 'PUT',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify(userData),
          });

          window.location.reload();

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
        const res = await fetch(`https://azure.ryu23.tech/api/v1/teachers`);
        const jsonRes = await res.json();
        if (jsonRes.length == 0) {
          console.log('teachers empty')
        } else {
          jsonRes.map((item: any) => {
            if (item.user_id === token ) {
          setAboutMe(item.description)
          setCourse(item.course_name)
          setTeacherId(item.id)
        } else {
          console.log('user missing')
        }
      })
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchDataFunction();
  }, []);

  useEffect(() => {
    const fetchDataFunction = async () => {
      try {
        const res = await fetch(`https://azure.ryu23.tech/api/v1/users/${token}`);
        const jsonRes = await res.json();
        setData(jsonRes);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchDataFunction();
  }, []);

  const handleDelete = async () => {
  try {
      const response = await fetch(`https://azure.ryu23.tech/api/v1/teachers/${teacherId}`, {
          method: 'DELETE'
      });
        window.location.reload();
  } catch (error) {
      console.error('Error:', error);
  }
};

  return (

    <main className='mocha bg-surface0 '>
    {authenticated ? <LHeader /> : <Header/>}
    <div className='mocha overflow-hidden w-[1060px] m-auto text-text'>
      <div className='mocha flex relative gap-8  mt-20'>
        <div className='left=0 bg-catkout h-48 w-48 bg-contain bg-no-repeat rounded-full'></div>
        <div className='flex relative flex-col border right-0 h-auto p-4 w-2/3'>
          <p>UserName: {data.user_name}</p>
          <p>Email: {data.email}</p>
          {data.first_name && info ? 
            <p>First Name: {data.first_name}</p> :
            <p>First Name: <input className='text-base border m-2 pr-2 pl-2' type="text" value={firstName} onChange={handleFirstNameChange} /></p>
          }
          {data.last_name && info ? 
            <p>Last Name: {data.last_name}</p> :
            <p>Last Name: <input className='text-base border m-2 pr-2 pl-2' type="text" value={lastName} onChange={handleLastNameChange} /></p>
          }
          {data.location && info ? 
            <p>Cohort: {data.location}</p> :
            <p>Cohort : <input className='text-base border m-2 pr-2 pl-2 ml-8' type="text" value={cohort} onChange={handleCohortChange} /></p>
          }
          {data.user_discord && info ? 
            <p>Discord: {data.user_discord}</p> :
            <p>Discord: <input className='text-base border m-2 pr-2 pl-2 ml-8' type="text" value={discord} onChange={handleDiscord} /></p>
          }
          {data.user_wtsp && info ? 
            <p>Whatsapp: {data.user_wtsp}</p> :
            <p>Whatsapp: <input className='text-base border m-2 pr-2 pl-2 ml-3' type="text" value={wtsp} onChange={handleWtsp} /></p>
          }
          {(data.location || data.last_name || data.first_name) && info ?
          <button onClick={handleInfo} className='mr-2 bg-yellow text-base bold-lg rounded w-20 h-10'>Modify</button> :
          <div>
          <button onClick={handleSave} className='mr-2 bg-green text-base bold-lg rounded w-20 h-10'>Submit</button>
          <button onClick={handleInfo} className='mr-2 bg-red text-base bold-lg rounded w-20 h-10'>Cancel</button>
          </div>
        }
        </div>
      </div>
      
      {course ? 
      <div onClick={handleTeacher} className='mocha flex relative gap-8 mt-20 cursor-pointer'>
        <div className='flex justify-center items-center left=0 w-1/5 border h-16'>
          <h1 className='bg-yellow text-base'> Modify Teacher Profil ▼ </h1>
        </div>
      </div> :
      <div onClick={handleTeacher} className='mocha flex relative gap-8 mt-20 cursor-pointer'>
        <div className='flex justify-center items-center left=0 w-1/5 border h-16'>
          <h1 className='bg-yellow text-base'> Set Teacher profile ▼ </h1>
        </div>
      </div> }


      {course ? 
      <div className={`absolute ${hideTeacher}`}>
        <div>
      <div className='mocha flex relative gap-8 mt-20'>
        <div className='flex justify-center items-center left=0 w-1/5 border h-16'>
          <h1 className=''> Courses </h1>
        </div>
        <div className='flex relative text-base flex-col border right-0 h-auto p-4 w-1/3'>
          <div className='w-full h-full '></div>
            <p className='text-text'>{course}</p>
        </div>
      </div>
      <div className='mocha flex relative gap-8 mt-20'>
        <div className='flex justify-center items-center left=0 w-56 border h-16'>
          <h1 className=''> About me </h1>
        </div>
        <div>
        <div className='flex relative text-base flex-col border right-0 h-auto p-4 w-[700px]'>
          <div className='h-full'></div>
            <p className='text-text'>{aboutMe}</p>
        </div>
          <button onClick={handleDelete} className='ml-[800px] mt-10 gap-6 mb-20 mr-2 bg-red text-base bold-lg rounded w-20 h-10'>Delete</button>
      </div>
        </div>
        </div>
      </div> :
      <div className={`absolute text-[100px] ${hideTeacher}`}>
        <div>YOU ARE NOT A TEACHER</div>
      </div> }


      <div className={`${hide} mb-40`}>
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

      <div className='flex ml-[800px] mt-10 gap-6 mb-20'>
        <button onClick={handleTeacher} className=' text-base bg-red bold-lg rounded w-20 h-10'>Cancel</button>
        <button onClick={handleSubmit} className=' bg-green text-base bold-lg rounded w-20 h-10'>Save</button>
      </div>
      </div>

    </div>
    <Footer/>
    </main>
  )
}