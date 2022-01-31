import React, { ReactNode } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

type Props = {
  children: ReactNode;
}

const Layout: React.FC<Props> = (props) => {
  return (
    <div className='flex flex-col h-screen'>
      <Header />
      <div className='flex h-full'>
        <Sidebar />
        { props.children }
      </div>
    </div>
  )
}

export default Layout;
