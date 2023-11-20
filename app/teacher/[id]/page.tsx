'use client'
import Footer from "@/components/Footer";
import LHeader from "@/components/LHeader";
import { useEffect, useState } from "react";


interface ProductDetailProps {
  params: {
    id: string;
  };
}

function ProductDetail({ params }: ProductDetailProps) {

  const [data, setData] = useState([])
  const [teacherId, setTeacherId] = useState('')
  const [teacherName, setTeacherName] = useState('')

  useEffect(() => {
    const fetchDataFunction = async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const jsonRes = await res.json();
        setData(jsonRes)
        data.map((item: any): any => {
          if (item.id === params.id) {
            // setTeacherId(String(params.id))
            setTeacherName(item.username)
            console.log(item)
          }
        })

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchDataFunction();
  }, []);


  return (
    <main className='mocha bg-surface0 '>
    <LHeader />
    <div className=' mocha flex relative gap-4 w-[1060px] m-auto text-text'>
      <div className='w-2/3'>
        <div className='text-lavender text-2xl font-bold mt-10 mb-10'>About {teacherName}.</div>
        <div>Start learning from your experien how to make a rectangle in figma wrap it's content and dont let text for example if past inside to go outside for example if I create a rectongle and I past a one line long text it should not get written out of that rectangle it should go to the next time everytime it reached the end of the line.</div>
        <div className='text-lavender text-2xl font-bold mt-10 mb-10'>Reviews</div>
          <div className='flex w-full relative m-auto gap-8 border p-5 mb-10'>
            <div className='w-20 h-20 bg-no-repeat bg-contain border rounded-full bg-catkout'></div>
            <div className='w-2/3'>for example if I create a rectongle and I past a one line long text it should not get written out of that rectangle it should go to the next time everytime it reached the end of the line. for example if I create a rectongle and I past a one line long text it should not get written out of that rectangle it should go to the next time everytime it reached the end of the line.</div>
            <div className='w-20 '>stars</div>
          </div>

          <div className='flex w-full relative m-auto gap-8 border p-5 mb-10'>
            <div className='w-20 h-20 bg-no-repeat bg-contain border rounded-full bg-catkout'></div>
            <div className='w-2/3'>for example if I create a rectongle and I past a one line long text it should not get written out of that rectangle it should go to the next time everytime it reached the end of the line. for example if I create a rectongle and I past a one line long text it should not get written out of that rectangle it should go to the next time everytime it reached the end of the line.</div>
            <div className='w-20 '>stars</div>
          </div>

          <div className='flex w-full relative m-auto gap-8 border p-5 mb-10'>
            <div className='w-20 h-20 bg-no-repeat bg-contain border rounded-full bg-catkout'></div>
            <div className='w-2/3'>for example if I create a rectongle and I past a one line long text it should not get written out of that rectangle it should go to the next time everytime it reached the end of the line. for example if I create a rectongle and I past a one line long text it should not get written out of that rectangle it should go to the next time everytime it reached the end of the line.</div>
            <div className='w-20 '>stars</div>
          </div>
          <div className='flex justify-end  mt-10 mb-20'>
            <button className=' bg-green text-base bold-lg rounded w-40 h-10'>Add a review</button>
          </div>
      </div>
        <div className='sticky top-40 w-1/3 h-[647px]'>
          <div className='flex flex-col relative h-[528px] bg-overlay2 shadow-2xl rounded-3xl items-center'>
            <div className='w-[100%] h-2/3 rounded-t-3xl bg-catkout bg-contain bg-no-repeat bg-white shadow-sm'></div>
            <div className='flex relative w-[90%]'>
              <div className='text-text text-start font-bold mt-4' key={teacherId}>{teacherName}</div>
            </div>
          </div>
        </div>
    </div>
    <Footer/>
  </main>
  )
}
export default ProductDetail;