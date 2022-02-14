import React, { ReactNode } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

type Props = {
  children: ReactNode;
}

const Layout: React.FC<Props> = (props) => {
  return (
    <div className='flex flex-col flex-auto min-h-screen'>
      <Header />
      <div className='flex min-h-full flex-auto'>
        <Sidebar />
        <div className='w-full m-4'>
          { props.children }
        </div>
      </div>
    </div>
  )
}

export default Layout;
