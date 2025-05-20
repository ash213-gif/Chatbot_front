import React from 'react'
import { MdOutlineAccountCircle } from "react-icons/md";
import { BsLayoutSidebarReverse } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";

export default function Sidebar() {
  return (
    <div className='flex  lg:w-1/6  bg-[#f9dbbd]     cursor-pointer justify-between  gap-4 p-4'>
      <div className='hidden md:block'>
        <MdOutlineAccountCircle className='text-2xl'   /  >
      </div>
      <div className='flex  gap-2  '>
        <IoSettingsOutline className='hidden md:block text-xl ' />
        <BsLayoutSidebarReverse  className='text-xl'   /> 
      </div>
    </div>
  )
}
