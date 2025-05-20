import React, { useState ,props} from 'react'
import { MdOutlineAccountCircle } from "react-icons/md";
import { BsLayoutSidebarReverse } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineHome } from 'react-icons/md';
import { AiOutlineSearch } from 'react-icons/ai';
import { IoNotificationsOutline } from 'react-icons/io5';

export default function Sidebar(props) {

  console.log(props.show );

  const [hide, setHide] = useState(true);
  const [showNav, setShowNav] = useState(true);

  return (
    <>
      <div className={`flex flex-col lg:gap-6  rounded-r-xl bg-[#f9dbbd] lg:w-1/6 md:w-1/5 w-44 transition-transform duration-500 ease-in-out fixed top-0 bottom-0 left-0 z-20 ${hide ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className='flex justify-between cursor-pointer gap-4 p-2 lg:p-4 md:p-3'>
          <div className='hidden md:block lg:block'>
            <MdOutlineAccountCircle className='text-2xl lg:text-3xl md:text-2xl' />
          </div>
          <div className='flex gap-2'>
            <IoSettingsOutline className='hidden md:block lg:block text-xl lg:text-2xl md:text-xl' />
            <BsLayoutSidebarReverse
              onClick={() => { setHide(false); setShowNav(false); }}
              className='text-xl lg:text-2xl md:text-xl' />
          </div>
        </div>

        {(showNav || !hide) && (
          <nav className="lg:rounded-2xl md:-ml-6  md:flex flex">
            <ul className="flex flex-col gap-2   md:ml-0 md:flex md:flex-col md:gap-2 lg:gap-4 lg:flex-col">
              <li className="flex space-x-3 left-0   p-2  rounded-2xl md:py-2  md:space-x-3  bg-white lg:p-2  cursor-pointer">
                <MdOutlineHome size={24} />
                <span>Home</span>
              </li>
              <li className="flex p-2  rounded-2xl md:p-2  md:space-x-3   bg-white lg:p-2 items-center space-x-3 cursor-pointer">
                <AiOutlineSearch size={24} />
                <span>Discover</span>
              </li>
              <li className="flex p-2  rounded-2xl md:p-2  md:space-x-3  bg-white lg:p-2 items-center space-x-3 cursor-pointer">
                <IoNotificationsOutline size={24} />
                <span>Notifications</span>
              </li>
            </ul>
          </nav>
        )}
         <h6 className='lg:p-3  md:p-2 p-1 ' >History </h6>


      </div>
     

      <button className={`fixed top-4 left-4 z-20 ${hide ? 'hidden' : 'block'}`} onClick={() => { setHide(true); setShowNav(true); }}>
        <BsLayoutSidebarReverse size={24} />
      </button>


      

    </>
  )
}