import React from 'react';
import Button from './Button';

export default function Header() {
  return (
    <>
      <header className='bg-orange-400 w-full shadow-lg text-white font-bold p-5 flex content-center'>
        <ul className='flex justify-between min-h-full w-full content-center'>
          <li className='flex'>logo</li>
          <li className='flex w-6/12 px-2'>
            <input type="text" id='search' className='w-full rounded text-black p-1'/>
            <Button style='bg-orange-700 shadow-lg shadow-inner shadow-orange-600 text-white font-bold' onClick={() => alert('search')}>Search</Button>
          </li>          
        </ul>
      </header>
      <nav className='flex bg-white shadow justify-between '>
        <div className='p-2'>
          left section
        </div>
        <div className='flex p-2'>
          <ul className='flex justify-end space-x-4'>
            <li>Support</li>
            <li>About</li>
            <li>Cart</li>
            <li>Account</li>
          </ul>
        </div>
      </nav>
    </>
  )
}
