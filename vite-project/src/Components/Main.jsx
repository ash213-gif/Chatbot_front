import React from 'react'
import { useState } from 'react';
import { MdAddCircleOutline } from 'react-icons/md';
import { BsImage } from 'react-icons/bs';
import { BsFillCaretUpFill } from "react-icons/bs";
import { MdUploadFile } from 'react-icons/md';
import { FcGoogle } from 'react-icons/fc';
import { MdLink } from 'react-icons/md';


export default function Main() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  return (
    <>
      <div className='   lg:w-5/6  lg:p-10  lg:-mb-0   lg:justify-end lg:bottom-0  w-full flex justify-center'>
        <div className='w-5/6   fixed  lg:bottom-8 lg:right-2 '>
          <div className='flex items-center  inputContent  border border-gray-300 rounded-lg lg:p-10 lg:rounded-3xl   bg-white shadow-lg '>
            <button className="  " onClick={() => setDropdownOpen(!dropdownOpen)}>
              <MdAddCircleOutline size={24} className="lg:text-2xl" />
            </button>
            <input
            onClick={()=>setDropdownOpen(false)}
            type="text" className='flex-1 p-2 outline-none' placeholder='Type a message...' />
            <button className='mx-2'>
              <BsImage size={24} />
            </button>
            <button className='ml-2 lg:p-2  sendicon    bg-[#a53860] '>
              <BsFillCaretUpFill className='lg:text-xl text-white ' />
            </button>
          </div>
        </div>

      </div>

      {dropdownOpen && (
        <div className="absolute animation left-60 bottom-30  bg-[#ffa5ab] shadow-md rounded-lg p-1 gap-3 ">
          <ul className='flex   flex-col gap-2' >
            <li className=" flex gap-2  cursor-pointer">
              <MdUploadFile size={20} className="" />
              Upload local Storage
            </li>
            <li className=" flex  gap-2 cursor-pointer">
              <FcGoogle size={20} className="" />
              Google Drive 
            </li>
            <li className=" flex  gap-2 cursor-pointer">
              <MdLink size={20} className="" />
              Link
            </li>
          </ul>
        </div>
      )}
    </>
  )
}
