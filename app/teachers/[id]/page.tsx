'use client'
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LHeader from "@/components/LHeader";
import { useEffect, useState } from "react";
import Cookies from "universal-cookie";
import Review from "@/components/Review";
import Login from "@/components/Login";

async function getTeacher(id: string) {
  const res = await fetch(`https://api.ryu23.tech/api/v1/teachers/${id}`);
  const data = await res.json();

  if (data.error === "Not found") {
    throw new Error("Not found");
  }

  return data;
};

async function getReview(id: string) {
  const res = await fetch(`https://api.ryu23.tech/api/v1/teachers/${id}/reviews`);
  const dataRev = await res.json();

  if (dataRev.error === "Not found") {
    throw new Error("Not found");
  }

  return dataRev;
};

export default function Page({ params }: { params: { id: string } }) {
  const [teacher, setTeacher] = useState({ user_name: '', teacher_id: '', description: '', course_name: '' });
  const [review, setReview] = useState([]);
  const [error, setError] = useState(null);
  const cookies = new Cookies();
  const [authenticated, setAuthenticated] = useState(false);
  const [showAdditionalContent, setShowAdditionalContent] = useState(false);
  const [showAdditionalReview, setShowAdditionalReview] = useState(false);
  const [count, setCount] = useState(0);
    
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
      <div className=' mocha flex relative gap-4 w-[1060px] m-auto text-text'>
        <div className='w-2/3'>
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
          <div className='sticky top-40 w-1/3 h-[647px]'>
            <div className='flex flex-col relative h-[528px] bg-overlay2 shadow-2xl rounded-3xl items-center'>
              <div className='w-[100%] h-2/3 rounded-t-3xl bg-catkout bg-contain bg-no-repeat bg-white shadow-sm'></div>
              <div className='flex flex-col relative w-[90%]'>
                <div className='text-text text-start font-bold mt-4'>{teacher.user_name}</div>
                <div className='text-text text-start font-bold mt-4'>Course: {teacher.course_name}</div>
              </div>
            </div>
          </div>
      </div>
      <Footer/>
    </main>
  )
}