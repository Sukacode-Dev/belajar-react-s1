import React from 'react'
import logo from '../suka.png';


function Navbar() {
  return (
    <div className='w-full h-auto bg-gray-900 text-white flex justify-between px-8 py-4'>
        <div className='flex ml-24'>
            <img src={logo} alt="Logo react" width={60} height={60}/>
            <h1 className='text-4xl p-2 text-sky-300'>Suka-code</h1>
        </div>
        <ul className='flex mr-24'>
            <li className='p-4 hover:text-sky-300'>Docs</li>
            <li className='p-4 hover:text-sky-300'>Tutorial</li>
            <li className='p-4 hover:text-sky-300'>Community</li>
        </ul>
    </div>
  )
}

export default Navbar