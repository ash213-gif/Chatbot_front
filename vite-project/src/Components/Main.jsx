import React ,{props}  from 'react'
import { useState } from 'react';
import { MdAddCircleOutline } from 'react-icons/md';
import { BsImage } from 'react-icons/bs';
import { BsFillCaretUpFill } from "react-icons/bs";
import { MdUploadFile } from 'react-icons/md';
import { FcGoogle } from 'react-icons/fc';
import { MdLink } from 'react-icons/md';

export default function Main() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [data, setData] = useState(false);
  const [show, setShow] = useState('');

  const submitHandle = () => {
    setData(true);
    setShow('');
    setShow(show);
  }

  return (
    <>

      <div className='container mx-auto p-2 lg:w-5/6 md:w-4/5  '>
        <div className='lg:rounded-2xl bg-white wrap-break-word resultContainer scrollbar-hide lg:h-[450px] md:h-[400px] h-[600px] fixed   md:fixed  lg:mt-10 md:mt-10 mt-10  overflow-auto'>
          <div className='   lg:w-5/6  h-screen   ' >
            <div className='  md:w-[600px]   lg:rounded-2xl   wrap-break-word resultContainer scrollbar-hide lg:h-[550px] md:h-[400px] h-[370px] lg:mt-10  mt-4 lg:flex md:flex flex flex-col lg:w-5/6  w-full lg:ml-48 md:ml-30 ml-0 overflow-auto'>
              <div className='lg:flex lg:flex-col lg:p-4 md:p-4 p-2'>
                {data &&
                  <p className='text-gray-700 text-sm md:text-base leading-relaxed'>
                    Responsive design is the cornerstone of modern web development,
                    <span className='bg-yellow-200 px-1 py-0.5 rounded'>enabling websites to seamlessly adapt to diverse screen sizes and devices</span>.
                    With the vast array of smartphones, tablets, and desktops available, a responsive design ensures that your website's
                    <span className='bg-yellow-200 px-1 py-0.5 rounded'>layout, content, and user experience remain optimal</span>,
                    regardless of how users access it. By incorporating responsive design principles, developers can
                    <span className='bg-yellow-200 px-1 py-0.5 rounded'>enhance user engagement, improve conversion rates, and boost search engine rankings</span>,
                    ultimately driving business success in an increasingly digital landscape.
                  </p>

                }
                {data &&
                  <p className='text-gray-700 text-sm md:text-base leading-relaxed'>
                    Responsive design is the cornerstone of modern web development,
                    <span className='bg-yellow-200 px-1 py-0.5 rounded'>enabling websites to seamlessly adapt to diverse screen sizes and devices</span>.
                    With the vast array of smartphones, tablets, and desktops available, a responsive design ensures that your website's
                    <span className='bg-yellow-200 px-1 py-0.5 rounded'>layout, content, and user experience remain optimal</span>,
                    regardless of how users access it. By incorporating responsive design principles, developers can
                    <span className='bg-yellow-200 px-1 py-0.5 rounded'>enhance user engagement, improve conversion rates, and boost search engine rankings</span>,
                    ultimately driving business success in an increasingly digital landscape.
                  </p>

                }
                {data &&
                  <p className='text-gray-700 text-sm md:text-base leading-relaxed'>
                    Responsive design is the cornerstone of modern web development,
                    <span className='bg-yellow-200 px-1 py-0.5 rounded'>enabling websites to seamlessly adapt to diverse screen sizes and devices</span>.
                    With the vast array of smartphones, tablets, and desktops available, a responsive design ensures that your website's
                    <span className='bg-yellow-200 px-1 py-0.5 rounded'>layout, content, and user experience remain optimal</span>,
                    regardless of how users access it. By incorporating responsive design principles, developers can
                    <span className='bg-yellow-200 px-1 py-0.5 rounded'>enhance user engagement, improve conversion rates, and boost search engine rankings</span>,
                    ultimately driving business success in an increasingly digital landscape.
                  </p>

                }
                {data &&
                  <p className='text-gray-700 text-sm md:text-base leading-relaxed'>
                    Responsive design is the cornerstone of modern web development,
                    <span className='bg-yellow-200 px-1 py-0.5 rounded'>enabling websites to seamlessly adapt to diverse screen sizes and devices</span>.
                    With the vast array of smartphones, tablets, and desktops available, a responsive design ensures that your website's
                    <span className='bg-yellow-200 px-1 py-0.5 rounded'>layout, content, and user experience remain optimal</span>,
                    regardless of how users access it. By incorporating responsive design principles, developers can
                    <span className='bg-yellow-200 px-1 py-0.5 rounded'>enhance user engagement, improve conversion rates, and boost search engine rankings</span>,
                    ultimately driving business success in an increasingly digital landscape.
                  </p>

                }
                {data &&
                  <p className='text-gray-700 text-sm md:text-base leading-relaxed'>
                    Responsive design is the cornerstone of modern web development,
                    <span className='bg-yellow-200 px-1 py-0.5 rounded'>enabling websites to seamlessly adapt to diverse screen sizes and devices</span>.
                    With the vast array of smartphones, tablets, and desktops available, a responsive design ensures that your website's
                    <span className='bg-yellow-200 px-1 py-0.5 rounded'>layout, content, and user experience remain optimal</span>,
                    regardless of how users access it. By incorporating responsive design principles, developers can
                    <span className='bg-yellow-200 px-1 py-0.5 rounded'>enhance user engagement, improve conversion rates, and boost search engine rankings</span>,
                    ultimately driving business success in an increasingly digital landscape.
                  </p>

                }
                {data &&
                  <p className='text-gray-700 text-sm md:text-base leading-relaxed'>
                    Responsive design is the cornerstone of modern web development,
                    <span className='bg-yellow-200 px-1 py-0.5 rounded'>enabling websites to seamlessly adapt to diverse screen sizes and devices</span>.
                    With the vast array of smartphones, tablets, and desktops available, a responsive design ensures that your website's
                    <span className='bg-yellow-200 px-1 py-0.5 rounded'>layout, content, and user experience remain optimal</span>,
                    regardless of how users access it. By incorporating responsive design principles, developers can
                    <span className='bg-yellow-200 px-1 py-0.5 rounded'>enhance user engagement, improve conversion rates, and boost search engine rankings</span>,
                    ultimately driving business success in an increasingly digital landscape.
                  </p>

                }

              </div>
            </div>


          </div>
        </div>

        <div className='fixed p-2  md:bottom-4  md:items-center md:justify-center  '>
          <div className='flex    md:justify-center inputContent border border-gray-300 rounded-lg p-2 lg:rounded-3xl  shadow-lg'>
            <div className='fixed   right-16    lg:p-14 lg:right-18 md:bottom-4  md:right-20 bottom-3   lg:w-4/6   '>
              <div className='flex  md:w-[500px]   items-center inputContent border border-gray-300 rounded-lg p-2  bg-white lg:rounded-3xl md:rounded-2xl  shadow-lg'>
                <button className="mr-2" onClick={() => setDropdownOpen(!dropdownOpen)}>
                  <MdAddCircleOutline size={24} className="lg:text-2xl md:text-xl" />
                </button>
                <input
                  onClick={() => { setDropdownOpen(false) }}
                  onChange={(e) => { setShow(e.target.value) }}
                  value={  show}
                  type="text"
                  className='flex-1 p-2 outline-none'
                  placeholder='Type a message...'
                />
                <button className='mx-2'>
                  <BsImage size={24} />
                </button>
                <button className='ml-2 lg:p-2  md:p-1 sendicon bg-[#a53860]'>
                  <BsFillCaretUpFill
                    onClick={submitHandle}
                    className='lg:text-xl text-xl  md:text-lg text-white' />
                </button>
              </div>
            </div>
          </div>
        </div>



         {dropdownOpen && (
          <div className=" animation bottom-20 lg:bottom-33 md:bottom-24 lg:left-100 md:left-32 left-0 right-0 lg:right-auto bg-[#ffa5ab] shadow-md rounded-lg p-2 gap-3 w-full lg:w-auto md:w-64">
            <ul className='flex p-2 flex-col gap-2'>
              <li className="flex gap-2 cursor-pointer">
                <MdUploadFile size={20} className="" />
                Upload local Storage
              </li>
              <li className="flex gap-2 cursor-pointer">
                <FcGoogle size={20} className="" />
                Google Drive
              </li>
              <li className="flex gap-2 cursor-pointer">
                <MdLink size={20} className="" />
                Link
              </li>
            </ul>
          </div>
        )}

       
      </div>
    </>
  )
}