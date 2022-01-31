import React, { ReactNode } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

type Props = {
  children: ReactNode;
}

const Layout: React.FC<Props> = (props) => {
  return (
    <div className='flex flex-col min-h-screen flex-auto '>
      <Header />
      <div className='flex min-h-full flex-auto'>
        <Sidebar />
        { props.children }
      </div>
    </div>
  )
}

export default Layout;
