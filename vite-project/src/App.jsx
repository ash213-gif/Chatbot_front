import React,{useState} from 'react'
import Sidebar from './Components/Sidebar'
import Main from './Components/Main'

export default function App() {

  return (
    <div className='lg:flex  md:flex  '  >
      <Sidebar />
      <Main  />

    </div>



  )
}
