import React,{useState} from 'react'
import Sidebar from './Components/Sidebar'
import Main from './Components/Main'

export default function App() {
  const [show, setShow] = useState('')
  return (
    <div className='lg:flex  md:flex  '  >
      <Sidebar show={show} />
      <Main show={show} setShow={show} />

    </div>



  )
}
