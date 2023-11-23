'use client'

import React, { useRef, useEffect, useState } from 'react';
import Cookies from 'universal-cookie';
// import Login from './Login';

interface ReviewProps {
    showAdditionalReview: boolean;
    setShowAdditionalReview: React.Dispatch<React.SetStateAction<boolean>>;
}

interface ReviewProps {
  showAdditionalReview: boolean;
  setShowAdditionalReview: React.Dispatch<React.SetStateAction<boolean>>;
  teacher_Id: string; // Add the teacher_Id property
}

const Review: React.FC<ReviewProps> = ({ showAdditionalReview, setShowAdditionalReview, teacher_Id }) => {
    const popupRef = useRef<HTMLDivElement>(null);
    const [showAdditionalContent, setShowAdditionalContent] = useState(false);
    const [err, setErr] = useState('');
    const cookies = new Cookies();
    const [authenticated, setAuthenticated] = useState(false);
    const [user_id, setUser_id] = useState('');
    const [selectedText, setSelectedText] = useState('');

    const handleSelectText = (event: { target: { value: React.SetStateAction<string>; }; }) => {
      setSelectedText(event.target.value);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
                setShowAdditionalReview(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [setShowAdditionalReview]);

  useEffect(() => {
    const token = cookies.get('authToken');
    if (token) {
        setAuthenticated(true);
        setUser_id(token);
    }
  }, []);


    const handleReview = async () => {
        try {
            const userData = {
                user_id: user_id,
                stars: 5,
                text: selectedText,

            };
            console.log(userData)

            const response = await fetch(`https://api.ryu23.tech/api/v1/teachers/${teacher_Id}/reviews`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            const data = await response.json();
            console.log(data);

            window.location.href = '/';


        } catch (error) {
            setErr(String(error))
            console.error('Error:', error);
        }
    };
  return (
  // <>
  //   {authenticated ? (
      <div ref={popupRef} className='z-50 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mocha flex flex-col shadow-2xl place-content-around rounded-lg h-[400px] w-[500px] bg-base'>
        <h1 className='text-text font-bold text-center'>Add Review</h1>
        <p className='text-center'>⭐⭐⭐⭐⭐</p>
        <div className='flex flex-col items-center'>
          <div className='flex flex-col text-base relative rounded-lg right-0 h-32 w-[75%]'>
            <textarea value={selectedText} onChange={handleSelectText} placeholder='Enter a review ...' className='w-full h-full p-2'/>
          </div>
        </div>
        <div className='flex mt-5 justify-end gap-6 mr-10'>
          <button className='text-maroon bg-white font-medium bold-lg rounded w-20 h-10'>Cancel</button>
          <button onClick={handleReview} className='text-white bg-maroon bold-lg font-medium rounded w-20 h-10'>Post</button>
        </div>
      </div>
  //   ) : ( {setAuthenticated} &&
  //     <Login showAdditionalContent={showAdditionalContent} setShowAdditionalContent={setShowAdditionalContent} />
  //   )}
  // </>
)
};

export default Review;