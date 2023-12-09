'use client'
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LHeader from "@/components/LHeader";
import { useEffect, useState } from "react";
import Cookies from "universal-cookie";
import Review from "@/components/Review";
import Login from "@/components/Login";

async function getTeacher(id: string) {
  const res = await fetch(`https://azure.ryu23.tech/api/v1/teachers/${id}`);
  const data = await res.json();

  if (data.error === "Not found") {
    throw new Error("Not found");
  }

  return data;
};

async function getReview(id: string) {
  const res = await fetch(`https://azure.ryu23.tech/api/v1/teachers/${id}/reviews`);
  const dataRev = await res.json();

  if (dataRev.error === "Not found") {
    throw new Error("Not found");
  }

  return dataRev;
};

export default function Page({ params }: { params: { id: string } }) {
  const [teacher, setTeacher] = useState({ user_name: '', teacher_id: '', description: '', course_name: '', first_name: '', last_name: '', user_wtsp: '', user_discord: '', user_email: ''});
  const [review, setReview] = useState([]);
  const [error, setError] = useState(null);
  const cookies = new Cookies();
  const [authenticated, setAuthenticated] = useState(false);
  const [showAdditionalContent, setShowAdditionalContent] = useState(false);
  const [showAdditionalReview, setShowAdditionalReview] = useState(false);
  const [count, setCount] = useState(0);
  const [isRotated, setIsRotated] = useState(true);

  const handleRotate = () => {
    if (authenticated) {
      setIsRotated(!isRotated);
    } else {
      setShowAdditionalContent(!showAdditionalContent);
    }
  };
    
  const handleReview = () => {
    if (authenticated) {
      setShowAdditionalReview(!showAdditionalReview);
    } else {

      setShowAdditionalContent(!showAdditionalContent);
    }
  };

  useEffect(() => {
    const token = cookies.get('authToken');
    if (token) {
        setAuthenticated(true);
    }
  }, []);

  useEffect(() => {
    const fetchTeacher = async () => {
      try {
        const data = await getTeacher(params.id);
        setTeacher(data);
      } catch (error: any) {
        setError(error.message);
      }
    };
    fetchTeacher();
  }, []);

  useEffect(() => {
    const fetchReview = async () => {
      try {
        const dataRev = await getReview(params.id);
        setReview(dataRev);
      } catch (error: any) {
        setError(error.message);
      }
    };
    fetchReview();
  }, []);

  useEffect(() => {
    setCount(review.length);
  }, [review]);

  if (error) {
    return <div>404 Not Found</div>;
  }

  return (
    <main className='mocha bg-surface0 '>
      {authenticated ? <LHeader /> : <Header/>}
      <div className=' mt-20 items-center flex flex-col mocha lg:flex lg:flex-row relative gap-4 lg:w-[1060px] m-auto text-text'>
                {isRotated ? 
          <div className={`lg:sticky top-40 gl:w-1/3 w-[350px] h-[647px]`}>
            <div className={` flex flex-col relative h-[528px] bg-overlay2 shadow-2xl rounded-3xl items-center`}>
              <div className='w-[100%] h-2/3 rounded-t-3xl bg-catkout bg-contain bg-no-repeat bg-white shadow-sm'></div>
              <div className='flex flex-col relative w-[90%]'>
                <div className='text-text text-start font-bold mt-4'>{teacher.user_name}</div>
                <div className='text-text text-start font-bold mt-4'>Course: {teacher.course_name}</div>
                <button onClick={handleRotate} className="bg-maroon text-base bold-lg rounded w-40 h-10 mt-5">Contact teacher</button>
              </div>
            </div>
          </div> :

          <div className={`sticky top-40 w-2/3 h-[647px]`}>
            <div className={` flex flex-col relative h-[528px] bg-overlay2 shadow-2xl rounded-3xl items-center`}>
              <div className=' text-[#221d3b] flex flex-col w-[100%] h-2/3 rounded-t-3xl bg-white shadow-sm'>
                <div className="flex h-2/5 items-end p-2 border-b border-gray-200">
                  <div className="h-full w-40 bg-catkout bg-no-repeat bg-contain"></div>
                  <p className="text-[#221d3b] font-bold mb-4">{teacher.first_name} {teacher.last_name}</p>
                </div>
                <div className="flex p-2 items-center h-1/5">
                  <div className="bg-email w-20 h-full bg-no-repeat bg-contain"></div>
                  <p>{teacher.user_email}</p>
                </div>
                <div className="flex p-2 items-center h-1/5">
                  <div className="bg-discord w-20 h-full bg-no-repeat bg-contain"></div>
                  <p>{teacher.user_discord}</p>
                </div>
                <div className="flex p-2 items-center h-1/5">
                  <div className="bg-whatsap w-20 h-full bg-no-repeat bg-contain"></div>
                  <p>{teacher.user_wtsp}</p>
                </div>
              </div>
              <div className='flex flex-col relative w-[90%]'>
                <div className='text-text text-start font-bold mt-4'>{teacher.user_name}</div>
                <div className='text-text text-start font-bold mt-4'>Course: {teacher.course_name}</div>
                <button onClick={handleRotate} className="bg-maroon text-base bold-lg rounded w-40 h-10 mt-5">Teacher profil</button>
              </div>
            </div>
          </div>
          }
        <div className='lg:w-2/3 w-[90%]'>
          <div className='text-lavender text-2xl font-bold mt-10 mb-10'>About "{teacher.user_name}".</div>
          <div>{teacher.description}.</div>
          <div className='text-lavender text-2xl font-bold mt-10 mb-10'>Reviews: {count}</div>
          {review.map((item: any): any => (
            <div className='flex w-full relative m-auto gap-8 border p-5 mb-10'>
              <div className='w-10 h-10 bg-no-repeat bg-contain border rounded-full bg-catkout'></div>
              <div className='w-2/3'>{item.text}.</div>
              <div className='w-20 '>{item.stars} ⭐</div>
            </div>
              ))}
            <div className='flex justify-end  mt-10 mb-20'>
              <button onClick={handleReview} className=' bg-green text-base bold-lg rounded w-40 h-10'>Add a review</button>
            </div>
            {showAdditionalReview && <Review showAdditionalReview={showAdditionalReview} setShowAdditionalReview={setShowAdditionalReview} teacher_Id={params.id} />}
            {showAdditionalContent && <Login showAdditionalContent={showAdditionalContent} setShowAdditionalContent={setShowAdditionalContent} />}
        </div>

      </div>
      <Footer/>
    </main>
  )
}