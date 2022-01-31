import React from 'react';
import { Disclosure } from '@headlessui/react'

const Sidebar: React.FC = () => {
  return (
    <aside className='flex flex-col w-48 h-full bg-orange-500 relative float-left'>

      {/* -- ANCHOR Guitar -- */}
      <Disclosure>
        {({ open: Boolean }) => (
          <>
            <Disclosure.Button className='p-2 w-full text-left'>Guitar</Disclosure.Button>
            <Disclosure.Panel className='bg-orange-400 p-2 w-full'>Acoustic Guitar</Disclosure.Panel>
            <Disclosure.Panel className='bg-orange-400 p-2 w-full'>Electric Guitar</Disclosure.Panel>
            <Disclosure.Panel className='bg-orange-400 p-2 w-full'>Classic Guitar</Disclosure.Panel>
          </>
        )}
      </Disclosure>

      {/* -- ANCHOR Keyboard & Piano -- */}
      <Disclosure>
        {({ open: Boolean }) => (
          <>
            <Disclosure.Button className='p-2 w-full text-left'>Keyboard & Piano</Disclosure.Button>
            <Disclosure.Panel className='bg-orange-400 p-2 w-full'>Piano</Disclosure.Panel>
            <Disclosure.Panel className='bg-orange-400 p-2 w-full'>Keyboard</Disclosure.Panel>
            <Disclosure.Panel className='bg-orange-400 p-2 w-full'>Electone</Disclosure.Panel>
          </>
        )}
      </Disclosure>

      {/* -- ANCHOR Wind -- */}
      <Disclosure>
        {({ open: Boolean }) => (
          <>
            <Disclosure.Button className='p-2 w-full text-left'>Wind</Disclosure.Button>
            <Disclosure.Panel className='bg-orange-400 p-2 w-full'>Flute</Disclosure.Panel>
            <Disclosure.Panel className='bg-orange-400 p-2 w-full'>Trumpet</Disclosure.Panel>
            <Disclosure.Panel className='bg-orange-400 p-2 w-full'>Clarinet</Disclosure.Panel>
            <Disclosure.Panel className='bg-orange-400 p-2 w-full'>Saxophone</Disclosure.Panel>
            <Disclosure.Panel className='bg-orange-400 p-2 w-full'>Oboe</Disclosure.Panel>
            <Disclosure.Panel className='bg-orange-400 p-2 w-full'>Trombone</Disclosure.Panel>
          </>
        )}
      </Disclosure>
      
      {/* ANCHOR Bowed Strings */}
      <Disclosure>
        {({ open: Boolean }) => (
          <>
            <Disclosure.Button className='p-2 w-full text-left'>Bowed Strings</Disclosure.Button>
            <Disclosure.Panel className='bg-orange-400 p-2 w-full'>Violin</Disclosure.Panel>
            <Disclosure.Panel className='bg-orange-400 p-2 w-full'>Viola</Disclosure.Panel>
            <Disclosure.Panel className='bg-orange-400 p-2 w-full'>Cello</Disclosure.Panel>
            <Disclosure.Panel className='bg-orange-400 p-2 w-full'>Bass</Disclosure.Panel>
          </>
        )}
      </Disclosure>

      {/* ANCHOR Drum & Percussion */}
      <Disclosure>
        {({ open: Boolean }) => (
          <>
            <Disclosure.Button className='p-2 w-full text-left'>Drum & Percussion</Disclosure.Button>
            <Disclosure.Panel className='bg-orange-400 p-2 w-full'>Drum</Disclosure.Panel>
            <Disclosure.Panel className='bg-orange-400 p-2 w-full'>Cajon</Disclosure.Panel>
            <Disclosure.Panel className='bg-orange-400 p-2 w-full'>Chimes</Disclosure.Panel>
            <Disclosure.Panel className='bg-orange-400 p-2 w-full'>Xylophone</Disclosure.Panel>
            <Disclosure.Panel className='bg-orange-400 p-2 w-full'>Marimba</Disclosure.Panel>
          </>
        )}
      </Disclosure>



      
    </aside>
  )
}

export default Sidebar;