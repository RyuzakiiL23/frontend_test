'use client'

import React, { useRef, useEffect, useState, Dispatch, SetStateAction } from 'react';
import SignUp from './SignUp';
import Cookies from 'universal-cookie';

interface LoggedInProps {
  showAdditionalContent: boolean;
  setShowAdditionalContent: Dispatch<SetStateAction<boolean>>;
}

const Logedin: React.FC<LoggedInProps> = ({ showAdditionalContent, setShowAdditionalContent }) => {
  const popupRef = useRef<HTMLDivElement>(null);

  const cookies = new Cookies();
  const [authenticated, setAuthenticated] = useState(false);



  const handleLogout = () => {
    cookies.remove('authToken', { path: '/' });
    setAuthenticated(false);
    window.location.reload();
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const [showAdditionalSign, setShowAdditionalSign] = useState(false);
  
  const handleSignUp = () => {
    setShowAdditionalSign(!showAdditionalSign);
  };    

  const handleClickOutside = (event: MouseEvent) => {
    if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
      setShowAdditionalContent(false);
    }
  };

  return ( 
    <div ref={popupRef} className='absolute mt-10 top-[200px] right-[0px] transform -translate-x-[45px] -translate-y-1/2 mocha flex flex-col shadow-2xl place-content-around rounded-lg h-[300px] w-[200px] bg-base'>
      <ul className='flex flex-col relative w-[120px] m-auto place-center space-y-8'>
        <li onClick={() => window.location.href = '/myprofil'} className='cursor-pointer hover:text-mauve'>My profil</li>
        <li onClick={() => window.location.href = '/fav'} className='cursor-pointer hover:text-mauve'>Favorite</li>
        <li onClick={() => window.location.href = '/parm'} className='cursor-pointer hover:text-mauve'>Setting</li>
        <li onClick={handleLogout} className='cursor-pointer hover:text-mauve'>LogOut</li>
      </ul>
      {showAdditionalSign && <SignUp showAdditionalSign={showAdditionalSign} setShowAdditionalSign={setShowAdditionalSign} />}
    </div>
  );
};

export default Logedin;